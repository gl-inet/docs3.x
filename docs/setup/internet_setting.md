# Internet Setting

There are total 4 different connection methods that you can use to access the Internet:

1)  Cable

2)   Wireless / Wi-Fi Repeater

3)   3G/4G Modem

4)   USB Tethering

![4 methods access Internet](https://static.gl-inet.com/docs/en/2.x/setup/src/internet/4ways.jpg)

You can click `New Connection` to create an Internet connection.

  

# Cable

## DHCP

DHCP is the default and most common method to connect to the Internet. You just need to choose `DHCP` and click `Submit`.

![DHCP](https://static.gl-inet.com/docs/en/2.x/setup/src/internet/dhcp_page.jpg)



## Static

Static is required if you want your router have a fixed IP address given by your ISP or in the same subnet of your main router.

The current settings will be automatically filled. Change it according to your needs, then click `Submit`.

![static](https://static.gl-inet.com/docs/en/2.x/setup/src/internet/static.jpg)



## PPPoE

PPPoE is required by many Internet service providers (ISP). Generally, your ISP will give you a modem and provide you a username and password that you are required to enter so as to access the Internet.

Enter your username and password then click `Submit`.

![PPPoE](https://static.gl-inet.com/docs/en/2.x/setup/src/internet/pppoe_page.jpg)



# Repeater

You can connect to an existing wireless network by setting it as a repeater. However, there are 2 different modes that you can choose. 

## WISP 

In WISP (Wireless Internet Service Provider) mode, the router will create its own subnet and act as a firewall which protect you from the public network. Therefore, we highly suggest you to chose WISP if you want to connect to a  public wifi.

In the following diagram, your main router has an IP 192.168.1.1. Suppose its netmask is 255.255.255.0, GL.iNet router will have two IP address:

`192.168.1.99` which is obtained from your main router

`192.168.8.1` which is created by itself

So all your devices connected to GL.iNet router will be protected by its firewall.

![WISP1](https://static.gl-inet.com/docs/en/2.x/setup/src/internet/wisp1.png)



To set up repeater in WISP mode, first Click `Repeater` tab in `Internet Settings`, the router will search for the available Wi-Fi networks automatically. Then, choose a SSID and enter its password. Choose `WISP` in mode and click `Submit`.

![WISP1](https://static.gl-inet.com/docs/en/2.x/setup/src/internet/wisp2.jpg)



##WDS 

In WDS (Wireless Distribution System), you can connect to an existing wireless network without creating a new subnet. Therefore, the router only act as a device to extend the wireless signal coverage of your main router. There is no firewall between the mini router and the main router.

However, to use this mode, **your main router has to support WDS. Since WDS has different implementation, you'd be better to use the same GL.iNet router**. Check your main router's manual to see if it supports this function.

*Note: OpenVPN client function of the mini router will not work in bridge mode.*

![WDS](https://static.gl-inet.com/docs/en/2.x/setup/src/internet/wds.png)



To set up repeater in WDS mode, first, **ensure your main router supports WDS.** Click `Repeater` tab in `Internet Settings`, the router will search for the available Wi-Fi networks automatically. Then, choose a SSID and enter its password. Choose `WDS` in mode and you can enter the LAN IP which will be used to access this router.

This LAN IP should be within the subnet of your main router, but it cannot conflict with any other devices's IP within the same subnet.

If you are not sure, just keep the LAN IP blank so that it will get a IP address from your main router automatically. However, you need to find out this IP in the admin UI of your main router if you want to access the web UI of GL.iNet router again.



**Relayd**

In case your main router doesn't support WDS, you can create a WISP connection first, then set up a relayd overlay.

Here is the [detailed instructions](https://static.gl-inet.com/docs/en/2.x/setup/src/relayd.pdf).



# 3G/4G Modem

You can connect to the Internet using 3G or 4G modem. Plug in your modem and click the `3G/4G` tab in `Internet Settings` to enter the 3G/4G setting page. 

To set up 3G/4G modem in **GL-MiFi**, you should follow the instructions in [Modem Manager](modem_manager.md).

![modem](https://static.gl-inet.com/docs/en/2.x/setup/src/internet/mifi_connection.jpg)

The router has pre-configured values. You can choose `Country/Region`,  `Service Provider` first. The values below will be filled automatically. But this is not necessary if you know the settings. If you found that the data is not updated, please [write to us](mailto:support@gl-inet.com).

To make the correct settings:

- **Modem device**: Please choose `/dev/cdc-wdm0` if this modem support QMI, otherwise you need to choose `ttyUSB*`. There may be several `ttyUSB` from 1 to 3. You need to choose the correct one based on modem spec.
- **Service Type**: This is needed for 3G connection only. For 4G connection, this setting is not necessary.
- **APN**: This is the most important setting, check your ISP for the correct setting.
- **Dial Number**: Generally, it is a default value and you don't need to set it by yourself. However, if you have this info, please input it.
- **Pin, Username and Password:** Generally, these informations are not necessary for a unlocked SIM card. However, if you have a locked SIM card, please find these informations from your carrier.

*Note: Some modems work in host-less mode. If your modem cannot be detected in this setting page, you can click `tethering` to find you device.*



## Example (US Verizon)

![modem](https://static.gl-inet.com/docs/en/2.x/setup/src/internet/verizon_apn.jpg)



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

You can also refer to [http://ofmodemsandmen.com/modems.html](http://ofmodemsandmen.com/modems.html) for a well supported modem list.



# Tethering

If your modem works in host-less mode or you want to share the data of your smartphone, you can use `Tethering`. 

For host-less modem tethering, plug it into the USB port of GL.iNet router. Then, you should be able to find the device under the Phone Device list.

For smartphone tethering, connect it to the USB port of GL.iNet router and click Trust to continue when the message pops up in your smartphone. Then, turn on the personal hotspot of your phone. Finally, choose it from the Phone Device list.

*Note: A newly-added phone of host-less modem will be named beginning with `eth `or `usb `. For example, `eht2`, `usb0`.*

![tethering](https://static.gl-inet.com/docs/en/2.x/setup/src/internet/tethering.jpg)



## EasyTether

Some carriers prohibit the sharing of the data and you may not able to use tethering. However, you can try [easytethering](/app/tether.md). 

*Note: Easytether is not a free service and we have no affiliate with them.*



#Discussions