# Multimedia File Sharing

The DLNA defines standards that enable devices to share photos, music, videos with each other. Some of GL.iNet routers support Multimedia File Sharing via DLNA Server in LAN.

---

## Supported models

Usually models with USB ports or TF slots are supported DLNA Server.

*Note: The power consumption of USB hard drive is quite high. You should use it with an external power supply. Otherwise, it may cause malfunction.*

**Supported external storage models**

| Router Model | USB Stick | USB Hard Drive | MicroSD Card |
| :----------- | :-------: | :---: | :---: |
| GL-MT300N-V2 (Mango) | √ | √ | - |
| GL-AR150 Series | √ | √ | - |
| GL-AR300M Series | √ | √ | - |
| GL-USB150 | - | - | - |
| GL-MiFi | √ | √ | √ |
| GL-AR750 (Creta) | √ | √ | √ |
| GL-AR750S-EXT (Slate) | √ | √ | √ |
| GL-B1300 (Convexa-B) | √ | √ | - |
| GL-S1300 (Convexa-S) | √ | √ | - |
| GL-X750 (Spitz) | √ | √ | √ |
| GL-X1200 (Amarok) | √ | √ | √ |
| GL-E750 (Mudi) | √ | √ | √ |
| GL-MV1000 (Brume) | √ | √ | √ |
| GL-MV1000W (Brume-W) | √ | √ | √ |
| GL-MT1300 (Beryl) | √ | √ | √ |
| GL-XE300 (Puli) | √ | √ | √ |
| GL-AX1800 (Flint) | √ | √ | - |
| GL-AP1300 (Cirrus) | - | - | - |
| GL-B2200 (Velica) | - | - | - |
| GL-X300B (Collie) | - | - | - |
| GL-SF1200 | - | - | - |
| microuter-N300 | - | - | - |
| VIXMINI | - | - | - |

---

## Setup

1. Copy some multimedia file(photo, music, video) to your TF card or USB drive.
2. If using TF card, make suer you already has a TF card inserted into the card slot before you power up your router. *Hot-plug* is not supported on GL.iNET routers.
2. If using USB drive, please insert an USB drive into the USB port.

## Enable Multimedia File Sharing

On the left side of web Admin Panel -> APPLICATIONS -> File Sharing -> Multimedia File Sharing

The Multimedia File sharing packages may not installed. Click `Install` to continue.

![multimedia file sharing no installed](https://static.gl-inet.com/docs/en/3/tutorials/multimedia_file_sharing/multimedia_file_sharing_no_installed.png){class="glboxshadow"}

After installed.

![multimedia file sharing installed](https://static.gl-inet.com/docs/en/3/tutorials/multimedia_file_sharing/multimedia_file_sharing_installed.png){class="glboxshadow"}

Enable `Share via DLNA` then click `Apply`.

![multimedia file sharing enabled](https://static.gl-inet.com/docs/en/3/tutorials/multimedia_file_sharing/multimedia_file_sharing_enabled.png){class="glboxshadow"}

## Setup the DLNA Server on various OS/software

1. Connnet your computer, tablet, smart TV or Smartphone to the router's Wi-Fi or ethernet cable.
2. Then you can find the **OpenWrt DLNA Server** in your devices.
   
    - On Windows 10:

        In Windows Media Player:

        ![dlna windows media player](https://static.gl-inet.com/docs/en/3/tutorials/multimedia_file_sharing/dlna_windows_media_player.png){class="glboxshadow"}

        In Windows File Explorer -> Network
        
        ![dlna windows network](https://static.gl-inet.com/docs/en/3/tutorials/multimedia_file_sharing/dlna_windows_network.png){class="glboxshadow"}

    - On iOS & Android: Install VLC or other app that support DLNA

        VLC Setup:

        Step 1: Click the **Traffic Cones** logo on the left top, select Local Network.

        Step 2: You can find the OpenWrt DLNA Server easily in Local Network.

        Step 1 | Step 2
        - | - 
        ![vlc local network](https://static.gl-inet.com/docs/en/3/tutorials/multimedia_file_sharing/vlc_local_network.png){class="glboxshadow" width="400"} | ![dlna server on local network](https://static.gl-inet.com/docs/en/3/tutorials/multimedia_file_sharing/vlc_local_network_dlna_server.png){class="glboxshadow" width="400"}

It is also easy for other devices find the OpenWrt DLNA Server.
