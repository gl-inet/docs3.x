Using Arduino Yun Firmware
===========================

You can use the original Arduino Yun firmware or use Linino Yun firmware. Be sure to flash the Serial hex to your AVR first.

Domino Qi uboot can support Arduino and Linino firmware, so you don't risk bricking your device when you try. But please do this carefully and make sure every step works succefully.

The original Arduino Yun firmware is here: https://www.arduino.cc/en/Main/Software#toc8

The original Linino Yun firmware is here: http://download.linino.org/linino_distro/lininoIO/latest/ 

Using Arduino Yun Firmware
--------------------------

###Method 1: Doing this in uboot console

Connect to the serial according to [these steps](serial.html).

Press the "Reset" button to reset the OpenWrt system. Then quickly type `gl` to enter the uboot console.

Change env: `setenv bootcmd bootm 0x9fea0000`
```
setenv bootcmd bootm 0x9fea0000
saveenv
```

Setup your tftp server and download the kernel, rootfs to your Domino Qi.

**Kernel**
```
tftp 0x80060000 openwrt-ar71xx-generic-yun-16M-kernel.bin;
erase 0x9fea0000 +0x140000;
cp.b $fileaddr 0x9fea0000 $filesize;
```

**rootfs**
```
tftp 0x80060000 openwrt-ar71xx-generic-yun-16M-rootfs-squashfs.bin;
erase 0x9f050000 +0xE50000;
cp.b $fileaddr 0x9f050000 $filesize;
```

Now type `reset` to reset your board and you will have the original Yun firmware running.

###Method 2: Doing this in Domino Qi system

After you boot your Domino Qi system, ssh to your system.

check if you can access the environment variables using `fw_printenv`.

If you get the following error message, you have use uboot console to flash the firmware.
```
root@domino:/# fw_printenv 
Warning: Bad CRC, using default environment
bootcmd=bootp; setenv bootargs root=/dev/nfs nfsroot=${serverip}:${rootpath} ip=${ipaddr}:${serverip}:${gatewayip}:${netmask}:${hostname}::off; bootm
bootdelay=5
baudrate=115200

Don't continue if you get the above message.

```

If you don't have a `Bad CRC` message, continue with the following:

```
fw_setenv bootcmd "bootm 0x9fea0000"
sysupgrade -v -n --force /mnt/sda1/openwrt-ar71xx-generic-yun-16M-squashfs-sysupgrade.bin 

```

If you have a `Bad CRC` message, don't do this, as this will cause your board not bootable. 


Using Linino Firmware
----------------------

You can also use the Linino firmware for Arduino Yun. Linino has two branch, one is master, one is LininoIO.

For master branch, download from http://download.linino.org/linino_distro/master/latest/, the file names are:

- openwrt-ar71xx-generic-linino-yun-16M-250k-kernel.bin
- openwrt-ar71xx-generic-linino-yun-16M-250k-rootfs-squashfs.bin
- openwrt-ar71xx-generic-linino-yun-16M-250k-squashfs-sysupgrade.bin

For LininoIO branch, download from http://download.linino.org/linino_distro/lininoIO/latest/, the file names are:

- lininoIO-generic-linino-yun-kernel.bin
- lininoIO-generic-linino-yun-rootfs-squashfs.bin
- lininoIO-generic-linino-yun-squashfs-sysupgrade.bin

	
###Method 1: Doing this in uboot console

Connect to the serial according to [these steps](serial.html).

Press the "Reset" button to reset the OpenWrt system. Then quickly type `gl` to enter the uboot console.

Change env:
```
setenv bootcmd bootm 0x9fea0000
setenv bootargs console=ttyATH0,250000 board=linino-yun mem=64M rootfstype=squashfs,jffs2 noinitrd mtdparts=spi0.0:256k(u-boot)ro,64k(u-boot-env)ro,14656k(rootfs),1280k(kernel),64k(nvram),64k(art),15936k@0x50000(firmware)
saveenv
```

Setup your tftp server and download the kernel, rootfs to your Domino Qi.

For Linino firmware

**Kernel**
```
tftp 0x80060000 openwrt-ar71xx-generic-linino-yun-16M-250k-kernel.bin;
erase 0x9fea0000 +0x140000;
cp.b $fileaddr 0x9fea0000 $filesize;

```

**rootfs**
```
tftp 0x80060000 openwrt-ar71xx-generic-linino-yun-16M-250k-rootfs-squashfs.bin;
erase 0x9f050000 +0xE50000;
cp.b $fileaddr 0x9f050000 $filesize;
```

For LininoIO firmware

**Kernel**
```
tftp 0x80060000 lininoIO-generic-linino-yun-kernel.bin;
erase 0x9fea0000 +0x140000;
cp.b $fileaddr 0x9fea0000 $filesize;

```

**rootfs**
```
tftp 0x80060000 lininoIO-generic-linino-yun-rootfs-squashfs.bin;
erase 0x9f050000 +0xE50000;
cp.b $fileaddr 0x9f050000 $filesize;
```

Finally use `reset` to reset your board and boot the firmware.


###Method 2: Doing this in Domino Qi system

If you have already boot the Domino Qi system, check if you can access the environment variables using `fw_printenv`.

If you get the following error message, you have to use uboot console to flash the firmware.
```
root@domino:/# fw_printenv 
Warning: Bad CRC, using default environment
bootcmd=bootp; setenv bootargs root=/dev/nfs nfsroot=${serverip}:${rootpath} ip=${ipaddr}:${serverip}:${gatewayip}:${netmask}:${hostname}::off; bootm
bootdelay=5
baudrate=115200

```

If you do **NOT** have a `Bad CRC` message, continue with the following. Otherwise use method 1.
```
fw_setenv bootcmd "bootm 0x9fea0000"
fw_setenv bootargs "console=ttyATH0,250000 board=linino-yun mem=64M rootfstype=squashfs,jffs2 noinitrd mtdparts=spi0.0:256k(u-boot)ro,64k(u-boot-env)ro,14656k(rootfs),1280k(kernel),64k(nvram),64k(art),15936k@0x50000(firmware)"
```

To upgrade to Linino firmware:
```
cd /tmp
wget http://download.linino.org/linino_distro/master/latest/openwrt-ar71xx-generic-linino-yun-16M-250k-squashfs-sysupgrade.bin
sysupgrade -v -n --force openwrt-ar71xx-generic-linino-yun-16M-250k-squashfs-sysupgrade.bin
```

To upgrade to LininoIO firmware:

```
cd /tmp
wget http://download.linino.org/linino_distro/lininoIO/latest/lininoIO-generic-linino-yun-squashfs-sysupgrade.bin
sysupgrade -v -n --force lininoIO-generic-linino-yun-squashfs-sysupgrade.bin
```

Wait until the process finish and reset your board.


