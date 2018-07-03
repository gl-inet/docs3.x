Domino Qi Serial
============

As the UART of OpenWrt is connected to AVR, you have to use the serial console via AVR.

Connection
-------------

Connect Domino Qi Mini to your computer. Don't use the MicroUSB connector in the Qi baseboard (There are footprint, but we don't solder it by default).

Flash AVR
-----------

When you got your Domino Qi for the first time, it may already have flashed the serial terminal to AVR. If not, do it now.

```
run-avrdude /etc/linino/YunSerialTerminal.hex
```
The instructions of how to use this is documented here: https://www.arduino.cc/en/Tutorial/YunSerialTerminal

Linux (Ubuntu)
---------------

If you use Linux hosts, you may likely have the devices identified as `/dev/ttyACM0`, connect to it using kermit.  

Windows
-------------

If you are using Windows system, you may have device identified as `Arduino Yun`, find its port number and connect it to using `putty`.

