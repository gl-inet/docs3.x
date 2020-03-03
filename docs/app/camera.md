# Connecting USB Webcams to GL-iNet routers

## Supported Models
Through GL.iNet routers, you can monitor your home, office by using USB webcam.
If you have your own USB Webcam, you can follow the procedures below to set up real time monitoring via GL.iNet routers and see if it is workable.

The following routers with USB 2.0 port should be able to support USB Webcams:

* GL-AR150
* GL-AR300M 
* GL-MT-300N-V2
* GL-AR750
* GL-AR750S
* GL-MV1000
* GL-MIFI
* GL-X750

![](https://static.gl-inet.com/docs/en/3/app/camera/camera_compatible_model.png)



The current router firmware version 3.0 does not contain USB Webcam control interface. You need to install plug-ins and make it workable in Luci. 


## Install Plug-ins

#### The below installation method is available for Windows, Mac OS. 

Go to
**APPLICATIONS**, then 
**Plug-ins**,
Install two apps:dd

1. luci-app-mjpg-streamer
2. kmod-video-uvc

![](https://static.gl-inet.com/docs/en/3/app/camera/1.png)

After Installation of two applications, click **MORE SETTINGS - Advanced**, enter your router login password on the login page.

![](https://static.gl-inet.com/docs/en/3/app/camera/2.png)

![](https://static.gl-inet.com/docs/en/3/app/camera/3.png)

Click **Service**-**MJPG-steamer**, tick **Enabled** and then click **Save&Apply**.

***mjpg streamer is a streaming application for Linux-UVC compatible webcams***

![](https://static.gl-inet.com/docs/en/3/app/camera/4.png)

![](https://static.gl-inet.com/docs/en/3/app/camera/5.png)

Open a new page in browser, enter the IP address of your router and port number that you specified, for example, enter 192.168.8.1:8080”. 

 #### (The default port number is 8080, if the port number does not work, you can specify your own port number.) 

Your Stream is now running on your computer at the port that you specified. 

## Adjust the webcam as needed

### 1. How to record your videos?

Capture - Start Capture - Select OK to start capture of video sequence to save the files. You can select a directory for saving capture videos before starting capture, file - set capture directory.

### 2. How to change the resolution?

Plugin Settings-UVC input.Select resolution:
You can change you resolution from 320X240 to 1920x1080.

## microuter USB Webcam

If you want to purchase a USB Webcam that is workable with GL.iNet routers, microuter USB Webcam has been tested by GL.iNet. You can purchase it through the following link:

[Amazon US](https://www.amazon.com/dp/B082NRZZLT?ref=myi_title_dp)

[Amazon UK](https://www.amazon.co.uk/dp/B082NRZZLT?ref=myi_title_dp)

[Amazon DE](https://www.amazon.de/dp/B0834LFZ29?ref=myi_title_dp)

[Amazon FR](https://www.amazon.fr/dp/B082NRZZLT?ref=myi_title_dp)

[Amazon IT](https://www.amazon.it/dp/B082NRZZLT?ref=myi_title_dp)

[Amazon ES](https://www.amazon.es/dp/B082NRZZLT?ref=myi_title_dp)

[AliExpress](https://www.aliexpress.com/item/4000579361414.html?spm=a2g0o.detail.1000023.1.552d287eRwizYo)

## **Enjoy your streaming USB webcam through connecting GL.iNet router.**

