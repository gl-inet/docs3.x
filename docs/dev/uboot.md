Advance Usage of uboot
=================

Familiarity with uboot is a skill that you should master in order to play with the routers.

About uboot
-----------
Uboot (universial bootloader) is the bootloader we used on our boards and routers to start OpenWrt Linux. The bootloader heavily depends on the hardware so almost every device requires a different bootloader.

To use the bootloader, you have to [connect a UART serial connector](/dev/serial/) to your device.

Taking our Atheros 9331 boards for example, when powered up, uboot will output the following text:
```
*********************************************
*   U-Boot 1.1.4  (Sep  9 2014, 09:20:16)   *
*********************************************

AP121 (AR9331) U-Boot for GL.iNet

DRAM:   64 MB DDR 16-bit
FLASH:  Winbond W25Q128 (16 MB)
CLOCKS: 400/400/200/33 MHz (CPU/RAM/AHB/SPI)

LED on during eth initialization...

Hit any key to stop autobooting:  0
```
Quickly press any key to stop booting.

Uboot console
-------------
Uboot is very useful to save your router. Here is some useful command in uboot.

`printenv` prints out the environment variables

```
uboot> printenv
bootargs=console=ttyS0,115200 root=31:02 rootfstype=squashfs init=/sbin/init mtdparts=ar7240-nor0:128k(u-boot),1024k(kernel),2816k(rootfs),64k(config),64k(ART)
bootcmd=bootm 0x9F020000
bootdelay=1
baudrate=115200
ipaddr=192.168.1.1
serverip=192.168.1.2
bootfile="firmware.bin"
loadaddr=0x80800000
ncport=6666
uboot_addr=0x9F000000
uboot_name=uboot.bin
uboot_size=0x10000
uboot_upg=if ping $serverip; then tftp $loadaddr $uboot_name && if itest.l $filesize == $uboot_size; then erase $uboot_addr +$filesize && cp.b $loadaddr $uboot_addr $filesize && echo OK!; else echo ERROR! Wrong file size!; fi; else ERROR! Server not reachable!; fi
firmware_addr=0x9F020000
firmware_name=firmware.bin
firmware_upg=if ping $serverip; then tftp $loadaddr $firmware_name && erase $firmware_addr +$filesize && cp.b $loadaddr $firmware_addr $filesize && echo OK!; else ERROR! Server not reachable!; fi
stdin=serial
stdout=serial
stderr=serial
ethact=eth0

Environment size: 937 bytes

uboot>
```
`md` displays data in flash or memory. The following command displays the data in flash from beginning, which is the binary of uboot itself.
```
uboot> md 0x9f000000
9F000000: 100000FF 00000000 100000FD 00000000    ................
9F000010: 1000018E 00000000 1000018C 00000000    ................
9F000020: 1000018A 00000000 10000188 00000000    ................
9F000030: 10000186 00000000 10000184 00000000    ................
9F000040: 10000182 00000000 10000180 00000000    ................
9F000050: 1000017E 00000000 1000017C 00000000    ...~.......|....
9F000060: 1000017A 00000000 10000178 00000000    ...z.......x....
9F000070: 10000176 00000000 10000174 00000000    ...v.......t....
9F000080: 10000172 00000000 10000170 00000000    ...r.......p....
9F000090: 1000016E 00000000 1000016C 00000000    ...n.......l....
9F0000A0: 1000016A 00000000 10000168 00000000    ...j.......h....
9F0000B0: 10000166 00000000 10000164 00000000    ...f.......d....
9F0000C0: 10000162 00000000 10000160 00000000    ...b.......`....
9F0000D0: 1000015E 00000000 1000015C 00000000    ...^.......\....
9F0000E0: 1000015A 00000000 10000158 00000000    ...Z.......X....
9F0000F0: 10000156 00000000 10000154 00000000    ...V.......T....
```

## Setting up tftp server

### Ubuntu Linux
In Ubuntu, you can install tftp using apt
```
sudo apt-get install tftpd-hpa
```
The configuration file is `/etc/default/tftpd-hpa`. Modify its content and change the TFTP_DIRECTORY to your folder which will contains your files.
```vim
TFTP_USERNAME="TFTP"
TFTP_DIRECTORY="/tftpboot"
TFTP_ADDRESS="[::]:69"
TFTP_OPTIONS="--secure"
```

Sometime the service cannot be started because network is not available when it starts. Start the service manually.
```
sudo service tftpd-hpa restart
```

### Windows

Download service edition of tftpd from http://tftpd32.jounin.net/tftpd32_download.html, then install it.

![tftp install](https://static.gl-inet.com/docs/en/2.x/dev/src/tftpd-install.png) 

Turn off windows firewall, which is the main reason causing tftpd failed to connect.

![tftp install](https://static.gl-inet.com/docs/en/2.x/dev/src/firewall.png) 

Run tftpd64_SE Admin, choose your tftpd root (in this example D:\tftp), choose the "Server interface" 192.168.1.2 When clients are connecting to this server, you can see them in the status window.

![tftp install](https://static.gl-inet.com/docs/en/2.x/dev/src/tftpd-status.png) 

Compiling uboot
---------------

Each device has a different uboot because it is hardware related.

### GL-AR150, GL.iNet6416, GL-AR300, GL-AR300M

For these models you can use [Pepe2k's](https://github.com/pepe2k/u-boot_mod) uboot, you can download the source from github.
```
$ git clone https://github.com/pepe2k/u-boot_mod.git
$ cd u-boot_mod
```
To compile the source, you need to have a cross complier toolchain. I am using openwrt toolchain. Make modification to the `Makefile`.

```cmake
export BUILD_TOPDIR=$(PWD)
export STAGING_DIR=$(BUILD_TOPDIR)/tmp

