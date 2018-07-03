Working with serial
==================

It is important to have a USB-UART adapter and work with serial if you want to play with Domino. With serial, you will be able to access the console and have full control of the OpenWrt system and bootloader.

USB-UART adapter
----------------

Domino Pi has a built-in USB-UART bridge. So you have two serial connectors, one is on the MicroUSB power connector and the other is on the Ethernet board, which is connected to the Domino Core. 

![USB-UART](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/adapter.jpg)

Just connect Domino Pi to your computer. It will be powered up and at the same time you will have access to the serial.

Sometime you need to connect directly to the Domino Core UART, and you will need a USB-UART adapter.


**ATTENTION**: If you are connecting with an external USB-UART adapter, be sure connect to the correct pins:

![Serial Connections](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/serial-connection.jpg)

In Windows
------------

If you want to use connector 1, Windows will automatically detect the USB to UART Bridge and install drivers. 

![USB-UART](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/driver.jpg)

Find its com number. (Which is `COM36` in my case.) 

If you use your own USB UART adapter, you will have a com number also. (Which is `COM4` in my case.)

You need a serial term, we recommend [PuTTY](http://http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) and [RealTerm](http://realterm.sourceforge.net/). Download them for free.

Launch PuTTY and input `COM36` as the "Serial line", `115200` as speed, check the Connection type as `Serial`, then click `Open`. 

![USB-UART](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/putty.jpg)

Then press `Enter` you will enter OpenWrt.

![USB-UART](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/putty1.jpg)

You can also connect to `COM4` using the same way.

![USB-UART](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/putty2.jpg)

At the same time, you can also connect to the serial using Connector 2. Execute realterm, fill the currect Baudrate `115200`, port number `36` and click `Open`. 

![USB-UART](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/realterm.jpg)

**ATTENTION** Only one term can connect to one serial device at the same time.

Working with two serials
-----------------------

In the above instructions, we used two terms connected to two serial ports: PuTTY connecting to Connector 2 (original uart of Domino Core) and RealTerm connecting to Connector 1 (the build in USB-UART bridge). Once you connect RealTerm, you will find that in PuTTY you cannot input anything, but you can input from RealTerm. 

![USB-UART](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/realterm1.jpg)

You can enable input in PuTTY by clearing `RTS` in RealTerm. Go to the "Pins" page and click "Clear" in RTS section. Now you will be able to input in PuTTY, but not in RealTerm. To enable input in RealTerm again, click "Set" in RTS section.

In Linux (Ubuntu)
-------------------

We only test in Ubuntu. For any other distro, if you have any questions, pls discuss in the community.

In Ubuntu, when connecting Domino Pi to your computer's USB directly, it will be identified as `/dev/ttyUSB*`, e.g. `/dev/ttyUSB0` if you only have USB serial device.

###ckermit
Download ckermit from http://www.columbia.edu/~kermit/ckermit.html#download or use `sudo apt-get install ckermit` to install it.

```
$ sudo apt-get install ckermit
```

make a file with name `.kermrc` in your home directory. The content is as following:
```
#cat ~/.kermrc

set line /dev/ttyUSB0
set speed 115200
set carrier-watch off
set handshake none
set flow-control none
robust
set file type bin
set file name lit
set rec pack 1000
set send pack 1000
set window 5
``` 

Now execute kermit `sudo kermit -c` to get access to the console of your Domino Pi.
```
sudo kermit -c
```

If you have multiple serial devices, create one configure file for each device, and then put the file name as parameters. For example, for ttyUSB1, use `sudo kermit ~/.kermrc_ttyUSB1 -c`. 
```
sudo kermit ~/.kermrc_ttyUSB1 -c
```

The escape key for kermit is `Ctrl`+`\` followed by `c`.

Other tools
-------------

You can also use `screen` or `cu` to access the serial.



