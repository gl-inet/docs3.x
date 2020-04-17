# INTERNET

There are total 3 types of connection method that you can use to access the Internet: **Cable**, **Repeater** and **3G/4G Modem(With 4G Module ONLY)**.

![connection methods](https://static.gl-inet.com/docs/en/3/setup/cirrus/internet/internet-setting-AP1300.png)

Click `INTERNET` to create an Internet connection.

![internet](https://static.gl-inet.com/docs/en/3/setup/cirrus/First%20time/Admin%20Panel.png)



---

##1) Cable

Connect the router to the modem or main router via Ethernet cable to access the Internet. 

Before plugging the Ethernet cable into the WAN port of the router, you can click `Use as LAN` to set the WAN port as a LAN port. That is useful when you are using the router as a [repeater](internet#2-repeater). As a result, you can have one more LAN port.

![cable](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/cable.jpg)



Plug the Ethernet cable into the WAN port of the router. The information of your connection will be shown on the Cable section. DHCP is the default protocol. You can click `Modify` to change the protocol.

![cable](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/dhcp_page.jpg)



### DHCP

DHCP is the default and most common protocol. It doesn't require any manual configuration.

![dhcp](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/dhcp.jpg)



### Static

Static is required if your Internet Service Provider (ISP) has provided a fixed IP address for you or you want to configure the network information such as IP address, Gateway, Netmask manually. Change it according to your needs and then click `Apply`.

![static](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/static.jpg)



### PPPoE

PPPoE is required by many Internet Service Providers (ISP). Generally, your ISP will give you a modem and provide you a username & password that you needed when you are creating the Internet connection.

Under PPPoE protocol, enter your username and password, then click `Apply`.

![PPPoE](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/pppoe_page.jpg)



---

## 2) Repeater

Using Repeater means connecting the router to another existing wireless network, e.g. when you are using free Wi-Fi in a hotel or cafe.

It works in WISP (Wireless Internet Service Provider) mode by default, which means that the router will create its own subnet and act as a firewall to protect you from the public network.

In Repeater section, click `Scan` to search for the available wireless networks nearby.

![scan wifi](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/wisp1.jpg)



Choose a SSID from the drop-down list and enter its password. You can also enable the **Remember** button to save the current chose wireless network. Finally, click `Join`.

![connect wifi](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/wisp2.jpg)



---

## 3) 3G/4G Modem

Spitz has a built-in 3G/4G modem which you can insert your SIM card directly. Please insert the SIM card before powering on the router. Then, you should find the name of your carrier, click `Auto Setup` to create the connection.

![modem](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/modem1.jpg)



You can also click `Manual Setup` to set up manually.

In General, you can set up by the three basic parameters below. Click `Apply` to connect.

- **Device**: Please choose **/dev/cdc-wdm0 (qmi)** or **/dev/ttyUSB3**.
- **Service Type**: indicate the service of your SIM card.
- **APN**: Confirm with your SIM card carrier.

![modem](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/modem2.jpg)

Advanced Settings:

- **Dial Number**: Generally, it is a default value and you don't need to set it manually. However, if you have this info, please input it.
- **Pincode, Username and Password:** Generally, these are not necessary for an unlocked SIM card. However, if you have a locked SIM card, please consult your service provider.

![modem](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/modem5.jpg)



It is connected when the IP address of your SIM card shows up.

![modem connect](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/modem3.jpg)

![modem connected](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/modem4.jpg)



### AT Command

The built-in modem supports AT command for the management and configuration of the modem. In 3G/4G Modem section, Click `AT Command`.

![at command](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/modem2.jpg)



- **Shortcut:** There are several pre-configured AT commands that you can use directly. If you want to run your own AT command, choose **Manual command**.
- **AT Command:** The place where you can input AT command. For the list of AT command, please refer to the AT command manual of the built-in modem.
- **Port:** The default port for AT command is **/dev/ttyUSB2**.

![AT command](https://static.gl-inet.com/docs/en/3/setup/spitz/internet/at_command.jpg)
