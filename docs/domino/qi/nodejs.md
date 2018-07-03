#Using NodeJS and LininoIO
Install NodeJS on Domino Qi is very simple. 

##Install NodeJS
###1. Insert a MicroSD card
Install one MicroSD card to the slot on Domino Qi baseboard first in order to install packages that take a lot of space and use a lot of memory.

###2. Run installation script
Just execute the installation script: `/etc/linino/nodeyun_inst_latest.sh`, you will be asked to install fdisk first.
```
$ sh /etc/linino/nodeyun_inst_latest.sh

Fdisk is not installed ! ! ! The script will install the package for you...

Press [Enter] key to install fdisk...

```
After install fdisk, relauch the script: `/etc/linino/nodeyun_inst_latest.sh`
```
#sh /etc/linino/nodeyun_inst_latest.sh
```
When you get the prompt
```
Welcome to Linino Node.Js installation script v13

Linino node.js installation menu

1. Prepare SDCard and install node.js
2. Revert to original settings
3. Exit and reboot
4. Kill all node processes
0. Exit
 
Choose : 
```
choose `1`,  then you will be promted:
```
WARNING : All data on your SDCard Would will be erased, are you sure ? (y/n)
```
Several software packages will be downloaded and installed. If you meet some errors (e.g. fuser) but the script continues, just continue.

It takes several minutes to install the packages and format the MicroSD card. Then you will be prompt with the menu again:
```
Linino node.js installation menu

1. Prepare SDCard and install node.js
2. Revert to original settings
3. Exit and reboot
4. Kill all node processes
0. Exit
```
Now choose 3 and reboot the system.

###3. Install ideino
Now you should already nodejs installed. Check using `which`
```
root@domino:~# which node
/opt/usr/bin/node
```
Let's install extra packages including ideino. This takes several minutes.
```
opkg update
opkg install ideinoIO -d mnt
npm install -g node-static
npm install node-static enable
```
In the default ideinoIO packages, there is no domino_qi layout, create it by copying arduino_yun layout
```
cd /opt/usr/lib/node_modules/ideino-linino-lib/utils/layouts
cp arduino_yun.json domino_qi.json
```

##Install LininoIO - The easy way

LinioIO is a framework that let you interact your AVR from openwrt using NodeJS. 

###Check uboot environment variables
Before you use LininoIO, you need to check uboot environments first. In OpenWrt, do `fw_printenv`. If you see the following output, it means that uboot env is not saved. DON'T continue before you save uboot env.