# **Replace the following line with your real path**
export TOOLPATH=$(BUILD_TOPDIR)/../openwrt/staging_dir/toolchain-mips_34kc_gcc-4.8-linaro_uClibc-0.9.33.2/

export PATH:=$(TOOLPATH)/bin:${PATH}

export MAKECMD=make --silent --no-print-directory ARCH=mips CROSS_COMPILE=mips-openwrt-linux-uclibc-

# boot delay (time to autostart boot command)
export CONFIG_BOOTDELAY=1
```

Now start to compile the source. For example, for GL.iNet 6416, you can use:

```
make gl-inet

```
For GL-AR150, you can do this:
```
make 8devices_carambola2
```

For GL-AR300 and GL-AR300M, we modified the code a lot so please consult us for details.

It should be very quick and finish in minutes. Then you will find `uboot_for_gl-inet.bin` in `bin/`.

### GL-AR150 uboot modify as IoT devices

If you connect IoT addon to AR150's UART, which talks to AR150 using serial. When the IoT addon send some data during uboot boot, it may stop the booting process so you never have the router alive. You need to modify the uboot a little bit so that it can succesffuly boot. 

Use this code from github [https://github.com/domino-team/uboot-domino](https://github.com/domino-team/uboot-domino)

In this uboot, you need to type `gl` quickly during uboot boot to enter uboot console.

### MT300A, MT300N, MT750

MT series routers use a different uboot and different code. Consult us if you need.

## Using uboot

You can use `printenv` to display the environment variables in uboot. here are some quick guide of how to use uboot.

First you need to set up tftp server as above and put your files in tftp root folder.

### basic uboot command
**Download file to router** (AR150, Domino, 6416 as example)
```
tftp 0x81000000 file.bin
```
**Erase some part of flash**
```
erase 0x9f050000 +0x10000
```
**Write file to flash**
```
cp.b 0x81000000 0x9f050000 0x10000
```

### predefined script
Actually it is not easy to use basic uboot command to do everyting. It is quite risky. Fortunately we have some pre-defined scripts that simplifeis the work.

Plase do check using `printenv` to find out the correct filename that the script trying to download. 
For example, if you want to update uboot for AR150, the uboot file should be named as `uboot_for_gl-ar150.bin` and put in your tftp root folder.

**Replace uboot**
```
run lu
```
**Update firmware**
```
run lf
```
**Update mac address etc**
```
run lc
```

**Erase uboot env variables**
Be sure to use the right command for the right model
For AR150, Domino AR300, AR300M
```
erase 0x9f040000 +0x10000
reset
```
For 6416
```
erase 0x9f010000 +0x10000
reset
```

### Uboot Web UI

Uboot has a webUI so that you can save your device without entering uboot console.

![Uboot Web UI](https://static.gl-inet.com/docs/en/2.x/dev/src/uboot_failsafe.png)

Check [this section](/troubleshooting/debrick.md)  for how to enter uboot web UI using the reset button.

If you are in uboot console, you can start the WebUI the following command. This only works for AR series, not MT series.
```
httpd
```

### AR300M Specific
AR300M uses dual flash so in uboot there are a lot of things to deal with dual flash. Please refer to [AR300M](/hardware/ar300m/) for more details.

## Discussions
