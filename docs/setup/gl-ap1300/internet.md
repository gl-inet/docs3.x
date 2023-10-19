# INTERNET

On the left side of web Admin Panel -> INTERNET

![internet page of gl-ap1300](https://static.gl-inet.com/docs/router/en/3/setup/gl-ap1300/internet/internet_page_gl-ap1300.png){class="glboxshadow"}

There are total 3 types of connection method that you can use to access the Internet: **Cable**, **Repeater** and **3G/4G Modem(AP-1300LTE ONLY)**.

![connection methods](https://static.gl-inet.com/docs/router/en/3/setup/gl-ap1300/internet/internet-setting-AP1300.png){class="glboxshadow"}

---

## 1. Cable

Connect the router to the modem or main router via Ethernet cable to access the Internet. 

*Note: Before plugging the Ethernet cable into the WAN port of the router, you can click `Use as LAN` to set the WAN port as a LAN port. That is useful when you are using the router as a [repeater](#2-repeater). As a result, you can have one more LAN port.*

![cable](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/cable_section_of_internet.png){class="glboxshadow"}

Plug the Ethernet cable into the WAN port of the router. The information of your connection will be shown on the Cable section. DHCP is the default protocol. You can click `Modify` to change the protocol.

![cable](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/dhcp_internet.png){class="glboxshadow"}

### DHCP

DHCP is the default and most common protocol. It doesn't require any manual configuration.

![dhcp](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/dhcp_method.png){class="glboxshadow"}

### Static

Static is required if your Internet Service Provider (ISP) has provided a fixed IP address for you or you want to configure the network information such as IP address, Gateway, Netmask manually. Change it according to your needs and then click `Apply`.

![static](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/static_method.png){class="glboxshadow"}

### PPPoE

PPPoE is required by many Internet Service Providers (ISP). Generally, your ISP will give you a modem and provide you a username & password that you needed when you are creating the Internet connection.

Under PPPoE protocol, enter your username and password, then click `Apply`.

![PPPoE](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/pppoe_method.png){class="glboxshadow"}

---

## 2. Repeater

Using Repeater means connecting the router to another existing wireless network, e.g. when you are using free Wi-Fi in a hotel or cafe.

It works in WISP (Wireless Internet Service Provider) mode by default, which means that the router will create its own subnet and act as a firewall to protect you from the public network.

In Repeater section, click `Scan` to search for the available wireless networks nearby.

![scan Wi-Fi](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/repeater_scan.png){class="glboxshadow"}

Choose a SSID from the drop-down list and enter its password. You can also enable the **Remember** button to save the current chose wireless network. Finally, click `Join`.

![connect Wi-Fi](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/repeater_connect.png){class="glboxshadow"}

---

## 3. 3G/4G Modem

GL-AP1300LTE has a built-in 3G/4G modem. It has different options of 3G/4G module which you can choose before purchase.

Some SIM cards may need to be activated the first time you use them, so please activate them in your phone before using them in your router.

We recommend to turn off the router first, insert the SIM card, and then turn it on again.

The first time, when the router is powered on, it may not connect automatically, but it has read the name of your carrier in the upper left corner and signal in the upper right corner, you need to click `Auto Setup`.

![4g modem auto setup](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/4g_modem/4g_modem_auto_setup.png){class="glboxshadow"}

After a while, it will be connected.

Normally, the second time, when the router is powered on, after a while, it will automatically recognize the SIM card and establish a connection.

![4g modem connected](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/4g_modem/4g_modem_connected.png){class="glboxshadow"}

---

If you insert a SIM card at power on, it will not automatically connect. You can click `Modem Reset` and then click `Auto Setup` and wait for a while, so that you can also connect normally.

1. Click `Modem Reset`. Please note that at this time, there isn't show your carrier name in the upper left corner.

    ![4g modem inset sim card](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/4g_modem/4g_modem_abort.png){class="glboxshadow"}

2. You may get into this screen, then you need to click `Auto Setup`. Please note that at this time, there is your carrier name in the upper left corner and a signal in the upper right corner of it.

    ![4g modem auto setup](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/4g_modem/4g_modem_auto_setup.png){class="glboxshadow"}

3. Wait a moment, it will be connecting(the button is `Abrot`).

    ![4g modem connecting](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/4g_modem/4g_modem_connecting.png){class="glboxshadow"}

    Wait a little longer, it will be connected(the button is `Disconnect`).

    ![4g modem connected](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/4g_modem/4g_modem_connected.png){class="glboxshadow"}

---

### Manual Setup

Sometimes, `Auto Setup` may not work, you can try `Manual Setup`.

![4g modem manual setup](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/4g_modem/4g_modem_manual_setup.png){class="glboxshadow"}

- **Device**: For built-in modem, please choose **/dev/cdc-wdm0 (qmi)** or **/dev/ttyUSB3**.
- **Service Type**: Indicate the service of your SIM card.
- **APN**: Confirm with your SIM card carrier.

Click `More` will show advanced Settings:

![4g modem manual setup more](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/4g_modem/4g_modem_manual_setup_more.png){class="glboxshadow"}

- **Dial Number**: Generally, it is a default value and you don't need to set it manually. However, if you have this info, please input it.
- **Pincode, Username and Password**: Generally, these are not necessary for an unlocked SIM card. However, if you have a locked SIM card, please consult your service provider.

### AT Command

The built-in modem supports AT command for the management and configuration of the modem. In 3G/4G Modem section, Click `AT Command`.

![at command](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/4g_modem/4g_modem_at_command.png){class="glboxshadow"}

- **Shortcut:** There are several pre-configured AT commands that you can use directly. If you want to run your own AT command, choose **Manual command**.
- **AT Command:** The place where you can input AT command. For the list of AT command, please refer to the AT command manual of the built-in modem.
- **Port:** The default port for AT command is **/dev/ttyUSB2**.
