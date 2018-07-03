Domino I2S Audio Tile Board
======================

Overview
-------------
When connected to the Domino Pi board, the Domino I2S Tile adds audio capabilities and ports:

  * Wolfson WM8978 Stereo CODEC with Speaker Driver (Datasheet), faturing:
  * DAC SNR 98dB, THD -84dB ('A' weighted @ 48kHz)
  * ADC SNR 95dB, THD -84dB ('A' weighted @ 48kHz)
  * On-chip Headphone Driver with 'capless' option
  * 40mW per channel into 16ohm / 3.3V SPKVDD
  * 1W output power into 8ohm BTL speaker / 5V SPKVDD
  * Capable of driving piezo speakers
  * Stereo speaker drive configuration
  * Stereo Differential or mono microphone Interfaces
  * Programmable preamp gain
  * Psuedo differential inputs with common mode rejection
  * Programmable ALC / Noise Gate in ADC path
  * Low-noise bias supplied for electret microphones
  * Enhanced 3-D function for improved stereo separation
  * Digital playback limiter
  * 5-band Equaliser (record or playback)
  * Programmable ADC High Pass Filter (wind noise reduction)
  * Programmable ADC Notch Filter
  * Aux inputs for stereo analogue input signals or 'beep'
  * On-chip PLL supporting 12, 13, 19.2MHz and other clocks
  * Support for 8, 11.025, 12, 16, 22.05, 24, 32, 44.1 and 48kHz sample rates
  * Low power, low voltage - 2.5V to 3.6V (digital: 1.71V to 3.6V)
  * 5x5mm 32-lead QFN package
  * 3.5 mm Stereo Audio Jack (Tip: Left / Ring: Right / Sleeve: Ground): LINE OUT / HEADPHONE OUT
  * SPDIF Optical Transmitter: DIGITAL AUDIO OUT
  * On 2x edge header pins: Stereo SPEAKER OUT
  * Integrated ? 4.5 mm Mono Electret Microphone, also available on edge header pins
  * On 2x Pin Header: Stereo AUX IN

The Domino Dual Ethernet Tile connects as a West-side Tile.

It is only compatible with the Domino Pi board, as the Domino Qi Mini does not feature I2S interface.

![I2S board](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/i2s1.jpg)
![I2S board](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/i2s2.jpg)
![I2S board](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/i2s3.jpg)

Specifications
--------------------

| Specs | Value |
|-----------------|-------------------|
|Weight	 | 10 g | 
|Dimensions	| 50.8 x 33.02 x 24 mm | 
|Audio CODEC	|  Wolfson WM8978 | 
|LINE OUT / HEADPHONE OUT	|  3.5 mm Stereo Audio Jack | 
|DIGITAL AUDIO OUT	 |  SPDIF Optical Transmitter | 
|SPEAKER OUT	|  2x Edge Header Pins | 
|Microphone	|  Integrated ? 45 mm Mono Electret Microphone,  2x Edge Header Pins | 
|AUX IN	| 2x Header Pins | 

Pinout
----------------

![I2S Pinout](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/i2s_pinout.jpg)

[Pinout in PDF](https://static.gl-inet.com/docs/en/2.x/domino/pi/src/Domino-I2S-Pinout.pdf)


Playing Audio and Music Using I2S board
-----------------------------------------------------------

[Play Audio and Musci](audio.md)