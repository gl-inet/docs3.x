Domino Qi Mini
=============

Overview
---------

Domino Qi Mini is a small-sized board that is a fully compatible derivative of the original Arduino Yun<sup>TM</sup>, crammed into a tiny form factor.

Plug it onto the Domino Qi baseboard in order to be fully compatible with the ubiquitous ArduinoTM Shield form factor and benefit from hundreds of already existing shields for rapid prototyping.

Domino Qi Mini is a low-cost, compact OpenWRT-based 802.11 bgn WiFi board based on Qualcomm/Atheros AR9331 WiSoC and on the Atmel ATMega32U4 MCU. Communication between the 2 chips is achieved using an Arduino Yun<sup>TM</sup>-compatible Bridge hardware and software library.

![Qi Mini](https://static.gl-inet.com/docs/en/2.x/domino/qi/src/qi_mini1.jpg)
![Qi Mini](https://static.gl-inet.com/docs/en/2.x/domino/qi/src/qi_mini2.jpg)
![Qi Mini](https://static.gl-inet.com/docs/en/2.x/domino/qi/src/qi_mini3.jpg)

The Domino Qi Mini board extends the Domino Core module by adding the following features:

* Atmel ATMega32U4 MCU
* Arduino Yun<sup>TM</sup>-compatible Bridge
* +5 V input / +3.3 V output, 2 A DC/DC power supply
* 2.4 GHz WiFi PCB antenna
* **32U4 Reset, WLAN Reset and User** push buttons
* **Power, Wireless, WAN** and **USB** LEDs
* 2x 22 pin, 2.54 mm pitch headers

The dual edge headers provide:

* USB 2.0 (host or slave)
* 1x 10/100MB Ethernet port
* ATMega32U4 ICSP (MOSI, MISO, SCK, SS)
* ATMega32U4 RESET pin
* ATMega32U4 UART (TXD1, RXD1)
* ATMega32U4 I2C (SDA, SCL)
* ATMega32U4 digital (+ PWM) pins (D4-D6 and IO8-13)
* ATmega Analog pins (A0-5 + AREF)
* Arduino Yun<sup>TM</sup>-compatible pins (HANDSHAKE, GP6)
* +5V, +3.3V and GND power supply pins

**Note**: Domino is not connected to Arduino<sup>TM</sup> and the Domino Qi Mini product is a derivative. Any technical support must be directed to us, not to Arduino<sup>TM</sup>.

Specifications
----------------

specs | Value
------|------
Weight |12 g 
Dimensions |55.88 x 33.02 x 10.8 mm 
CPU |AR9331, 400 MHz + ATMega32U4, 16 MHz
Memory |16 MB SPI Flash and 64 MB DDR2 RAM
RF Frequency |2.4 GHz band
Max Output Power |+21 dBm
Wireless Standards |802.11 bgn
Antenna (port) |U.FL connector, built-in PCB antenna
Power Supply |5 V, max. 
power consumption |6.5 W
Firmware |U-Boot, OpenWRT
Available Interfaces |USB host/slave, 1 x Ethernet, ICSP, ATMega32U4 Digital pins (+ PWM), ATmega32U4 Analog pins, Arduino Yun HANDSHAKE + GP6, Power Supply pins
User Interfaces |ATMega32U4 USB UART bridge, 32U4 RESET push button, WLAN RESET push button, USER push button, Power Led, Wireless LED, WAN LED, USB LED

Pinout
----------

![Qi Mini Pinout](https://static.gl-inet.com/docs/en/2.x/domino/qi/src/qi_mini_pinout.jpg)

[Qi Mini Pinout in PDF](https://static.gl-inet.com/docs/en/2.x/domino/qi/src/Domino-Qi-Mini-Pinout.pdf)