![CRC error](https://static.gl-inet.com/docs/en/2.x/domino/qi/src/crc.jpg)

Now enter uboot and save envirment vairables. You need to use do this using serial as intructed [here](serial.html).

![Save env](https://static.gl-inet.com/docs/en/2.x/domino/qi/src/saveenv.jpg)

###Install LininoIO
Then you can reset your board and boot the Linux system. Simply execute `lininoio start`.

You can revert back and disable LininoIO by just executing `lininoio stop`.

![LininoIO Stop](https://static.gl-inet.com/docs/en/2.x/domino/qi/src/lininoio-stop.png)

![LininoIO Stop](https://static.gl-inet.com/docs/en/2.x/domino/qi/src/lininoio-stop1.png)

##Install LininoIO - The comprehensive way

###1. Setup environement in openwrt

In order to let Linino IO start when system start, you need to set several environment variables in uboot. Type `fw_printenv` to display the uboot env variables.

If you got the following error message, it means that the uboot env variables are not stored to flash and you need to go to Step 1. - alternative.

![CRC error](https://static.gl-inet.com/docs/en/2.x/domino/qi/src/crc.jpg)


If you saw correct output as shown below, now set the two variables.
```
root@domino:~# fw_printenv 
bootcmd=bootm 0x9f050000
bootdelay=2
ipaddr=192.168.1.1
serverip=192.168.1.2
bootfile="firmware.bin"
loadaddr=0x80800000
ncport=6666
uboot_addr=0x9F000000
uboot_name=uboot_for_domino.bin
uboot_size=0x40000
uboot_backup_size=0x40000
lu=if ping $serverip; then mw.b $loadaddr 0xFF $uboot_backup_size && cp.b $uboot_addr $loadaddr $uboot_backup_size && tftp $loadaddr $uboot_name && if itest.l $filesize <= $uboot_size; then erase $uboot_addr +$uboot_backup_size && cp.b $loadaddr $uboot_addr $uboot_backup_size && echo OK!; else echo ERROR! Wrong file size!; fi; else echo ERROR! Server not reachable!; fi
firmware_addr=0x9F050000
firmware_name=openwrt-domino.bin
lf=if ping $serverip; then tftp $loadaddr $firmware_name && erase $firmware_addr +$filesize && cp.b $loadaddr $firmware_addr $filesize && echo OK!; else echo ERROR! Server not reachable!; fi
lc=tftp 0x81000000 config.bin &&cp.b 0x9fff1000 0x80060000 0xf000 && cp.b 0x81000000 0x80060002 0x06 &&erase 0x9fff0000 +0x10000 && cp.b 0x81000000 0x9fff0000 $filesize && cp.b 0x80060000 0x9fff1000 0xf000
ethact=eth0
stdin=serial
stdout=serial
stderr=serial
bootargs=console=spicons,250000 board=domino root=31:03 rootfstype=squashfs,jffs2 noinitrd mtdparts=spi0.0:256k(u-boot)ro,64k(u-boot-env),1280k(kernel),14656k(rootfs),64k(nvram),64k(art)ro,15936k@0x50000(firmware)
baudrate=250000
```
Now use `fw_setenv` to set bootargs and baudrate and reboot your openwrt.
```
fw_setenv bootargs "console=spicons,115200 board=domino root=31:03 rootfstype=squashfs,jffs2 noinitrd mtdparts=spi0.0:256k(u-boot)ro,64k(u-boot-env),1280k(kernel),14656k(rootfs),64k(nvram),64k(art)ro,15936k@0x50000(firmware)"
fw_setenv baudrate 250000
```

###1. - alternative. Setup environement in uboot
If your step 1 cannot be done because uboot env is not readable, you need to do this in uboot console. First you need to have the AVR serial installed, if not, by doing `run-avrdude /etc/linino/YunSerialTerminal.hex`
```
run-avrdude /etc/linino/YunSerialTerminal.hex
```
After avr is flashed, you need to enter uboot console. 
First connect power to the MicroUSB connect of Domino Qi Mini, not Dimono Qi baseboard. Your windows will recognize the device as Arduino Yun. 
1. Use putty to connect to the comm port. 
2. Press the Openwrt Reset button on Domino Qi Mini
3. type "gl" quickly once you see the uboot prompt, and you will enter the uboot console.
4. execut the change env using `setenv` and `saveenv` then `reset` your board
```
setenv bootargs console=ttyATH0,250000 board=domino root=31:03 rootfstype=squashfs,jffs2 noinitrd mtdparts=spi0.0:256k(u-boot)ro,64k(u-boot-env),1280k(kernel),14656k(rootfs),64k(nvram),64k(art)ro,15936k@0x50000(firmware)
setenv baudrate 250000
saveenv
reset
```

###2. Flash AVR
You need to flash the correct hex to AVR: `run-avrdude /etc/linino/bathos-yun.hex`
```
run-avrdude /etc/linino/bathos-yun.hex
```
Attention: You may got error when flashing in the verification step, just ignore it. 

###3. Reboot 
You need to reboot your system to let the system auto-detect the settings and run the LininoIO framework.
Just to check if it is running succefully, do a `ps` to see if there are many processes named mcuio_irq. 
If you cannot see them, try `/etc/init.d/mcuio enable` `/etc/init.d/mcuio start`
```
/etc/init.d/mcuio enable
/etc/init.d/mcuio start

```

![MCUIO](https://static.gl-inet.com/docs/en/2.x/domino/qi/src/mcuio.png)


