Domino 3USB+MicroSD Combo Title Board
=================================

Overview
--------------

When connected to the Domino Pi or Domino Qi Mini board, the Domino 3x USB / MicroSD Combo Tile adds:

* 1x **USB-A** R/A Horizontal Socket for USB 2.0 Low / Full / High-speed Host Port
* 2x USB 2.0 Low / Full / High-speed Host Ports on standard **PC USB front-panel-type** 2x5 Header
* 1x **MicroSD Card Slot** (Push to Lock / Push to Unlock)
* USB **power control** by GPIO6 

**If you USB has no power using your own firmware, most of time, it is because of GPIO6 is set to Low. Set it to high to enable USB power**

```bash
	# Enable the USB power by using GPIO6

	echo "6" > /sys/class/gpio/export
	echo "out" > /sys/class/gpio/6/direction
	echo "1" > /sys/class/gpio/gpio6/value
```

The Domino 3x USB / MicroSD Combo Tile connects as an East-side Tile.

It is compatible with the Domino Pi and Domino Qi Mini boards.

![USB combo ](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/usb_combo1.jpg)
![USB combo ](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/usb_combo2.jpg)
![USB combo ](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/usb_combo3.jpg)


Specifications
--------------------

Weight 7 g 
Dimensions 34.54 x 33.02 x 15 mm

