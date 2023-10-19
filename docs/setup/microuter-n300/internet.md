# INTERNET

On the left side of web Admin Panel -> INTERNET

![internet page of microuter-n300](https://static.gl-inet.com/docs/router/en/3/setup/microuter-n300/internet/internet_page_microuter-n300.png){class="glboxshadow"}

microuter-N300 can be connected to the Internet through **Cable** or **Repeater**.

---

## 1. Cable

Connect the router to the modem or main router via Ethernet cable to access the Internet. 

Before plugging the Ethernet cable into the Ethernet port of the router, you can click `Use as LAN` to set the WAN port as a LAN port. That is useful when you are using the router as a [repeater](#2-repeater).

![cable](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/cable_section_of_internet.png){class="glboxshadow"}

Plug the Ethernet cable into the Ethernet port of the router. The information of your connection will be shown on the Cable section. DHCP is the default protocol. You can click `Modify` to change the protocol.

![cable](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/dhcp_internet.png){class="glboxshadow"}

### DHCP

DHCP is the default and most common protocol. It doesn't require any manual configuration.

![dhcp](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/dhcp_method.png){class="glboxshadow"}

### Static

Static is required if your Internet Service Provider (ISP) has provided a fixed IP address for you or you want to configure the network information such as IP address, Gateway, Netmask manually.

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

![repeater scan](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/repeater_scan.png){class="glboxshadow"}

Choose a SSID from the drop-down list and enter its password. You can also enable the **Remember** button to save the current chose wireless network. Finally, click `Join`.

![connect Wi-Fi](https://static.gl-inet.com/docs/router/en/3/setup/share/internet/repeater_connect.png){class="glboxshadow"}
