# qDslrDashboard - Control Your DSLR Camera Wirelessly

qDslrDashboard is a Windows/Linux/MacOS and Android/iOS compatible app that lets you control your DSLR.
Together with your GL-iNet router, you can also control your camera **wirelessly**.

### Supported Features
 - change camera settings/properties
 - initiate capture
 - display live view (on DSLR cameras that support it)
 - start/stop movie recording (on DSLR cameras that support it)
 - BULB capture (on DSLR cameras that support it)
 - image browser for local images and images located on camera SD card
 - custom bracketing (in M and A mode)
 - focus stacking
 - Sky stacking helper
 - interval timer
 - LrTimelapse screen for helping time-lapse shooting
 - capture history
 - control the Dynamic Perception NMX motion controller

### Supported Cameras

**Nikon:**

 - D5000 (no BULB), D5100 (no BULB), D5200, D5300, D5500, D5600 (wireless need to be activated with the Nikon Snapbridge application)
 - D80 (no BULB), D90 (no BULB, no video), D7000 (no BULB), D7100, D7200
 - D300/D300s (no BULB, no video) (some LV limitations for now)
 - D600/D610
 - D700 (no BULB, no video) (some LV limitations for now)
 - D500 (wireless need to be activated with the Nikon Snapbridge application)
 - D750
 - D800, D800E, D810, D810A
 - D7500, D850 (will be supported from V3.5.4) (wireless need to be activated with the Nikon Snapbridge application)
 - D3 (no BULB, no video), D3s (no BULB, no video), D3X (no BULB, no video), D4, D4s, D5
 - D3000, D3100, D3200, D3300, D3400 (cameras have limited remote functionality and only basic control is available. There is no BULB, no video recording, no AF point change in LV, and no many other functions.)

**Canon:**

 - EOS 100D
 - EOS 1100D, 1200D
 - EOS 400D, 450D, 500D, 550D, 600D, 650D, 700D, 750D, 760D
 - EOS 50D, 60D, 70D
 - EOS 80D (from version V3.5.3)
 - EOS 7D, 7D mk II
 - EOS 6D
 - EOS 5D mk II (some issues with AF point change in LV), 5D mk III
 - EOS 5D mk IV (from version V3.5.3)
 - EOS 1D mk II, mk III, mk IV
 - EOS 1Ds mk II, mk III
 - EOS 1DX

**Sony:**

 - Sony cameras with built in wifi work directly with the qDslrDashboard apps, but since this guide is for GL-iNet routers, it will not be covered in this guide. Read the official documentation to find out how to get it work using your Sony camera here: [https://dslrdashboard.info/documentation/](https://dslrdashboard.info/documentation/)

### Client Downloads

Download the latest client version for your device from here:
[https://dslrdashboard.info/downloads/](https://dslrdashboard.info/downloads/)

The Windows/Linux/MacOS apps are free, but the Android/iOS are **paid** (around 10 dollars)

### Installation Guide
At this point it is expected that your router works, and can connect to the internet without issues.

 - Install the client for your device from the download link above.
 - Login to your router and navigate to Applications -> Plug-ins
 - Click "update" in the top right:

![Update](https://static.gl-inet.com/docs/en/3/app/qdslrdashboard/qdslr1.png)

 - Search for and install "ddserver"

![Install](https://static.gl-inet.com/docs/en/3/app/qdslrdashboard/qdslr2.png)

 - To check if the installation was successful, go to the following url: [http://192.168.8.1/cgi-bin/luci/admin/system/startup](http://192.168.8.1/cgi-bin/luci/admin/system/startup) .
If you have changed the default ip of your router, use that in the link above instead. Login and in the list, find ddserver and make sure it says "enabled" as bellow:

![Running](https://static.gl-inet.com/docs/en/3/app/qdslrdashboard/qdslr3.png)

 - Installation done, follow the usage guide bellow for some examples how to control your camera :)

### Usage Guide
This guide will show the process for a **Nikon D7000** camera, using a **GL-iNet Mifi 4G** router, and an **Android** phone as a client.
This process might vary a little for the other clients, but should be just as straight forward.

 - Turn on your GL-iNet router and wait for it to boot up.
 - Connect your device, in my case an Android phone, to your GL-iNet router over wifi.
 - Turn on and connect your camera using the right usb cable from your camera, to your router. My camera uses a Mini USB cable.

![Camera](https://static.gl-inet.com/docs/en/3/app/qdslrdashboard/qdslr4.jpg)

 - Open the client on your device, in this case Android, and tap and hold the button bellow to pop up the connection dialog:

![Connect](https://static.gl-inet.com/docs/en/3/app/qdslrdashboard/qdslr5.png)

 - Enter the IP of your router. You only have to do this 1 time, next time just tap the connection button to connect.
Notice i am not using the default router IP since i have changed it:

![IP](https://static.gl-inet.com/docs/en/3/app/qdslrdashboard/qdslr6.png)

 - You will see the connection info like bellow while connecting:

![Connecting](https://static.gl-inet.com/docs/en/3/app/qdslrdashboard/qdslr7.png)

 - Once the connection is made, you will see this screen:

![Main Screen](https://static.gl-inet.com/docs/en/3/app/qdslrdashboard/qdslr8.png)

 - If your camera supports Liveview, you can press the "Lv" button to get a live view from the camera:

![Live View](https://static.gl-inet.com/docs/en/3/app/qdslrdashboard/qdslr9.png)

### Example Usage
Follow the official manual for guides on how to use all the features here:
[https://dslrdashboard.info/documentation/](https://dslrdashboard.info/documentation/)

The following photos were taken using custom exposure bracketing, with 11 photos:

![Custom Bracket](https://static.gl-inet.com/docs/en/3/app/qdslrdashboard/qdslr10.png)

And the HDR result after merging them:

![HDR Result](https://static.gl-inet.com/docs/en/3/app/qdslrdashboard/qdslr11.jpg)

