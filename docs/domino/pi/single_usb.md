Domino Single USB Tile Board
=========================

Overview
----------------
When connected to the Domino Pi or Domino Qi Mini board, the Domino Single USB Tile adds 1x standard USB 2.0 USB Type A Master or Slave port. 

Features:

* Break out the USB pins to physical USB-A
* USB power controlled by GPIO6

**If you USB has no power using your own firmware, most of time, it is because of GPIO6 is set to Low. Set it to high to enable USB power**

```bash
	# Enable the USB power by using GPIO6

	echo "6" > /sys/class/gpio/export
	echo "out" > /sys/class/gpio/6/direction
	echo "1" > /sys/class/gpio/gpio6/value
```


The Domino Single USB Tile connects as an East-side Tile.

It is compatible with the Domino Pi and Domino Qi Mini boards.


![Single USB board ](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/single_usb1.jpg)
![Single USB board ](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/single_usb2.jpg)
![Single USB board ](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/single_usb3.jpg)


Specifications
--------------------

Weight 4 g 
Dimensions 5.72 x 33.02 x 25 mm