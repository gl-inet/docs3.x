
Getting started with Domino Kits
===================



**Note: The Domino Project is depreciated. Only Domino Core is still under production** 



FAQ
-------------------

**(1) What is the WiFi password?**

```
	It is "goodlife".
```

**(1) How can I connect to the board**

```
	You can connect to it via IP address, which is 192.168.8.1 via LAN/WiFi.
	You can also connect to it via http://domino.local
```

**(2) Why cannot I connect to http://domino.local?**

```
	You need bonjour service. Download it from https://support.apple.com/kb/DL999?locale=en_US for windows.
```

**(3) Is it open hardware? **

```
	All the Domino boards are open hardware, which you can find the schematics and layout in [Github](https://github.com/domino-team/domino-hardware).
	Domino Core is based on Atheros proprietary reference design and is not open hardware.

```


What is in the whole kit
------------------------

Domino is a high-performance 802.11 bgn WiFi hardware platform, with a modular design architecture, unlimited extension capabilities and Arduino compatibility.

Domino is designed using `Atheros AR9331 WiSoC` which is widely used in mini routers and IoT projects.

![Domono family](https://static.gl-inet.com/docs/en/2.x/domino/src/tree.jpg)

The Domino Family has now 11 boards and more extensions will be developed. The tree structure of the boards is as illustrated.

At the heart is Domino Core, which can then be extended into Domino Pi and Domino Qi. Domino Pi is a DEV platform for wifi and openwrt, it can be extended with various tile boards. Domino Qi is designed for Arduino compatible. Plug the Domino Qi Mini board onto the Domino Qi baseboard to turn it into a board fully compatible the ubiquitous Arduino Shield form factor.


Domino Core
--------------

Domino Core is the heart of Domino.IO. It is designed for makers to easily build their own products based on it. It is compact, `only 1.6 square inches with 60 castellated pins (2mm pitch), 3xEthernet, USB2.0, serial port, SPI, I2S, SLIC, SPDIF, JTAG, 9xLEDs and 29 GPIOs`. Check the the beautiful pinout diagram below for details.

![Domino Core](https://static.gl-inet.com/docs/en/2.x/domino/src/core.png)

Go to the [Domino Core hardware](#!domino/hardware/core.md) for more details of the hardware.






Domino Pi
---------------

Domino Pi is designed both as a Domino Core development board and as an extension. You can develop your own board based on the Domino Pi. See the pinout diagram below. We have seven useful tile boards available, providing easy to use building blocks, enabling you to extend the Pi board as you wish.

Domino Pi is with newest `OpenWrt` BB1407 and CC1505 firmware.

![Domino Pi](https://static.gl-inet.com/docs/en/2.x/domino/src/domino-pi.png)

For more details on how to use the Pi, please check the below sections:
-  [Domino Pi Baseboard Section](pi/pi.md) 
-  [Single Ethernet board Section](pi/single_eth.md) 
-  [Dual Ethernet board Section](pi/dual_eth.md) 
-  [3xUSB+MicroSD Combo Section](pi/usb_combo.md) 
-  [I2S board Section](pi/i2s.md) 
-  [SPI/JTAG Section](pi/spi_jtag.md) 
-  [LED Section](pi/led.md) 







Domino Qi
-----------------
Domino Qi Mini is a small board that is a fully compatible derivative of the original `Arduino Yùn`, crammed into a tiny form factor. It is a low-cost, compact OpenWRT-based 802.11 bgn WiFi board based on Qualcomm/Atheros AR9331 WiSoC and on the Atmel `ATMega32U4 MCU`. Communication between the two chips is achieved using Arduino Yùn-compatible Bridge hardware and software library.
Plug the Domino Qi Mini board onto the Domino Qi baseboard to turn it into a board `fully compatible with the ubiquitous Arduino Shield form factor` and benefit from hundreds of already existing shields for rapid prototyping.

![Domino Pi](https://static.gl-inet.com/docs/en/2.x/domino/src/domino-qi.png)

For more details on how to use the Qi, please check the below sections:
-  [Domino Qi section](#!domino/qi/index.md) 
-  [Qi Baseboard section](qi/base.md) 
-  [Qi Mini section](qi/mini.md) 





Where to get help
------------------

First you need to read this documentation. We will try our best to make the documentation complete and detailed.

Second, we will have our own forum open later, when you will be ask questions there.

Third, go the existing community of [OpenWrt](http://www.openwrt.org) if you want to explore the embedded Linux system, and go to [Arduino](http://arduino.cc) if you want to explore the features related to Arduino.


# Discussions
