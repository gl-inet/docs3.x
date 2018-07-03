Getting started

#Domino Pi headers

Domino Pi has a Domino Core mounted onboard. When you first get your Pi, you need to learn about its headers.

![headers](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/pi-headers.jpg)

When placed as shown in the picture, you can divide the header into a left part and a right part. The left part contains 18pins on each North and South connectors and the right part contains 10 pins from both North and South connectors. 

The left part can be used to mount Ethernet boards (including Single Ethernet and Dual Ethernet boards) and I2S board. While the right part can be used to mount USB boards (including Single USB and 3xUSB boards) and JTAG/SPI boards. Refer to the hardware section to make sure you mount the right extension boards in the right headers, otherwise you may break your Domino.

For a more detailed marking of the headers, refer to this diagram.

![headers detailed](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/pi-headers1.jpg)

![Pi back](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/pi-back.jpg)

#Assembly

Put the Ethernet and USB tile boards aligned with Domino Pi as shown, then plug the tile boards to the headers. 

![Assembly](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/assembly.jpg)

Press the tile board firmly to the Domino Pi board. You can do the same for the Dual Ethernet board and the 3xUSB+MicroSD board.

![Assembly1](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/assembly1.jpg)



For the LED board, just plug in the LED board as in this picture. Please make sure the LED board is plugged into the correct position by checking the header markings on the bottom of Domino Pi.

![LED](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/led.jpg)

#Connections

Connect your Domino with an Ethernet cable to your router. Then connect power to the MicroUSB connector on Domino Pi board and your board will be powered up!


![Connection](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/pi-connection.jpg)

#Using Domino Pi

When you see the LEDS (WAN, WLAN) light up, your Domino has booted up. Now using a browser (use Firefox or Chrome) to visit [http://domino.local/](http://domino.local/), you will be able to access the WebUi of Domino.

Please visit [this page](using.md) to get more details on how to use the Domino Pi WebUi.
