SPI/JTAG tile
========

Mounting
----------
When using the SPI/JTAG tile board, it is important to mount the tile board in the correct direction. The jtag pins should face outside, as shown in the picture below.

![spi/jtag tile](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/spi_jtag1.jpg)

When connecting the flash adapter, connect it as shown in the picture below. The flash should be mounted on the bottom part of the adapter. Be sure the flash is mounted in the connector properly by chekcing that the dot on the flash chip is in the correct corner.

![Flash mount](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/flash-mount1.jpg)

**ATTENTION:** If you mount the flash reversed, it will burn in seconds when powered on.

Debrick using SPI tile board
----------------------------
If you have a problem with uboot and it cannot boot up totally, the only way to fix this is to use the SPI/JTAG tile board. Refer to the following link for info.
https://www.kickstarter.com/projects/706167548/dominoio-an-open-hardware-wifi-platform-for-things/posts/1200391

