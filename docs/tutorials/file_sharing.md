# File Sharing on GL.iNet Routers

You can use GL.iNet routers with external storage device such as USB stick, MicroSD card, etc,  thus the contents can be shared among all your connected clients. You can easily read or modify its contents. 

---



##Router settings

The contents of the external storage device are shared to LAN but not WAN and they are unwritable by default. Please click on your router model below to check how to change the file sharing settings of the router. 

**Supported external storage devices**


| Router Model | USB Stick | USB Hard Drive | MicroSD Card |
| :----------- | :-------: | :---: | :---: |
| [GL-MT300N-V2](https://docs.gl-inet.com/en/3/setup/mini_router/applications/#file-sharing) |     √     |    √ | - |
| [GL-AR150 Series](https://docs.gl-inet.com/en/3/setup/mini_router/applications/#file-sharing) | √ | √ | - |
| [GL-AR300M Series](https://docs.gl-inet.com/en/3/setup/mini_router/applications/#file-sharing) | √ | √ | - |
| GL-USB150 | - | - | - |
| [GL-MiFi](https://docs.gl-inet.com/en/3/setup/4g_smart_router/applications/#file-sharing) | √ | √ | √ |
| [GL-AR750](https://docs.gl-inet.com/en/3/setup/travel_ac_router/applications/#file-sharing) | √ | √ | √ |
| [GL-AR750S-Ext (Slate)](https://docs.gl-inet.com/en/3/setup/slate/applications/#file-sharing) | √ | √ | √ |
| [GL-B1300 (Convexa B)](https://docs.gl-inet.com/en/3/setup/convexa_b/applications/#file-sharing) | √ | √ | - |
| [GL-S1300 (Convexa S)](https://docs.gl-inet.com/en/3/setup/convexa_s/applications/#file-sharing) | √ | √ | - |
| [GL-X750 (Spitz)](https://docs.gl-inet.com/en/3/setup/spitz/applications/#file-sharing) | √ | √ | √ |
| [GL-E750 (Mudi)](https://docs.gl-inet.com/en/3/setup/mudi/applications/#file-sharing) | √ | √ | √ |
| [GL-MV1000 (Brume)](https://docs.gl-inet.com/en/3/setup/brume/applications/#file-sharing) | √ | √ | √ |
| microuter-N300 | - | - | - |

*Note: The power consumption of USB hard drive is quite high. You should use it with an external power supply. Otherwise, it may cause malfunction.*

---



##Access the storage device

You can access the contents of the external storage device from your computer or smart phone. Please check the following guidance for the using of file sharing among different operating systems.

### General Notes

You may be able to access the share via `\\192.168.8.1\` or `smb://192.168.8.1/` or with `GL-modelXXX` instead of `192.168.8.1` (eg `\\GL-AR750S\`)  in your system's file explorer. Since sharing is enabled to the LAN by default (this includes both wired AND wireless clients) and maps a "bad user" to Guest, then even if they don't supply a username and password or an invalid one, ANYONE connected to your router can access the files in the share in Read-Only mode. If you enable Writable mode this applies to both Guests AND the default `root` user. If you enable write access, anybody can create or delete files and folders, if you disable write access, not even the `root` user can delete them via SMB (they can through the CLI though). We can hope that in a future revision there is a simple user management and that a named user (or `root`) can read and/or write while Guests are limited by the `Writable` or a `Public Write` flag on a share (and having multiple shares would be great as well).


### Windows

#### Method 1: Samba 2.0 (SMB2.0) Support: 
We suggest Samba 2.0 support for Windows 10 users.

Due to the security vulunerabilitiy of the Samba1.0 protocol, Samba1.0 is not enabled by default in Window 10. You may modify the router Samba configuration.

![Network](https://static.gl-inet.com/docs/en/3/app/file_sharing/smb1.0.png)

1). SSH into your router, you can gain control of both the router and the network that the rotuer is controlling. You can refer to the following link: [https://docs.gl-inet.com/en/3/app/ssh/](https://docs.gl-inet.com/en/3/app/ssh/)

2). Modify the Samba configuration file, type the following command:

`sed -i 's/security = share/security = user/' /etc/samba/smb.conf.template`

3). Restart the Samba service, type the following command:

`/etc/init.d/samba restart`

![Network](https://static.gl-inet.com/docs/en/3/app/file_sharing/ssh2.png)

4). Open 'This PC' and type `\\your router IP Address`, such as `\\192.168.8.1`.

![Network](https://static.gl-inet.com/docs/en/3/app/file_sharing/Filesharing.png)

5). You can view files in your USB flash drive through GL.iNet router now.


#### Method 2: Samba 1.0 (SMB1.0) Support: 

**1)** Your network must be Home/Private. Otherwise you may not be able to see your router in **Network**. 

3.0 firmware supports SMB2, and if you need SMB3, use [WinSCP to router](https://docs.gl-inet.com/en/3/app/ssh/#winscp), edit `/etc/samba/smb.conf.template`. 

![Network](https://static.gl-inet.com/docs/en/3/app/file_sharing/winscpsmb.jpg)

Change the "max protocol = SMB2" to 

"min protocol = SMB1"

"max protocol = SMB3", then **save** and **exit** WinSCP. 

![Network](https://static.gl-inet.com/docs/en/3/app/file_sharing/changesmbtemp.jpg)

If you are using Windows 10, you also need to enable SMB 1.0. 

- Windows 7

  Go to Control panel -> Network and Internet -> Network and Sharing Center. Find if your active network is **Home network**. If not, click it and change it to **Home network**.

- Windows 10

  Change your network to private by this [tutorial](https://www.digitalcitizen.life/how-set-your-networks-location-private-or-public-windows-10).

  Go to Control Panel -> Programs and Features -> Turn Windows features on or off -> Find SMB 1.0/CIFS file sharing support, check all SMB1 related items, click apply and restart your computer.
  
  ![Network](https://static.gl-inet.com/docs/en/3/app/file_sharing/Win10SMB1.jpg)



**2)** Open a Windows explorer, you can find **Network** in the folder directory. Double click your router to access its contents.

![Network](https://static.gl-inet.com/docs/en/3/app/file_sharing/network.jpg)



### Mac OS
**Method 1**

**1)** Open Finder, Menu -> Go -> Connect to Server... 

![finder_connect_to_server](https://static.gl-inet.com/docs/en/3/app/file_sharing/finder_connect_to_server.png)

**2)** Input `smb://192.168.8.1`, you need to change this if your router IP address is not 192.168.8.1

![connect_to_server](https://static.gl-inet.com/docs/en/3/app/file_sharing/connect_to_server.png)

**3)** Click Connect.

![confirm_connect_to_server](https://static.gl-inet.com/docs/en/3/app/file_sharing/confirm_connect_to_server.png)

**4)** Input username and password, they are the same when you login Web Admin Panel.

![input_server_username_password](https://static.gl-inet.com/docs/en/3/app/file_sharing/input_server_username_password.png)

**5)** Then Finder will display files of USB disk.

![finder_connect_to_router_usb_disk](https://static.gl-inet.com/docs/en/3/app/file_sharing/finder_connect_to_router_usb_disk.png)

**Method 2**

**1)** Go to System Preferences -> Sharing -> File sharing. Click `Options` and then enable SMB.

**2)** Open Finder. You should be able to find your router under Shared.

###iOS

You have to use file manage app to access the contents of your external storage device.

You may use **FE File Explorer**:

**1)** Click `+` to create a `Windows` connection.

![IOS1](https://static.gl-inet.com/docs/en/3/app/file_sharing/ios11.jpg)



![IOS1](https://static.gl-inet.com/docs/en/3/app/file_sharing/ios12.jpg)

**2)** Enter the **IP address** of your router (192.168.8.1). The **User Name** is root and the **Password** is the one that you use to login the web Admin Panel. Finally, click `Save`.

![IOS1](https://static.gl-inet.com/docs/en/3/app/file_sharing/ios13.jpg)

**3)** Click your newly created connection to access the contents.

![IOS1](https://static.gl-inet.com/docs/en/3/app/file_sharing/ios14.jpg)

### Linux

If you are using Linux you are probably comfortable with connecting to servers, and how to do this can vary greatly from distribution to distribution and largely depends on your window manager/display environment. Most systems come with Gnome and it is the default on the very popular Ubuntu distribution, so we'll give an example using the Files tool (also called Nautilus). If you open the app you should have a "Connect to server" option, there you can enter either the `\\servername\share` or `smb://servername/share` format.

### ChromeOS or ChromiumOS (Neverware CloudReady and others)

There is a built in Samba/SMB client in the Files app, but it doesn't really seem to work very well. Instead the most useful ChromeOS app to allow mounting Samba shares even though it doesn't have high ratings is "File System for Windows". It is open source and works far better than the built in version. https://chrome.google.com/webstore/detail/file-system-for-windows/mfhnnfciefdpolbelmfkpmhhmlkehbdf/related?hl=en

Once you have installed the app you can launch it from that page, and if you want to access it again in the future, in the Files app if you go to the 3 dot menu at the top right and "Add new service" you then select "File System for Windows" from the list and it will give you the dialog to fill out with the server name and some other details, but only the server name/IP and share name are required. You can click the gear icon to enable saving the password for a share indefinitely, and you can click the "Keep" button to save the share to easily mount again in the future.

### Android

Most Android devices have file manager tool which maybe can be used to access the files on Network Devices using SMB. Or you can search file explorer app which support SMB on Google Play.

Here I'm going to use **Solid Explorer File Manager** as an example:

**1)** Open the app.

![android1](https://static.gl-inet.com/docs/en/3/app/file_sharing/android01.jpg)

**2)** Click the `Plus sign button` on the right bottom of page, then choose `New cloud connection`.

![android2](https://static.gl-inet.com/docs/en/3/app/file_sharing/android02.jpg)

**3)** Choose `LAN / SMB`.

![android3](https://static.gl-inet.com/docs/en/3/app/file_sharing/android03.jpg)

**4)** Choose the Server, the IP address of your device.

![android4](https://static.gl-inet.com/docs/en/3/app/file_sharing/android04.jpg)

**5)** Choose `Guest`.

![android5](https://static.gl-inet.com/docs/en/3/app/file_sharing/android05.jpg)

**6)** Choose `Yes`.

![android6](https://static.gl-inet.com/docs/en/3/app/file_sharing/android06.jpg)

**7)** Choose `SMB 1`.

![android7](https://static.gl-inet.com/docs/en/3/app/file_sharing/android07.jpg)

**8)** Click `NEXT`.

![android8](https://static.gl-inet.com/docs/en/3/app/file_sharing/android08.jpg)