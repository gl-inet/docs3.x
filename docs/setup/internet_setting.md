# Internet Setting

There are total 4 different connection methods that you can use to access the Internet:

1)  Cable

2)   Wireless / Wi-Fi Repeater

3)   3G/4G Modem

4)   USB Tethering

![](https://static.gl-inet.com/docs/en/3/setup/internet/4ways.jpg)

You can click `INTERNET` to create an Internet connection.

![](https://static.gl-inet.com/docs/en/3/setup/internet/internet.jpg)

  

# Cable

After plugging in the Ethernet cable to the LAN port of the router. The information of your connection will be shown on the Cable section. DHCP is the default protocol. You can click `Modify` to change the protocol.

![](https://static.gl-inet.com/docs/en/3/setup/internet/dhcp_page.jpg)



## DHCP

DHCP is the default and most common method. It doesn't require any manual configuration.

![](https://static.gl-inet.com/docs/en/3/setup/internet/dhcp.jpg)



## Static

Static is required if your router needs a fixed IP address given by your ISP or in the same subnet of your main router.

The current settings will be automatically filled. Change it according to your needs, then click `Apply`.

![](https://static.gl-inet.com/docs/en/3/setup/internet/static.jpg)



## PPPoE

PPPoE is required by many Internet service providers (ISP). Generally, your ISP will give you a modem and provide you a username and password that you are required to enter so as to access the Internet.

Enter your username and password then click `Apply`.

![PPPoE](https://static.gl-inet.com/docs/en/3/setup/internet/pppoe_page.jpg)



# Repeater

You can connect to an existing wireless network by setting it as a repeater. 

Be aware that it works in WISP (Wireless Internet Service Provider) mode by default. The router will create its own subnet and act as a firewall which protect you from the public network.

In the following diagram, your main router has an IP 192.168.1.1. Suppose its netmask is 255.255.255.0, GL.iNet router will have two IP address:

`192.168.1.99` which is obtained from your main router

`192.168.8.1` which is created by itself

So all your devices connected to GL.iNet router will be protected by its firewall.

![WISP1](https://static.gl-inet.com/docs/en/3/setup/internet/wisp1.png)



Click `Here` To set up repeater.

![WISP1](https://static.gl-inet.com/docs/en/3/setup/internet/wisp1.jpg)



The router will search for the available Wi-Fi networks automatically. Choose a SSID and enter its password. Finally, click `Join`.

![WISP1](https://static.gl-inet.com/docs/en/3/setup/internet/wisp2.jpg)





# 3G/4G Modem

You can connect to the Internet using 3G or 4G modem. Plug in your modem and click the `3G/4G` tab in `Internet Settings` to enter the 3G/4G setting page. 

To set up 3G/4G modem in **GL-MiFi**, you should follow the instructions in [Modem Manager](modem_manager.md).

![modem](src/internet/mifi_connection.jpg)

The router has pre-configured values. You can choose `Country/Region`,  `Service Provider` first. The values below will be filled automatically. But this is not necessary if you know the settings. If you found that the data is not updated, please [write to us](mailto:support@gl-inet.com).

To make the correct settings:

- **Modem device**: Please choose `/dev/cdc-wdm0` if this modem support QMI, otherwise you need to choose `ttyUSB*`. There may be several `ttyUSB` from 1 to 3. You need to choose the correct one based on modem spec.
- **Service Type**: This is needed for 3G connection only. For 4G connection, this setting is not necessary.
- **APN**: This is the most important setting, check your ISP for the correct setting.
- **Dial Number**: Generally, it is a default value and you don't need to set it by yourself. However, if you have this info, please input it.
- **Pin, Username and Password:** Generally, these informations are not necessary for a unlocked SIM card. However, if you have a locked SIM card, please find these informations from your carrier.

*Note: Some modems work in host-less mode. If your modem cannot be detected in this setting page, you can click `tethering` to find you device.*



## Example (US Verizon)

![modem](src/internet/verizon_apn.jpg)



## Compatible Modems

Here is a list of supported modems that we tested before. 

### QMI
This modem supports QMI mode. Please choose `/dev/cdc-wdm0` in `3/4G` settings.
### Hostless 
This modem supports tethering mode, please set up by using tethering but not 3/4G.

| Model                                  | 3G/4G | Tested | Tested by       | Comments |
| -------------------------------------- | ----- | ------ | --------------- | -------- |
| Quectel EC20-E, EC20-A, EC20-C         | 4G    | Yes    | GL.iNet         |          |
| Quectel EC25-E, EC25-A, EC25-V, EC25-C | 4G    | Yes    | GL.iNet         |          |
| Quectel UC20-E                         | 3G    | Yes    | GL.iNet         |          |
| ZTE ME909s-821                         | 4G    | Yes    | GL.iNet         |          |
| Huawei E1550                           | 3G    | Yes    | GL.iNet         |          |
| Huanwei E3276                          | 4G    | Yes    | GL.iNet         |          |
| TP-Link MA260                          | 3G    | Yes    | GL.iNet         |          |
| ZTE M823                               | 4G    | Yes    | Arnas Risqianto |          |
| ZTE MF190                              | 3G    | Yes    | Arnas Risqianto |          |
| Huawei E3372                           | 4G    | Yes    | anonymous       |          |
| Pantech UML290VW (Verizon)             | 4G    | Yes    | GL.iNet/steven  | QMI      |
| Pantech UML295 (Verizon)               | 4G    | Yes    | GL.iNet/steven  | hostless |
| Novatel USB551L (Verizon)              | 4G    | Yes    | GL.iNet/steven  | QMI      |
| Verizon U620L (Verizon)                | 4G    | Yes    |                 | hostles  |
|                                        |       |        |                 |          |

You can also refer to [http://ofmodemsandmen.com/supported.html](http://ofmodemsandmen.com/supported.html) for a well supported modem list.



# Tethering

If your modem works in host-less mode or you want to share the data from your smartphone, you can use `Tethering`. 

For host-less modem tethering, plug it into the USB port of GL.iNet router.

For smartphone tethering, connect it to the USB port of GL.iNet router and click Trust to continue when the message pops up in your smartphone. Then, turn on the personal hotspot of your phone. 

After plugging in your device, the Tethering connection will update and your device will be shown on the device list.

*Note: A newly-added phone of host-less modem will be named beginning with `eth `or `usb `. For example, `eht2`, `usb0`.*

![tethering](https://static.gl-inet.com/docs/en/3/setup/internet/tethering.jpg)



## EasyTether

Some carriers prohibit the sharing of the data and you may not able to use tethering. However, you can try [easytethering](/app/tether.md). 

*Note: Easytether is not a free service and we have no affiliate with them.*



