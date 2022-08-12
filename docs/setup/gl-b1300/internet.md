# INTERNET

On the left side of web Admin Panel -> INTERNET

![internet page of gl-b1300](https://static.gl-inet.com/docs/en/3/setup/gl-b1300/internet/internet_page_gl-b1300.png){class="glboxshadow"}

There are total 4 types of connection method that you can use to access the Internet: **Cable**, **Repeater**, **3G/4G Modem** and **Tethering**.

![internet connection method gl-b1300](https://static.gl-inet.com/docs/en/3/setup/gl-b1300/internet/internet_connection_method_gl-b1300.png){class="glboxshadow"}

---

## 1. Cable

Connect the router to the modem or main router via Ethernet cable to access the Internet. 

*Note: Before plugging the Ethernet cable into the WAN port of the router, you can click `Use as LAN` to set the WAN port as a LAN port. That is useful when you are using the router as a [repeater](#2-repeater). As a result, you can have one more LAN port.*

![cable](https://static.gl-inet.com/docs/en/3/setup/share/internet/cable_section_of_internet.png){class="glboxshadow"}

Plug the Ethernet cable into the WAN port of the router. The information of your connection will be shown on the Cable section. DHCP is the default protocol. You can click `Modify` to change the protocol.

![cable](https://static.gl-inet.com/docs/en/3/setup/share/internet/dhcp_internet.png){class="glboxshadow"}

### DHCP

DHCP is the default and most common protocol. It doesn't require any manual configuration.

![dhcp](https://static.gl-inet.com/docs/en/3/setup/share/internet/dhcp_method.png){class="glboxshadow"}

### Static

Static is required if your Internet Service Provider (ISP) has provided a fixed IP address for you or you want to configure the network information such as IP address, Gateway, Netmask manually.

The current settings will be automatically filled once you choose Static. Change it according to your needs and then click `Apply`.

![static](https://static.gl-inet.com/docs/en/3/setup/share/internet/static_method.png){class="glboxshadow"}

### PPPoE

PPPoE is required by many Internet Service Providers (ISP). Generally, your ISP will give you a modem and provide you a username & password that you needed when you are creating the Internet connection.

Under PPPoE protocol, enter your username and password, then click `Apply`.

![PPPoE](https://static.gl-inet.com/docs/en/3/setup/share/internet/pppoe_method.png){class="glboxshadow"}

---

## 2. Repeater

Using Repeater means connecting the router to another existing wireless network, e.g. when you are using free Wi-Fi in a hotel or cafe.

It works in WISP (Wireless Internet Service Provider) mode by default, which means that the router will create its own subnet and act as a firewall to protect you from the public network.

In Repeater section, click `Scan` to search for the available wireless networks nearby.

![scan Wi-Fi](https://static.gl-inet.com/docs/en/3/setup/share/internet/repeater_scan.png){class="glboxshadow"}

Choose a SSID from the drop-down list and enter its password. You can also enable the **Remember** button to save the current chose wireless network. Finally, click `Join`.

![Wi-Fi connect](https://static.gl-inet.com/docs/en/3/setup/share/internet/repeater_connect.png){class="glboxshadow"}

---

## 3. USB 3G/4G Modem

You can connect to the Internet using a USB 3G/4G modem.

Some SIM cards may need to be activated the first time you use them, so please activate them in your phone before using them in your router.

We recommend to turn off the router first, insert your SIM card into the USB modem then plug the USB modem into the USB port of the router, and then turn it on again.

The first time, when the router is powered on, it may not connect automatically, but it has read the name of your carrier in the upper left corner, and you need to click `Auto Setup`.

![usb modem auto setup](https://static.gl-inet.com/docs/en/3/setup/share/internet/usb_modem/usb_modem_auto_setup.png){class="glboxshadow"}

After a while, it will be connected.

Normally, the second time, when the router is powered on, after a while, it will automatically recognize the SIM card and establish a connection. It may not get the information of signal, modem name and IMEI.

![usb modem connected](https://static.gl-inet.com/docs/en/3/setup/share/internet/usb_modem/usb_modem_connected.png){class="glboxshadow"}

---

If you insert a usb modem at power on, it will not automatically connect. 

If it shows the carrier name in the upper left corner, you can click `Abort`. After a while, the button will turn to `Auto Setup`, then click `Auto Setup`.

If it doesn't show the carrier name, you can click `Modem Reset`.

1. Please note that there is your carrier name in the upper left corner of it. Click `Abort`, wait a while, and if it doesn't work, click `Modem Reset`.

    ![usb modem insert sim card](https://static.gl-inet.com/docs/en/3/setup/share/internet/usb_modem/usb_modem_abort.png){class="glboxshadow"}

2. You may get into this screen, then you need to click `Auto Setup`, please note that at this time, there is your carrier name in the upper left corner of it.

    ![usb modem auto setup](https://static.gl-inet.com/docs/en/3/setup/share/internet/usb_modem/usb_modem_auto_setup.png){class="glboxshadow"}

3. Wait a moment and it will be connected.

    ![usb modem connected](https://static.gl-inet.com/docs/en/3/setup/share/internet/usb_modem/usb_modem_connected.png){class="glboxshadow"}

---

### Manual Setup

Sometimes, `Auto Setup` may not work, you can try `Manual Setup`.

![4g modem manual setup](https://static.gl-inet.com/docs/en/3/setup/share/internet/4g_modem/4g_modem_manual_setup.png){class="glboxshadow"}

- **Device**: Choose **/dev/cdc-wdm0** if your modem supports QMI, otherwise you need to choose **/dev/ttyUSB**, which may include several **ttyUSB** from 0 to 3. You need to choose the correct one based on the modem spec. We suggest you to try **ttyUSB0** first.
- **Service Type**: Indicate the service type of your SIM card.
- **APN**: Confirm with your SIM card carrier.

Click `More` will show advanced Settings:

![4g modem manual setup more](https://static.gl-inet.com/docs/en/3/setup/share/internet/4g_modem/4g_modem_manual_setup_more.png){class="glboxshadow"}

- **Dial Number**: Generally, it is a default value and you don't need to set it manually. However, if you have this info, please input it.
- **Pincode, Username and Password**: Generally, these are not necessary for an unlocked SIM card. However, if you have a locked SIM card, please consult your service provider.

### AT Command

The built-in modem supports AT command for the management and configuration of the modem. In 3G/4G Modem section, Click `AT Command`.

![at command](https://static.gl-inet.com/docs/en/3/setup/share/internet/4g_modem/4g_modem_at_command.png){class="glboxshadow"}

- **Shortcut:** There are several pre-configured AT commands that you can use directly. If you want to run your own AT command, choose **Manual command**.
- **AT Command:** The place where you can input AT command. For the list of AT command, please refer to the AT command manual of the built-in modem.
- **Port:** The default port for AT command is **/dev/ttyUSB2**.

### Compatible Modems

Here is a list of supported modems that we had tested before.

| Model                                  | 3G/4G | Tested | Tested by       | Comments* |
| -------------------------------------- | ----- | ------ | --------------- | --------- |
| Quectel EC20-E, EC20-A, EC20-C         | 4G    | Yes    | GL.iNet         |           |
| Quectel EC25-E, EC25-A, EC25-V, EC25-C | 4G    | Yes    | GL.iNet         |           |
| Quectel UC20-E                         | 3G    | Yes    | GL.iNet         |           |
| ZTE ME909s-821                         | 4G    | Yes    | GL.iNet         |           |
| Huawei E1550                           | 3G    | Yes    | GL.iNet         |           |
| Huawei E3276                           | 4G    | Yes    | GL.iNet         |           |
| TP-Link MA260                          | 3G    | Yes    | GL.iNet         |           |
| ZTE M823                               | 4G    | Yes    | Arnas Risqianto |           |
| ZTE MF190                              | 3G    | Yes    | Arnas Risqianto |           |
| Huawei E3372                           | 4G    | Yes    | anonymous       |           |
| Pantech UML290VW (Verizon)             | 4G    | Yes    | GL.iNet/steven  | QMI       |
| Pantech UML295 (Verizon)               | 4G    | Yes    | GL.iNet/steven  | Host-less |
| Novatel USB551L (Verizon)              | 4G    | Yes    | GL.iNet/steven  | QMI       |
| Verizon U620L (Verizon)                | 4G    | Yes    |                 | Host-less |

*QMI: This modem supports QMI mode. Please choose **/dev/cdc-wdm0** in the **Device** list.

*Host-less: This modem supports tethering mode, please set up by using Tethering but not 3G/4G modem.

You can also refer to [http://ofmodemsandmen.com/modems.html](http://ofmodemsandmen.com/modems.html){target="_blank"} for a well supported modem list.

You can also search on the [forum](https://forum.gl-inet.com){target="_blank"} or create a post for asking.

---

## 4. Tethering

Using a USB cable to share network from your smartphone to the router is called Tethering. Host-less modem works in Tethering during the setup of the modem as well.

For host-less modem tethering, plug it into the USB port of the router.

For iPhone tethering:

1. Connect iPhone to the USB port of the router. It will pop up a message asking to trust this computer? Click "Trust" to contine. Because we are connecting the iPhone to the router, so here is to TRUST the router.

    ![trust this computer](https://static.gl-inet.com/docs/en/3/setup/share/internet/tethering/iphone_trust_this_computer.png){class="glboxshadow"}

2. Go to iPhone -> Settings -> Personal Hotspot -> Turn on Allow Others to Join.

    ![turn on allow others to join](https://static.gl-inet.com/docs/en/3/setup/share/internet/tethering/iphone_hotspot_allow_others_to_join.png){class="glboxshadow"}

3. Go to web Admin Panel, on the left side bar, choose "INTERNET" and click "Connect" in the middle of the page.

    ![tethering connect](https://static.gl-inet.com/docs/en/3/setup/share/internet/tethering/tethering_connect.png){class="glboxshadow"}

4. It will show connected information on the top of your phone screen and the web Admin Panel once you connect successfully.

    ![tethering](https://static.gl-inet.com/docs/en/3/setup/share/internet/tethering/iphone_hotspot_1_connection.png){class="glboxshadow"}

    Tethering connected.

    ![tethering](https://static.gl-inet.com/docs/en/3/setup/share/internet/tethering/tethering_connected_mt300n-v2.png){class="glboxshadow"}

If the connection fails, please turn off and turn on `Allow Others to Join` for a few times.

---

For Android phone tethering, the procedure is similar to iPhone. Connect it to the USB port of the router then check Settings -> Personal hotspot -> Usb network sharing.

After plugging in your device, the Tethering section will update and your device will be shown on the device list. The device name will begin with **eth** or **usb** such as **eth2**, **usb0**. Choose your device and click `Connect`.

![tethering](https://static.gl-inet.com/docs/en/3/setup/share/internet/tethering/tethering_connect.png){class="glboxshadow"}
