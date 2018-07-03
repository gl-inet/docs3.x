Domino Pi Hardware
============

Overview
------------------

Domino Pi is a low-cost, compact OpenWRT-based 802.11 bgn WiFi development board based on Qualcomm/Atheros AR9331 WiSoC.

![Domino Pi](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/pi.png)

The Domino Pi board extends the Domino Core module by adding the following features:

* Integrated USB<->UART bridge for serial port (default to U-Boot / Linux console)
* Integrated +5 V input / +3.3 V output, 2 A DC/DC power supply
* Integrated 2.4 GHz WiFi PCB antenna
* Integrated Jumpstart push button
* Integrated Power and Wireless LEDs
* Integrated 2x 28 pin, 2.54 mm pitch headers

The dual edge headers provide:

* USB 2.0 (host or slave)
* 2 x 10/100MB Ethernet ports
* SPI (MOSI, MISO, CLK, CS)
* I2S (CK, WS, SD, MCK, MICIN)
* SLIC
* SPDIF Output
* JTAG (TMS, TCK, TDI, TDO)
* 9x LEDs (also used for bootstrap settings)
* Up to 29 x GPIOs (multiplexed with other functions above)

Specifications
------------------

| Specs | Value |
|-----------------|----------------|
| Weight |	16 g |
| Dimensions |	71.12 x 33.02 x 10 mm |
| CPU | AR9331, 400 MHz |
| Memory | 16 MB SPI Flash and 64 MB DDR2 RAM |
| RF Frequency | 2.4 GHz band |
| Max Output Power | +21 dBm |
| Wireless Standards | 802.11 bgn |
| Antenna (port) | U.FL connector, built-in PCB antenna |
| Power Supply	| 5 V, max. power consumption 6.5 W |
| Firmware | U-Boot, OpenWRT |
| Available Interfaces | USB host/slave, 2 x Ethernet, SPI, I2S, SLIC, SPDIF, JTAG, 9x LEDs, 29 x GPIOs |
| User Interfaces | USB UART bridge, Jumpstart push button, Power Led, Wireless LED |

Pinout Diagram
------------------
![Domino Pi](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/pi_pinout.jpg)

Get in PDF format.

[Domino Pi Pinout](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/Domino-Pi-Pinout.pdf)
