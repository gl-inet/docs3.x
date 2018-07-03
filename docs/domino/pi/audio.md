Playing Audio and music
================


The hardware Setup
--------------------

The I2S tile board connects to the left part of of Domino Pi, Thus you cannot connect Ethernet tiles without stackable headers. You can also connect to the Internet via WiFi without Ethernet.

![I2S assembly](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/i2s-assembly.jpg)

The software
---------------

The audio module is built into the Domino Pi firmware, but not loaded automatically, to load the module, use `insmod glzt_i2s`.


```
insmod glzt_i2s
```

To enable auto-load of the audio module, build a entry in `/etc/modules.d/`

```
echo glzt_i2s > /etc/modules.d/glzt_i2s
```

To play music, you can use `mpg123`.

E.g. to play music in your usb mounted on `/mnt/sda1`, just do:

```
mpg123 /mnt/sda1/my_music.mp3
```  

You can play Internet radio the same way:

```
mpg123 http://your-internet-radio.com/your-stream
```

![mpg123](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/mpg123.jpg)
