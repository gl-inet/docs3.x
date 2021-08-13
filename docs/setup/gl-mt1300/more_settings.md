# MORE SETTINGS

## Admin Password

Change the password of the web Admin Panel, which must be at least 5 characters long. You have to input your current password in order to change it.

![admin password](https://static.gl-inet.com/docs/en/3/setup/brume/more_settings/admin_password.png)

---

## LAN IP

LAN IP is the IP address that you use to connect to this router. The default IP address of GL.iNet router is 192.168.8.1. If it conflicts with the IP address of your main router, you can change it.

![lan ip](https://static.gl-inet.com/docs/en/3/setup/brume/more_settings/lan_ip.png)

---

## Time Zone

The time of the router's activities will be recorded according to the router time. Therefore, choosing the time zone of your location is recommended.

![time zone](https://static.gl-inet.com/docs/en/3/setup/brume/more_settings/time_zone.png)

---

## MAC Clone

Clone the MAC address of your current client to the router. It is used especially in hotel when the network checks your MAC address. For example, if you got your smartphone registered on the network, you can clone the MAC address of your smartphone to the router so that the router can also connect to the network.

![mac clone](https://static.gl-inet.com/docs/en/3/setup/mini_router/more_settings/mac_clone.jpg)

---

## IPv6

The IPv6 function allows you to enable and configure IPv6 on this router. 

**The current version of the firewall, VPN, terminal list, cloud service, etc., may not support IPv6 for the time being. Therefore, the IPv6 function can only be used for configuration within this interface.**

_**Note: If you use functions of both VPN and IPv6 at the same time, it's likely to cause IPv6 data leakage.**_


![ivp6](https://static.gl-inet.com/docs/en/3/setup/mt1300/IPv6.jpg)

**WAN**

_**Network Interface**_: There are three types of network interface for selection: **wan, wwan and tethering**. 
Your current connection of the internet is one to one correspondence with the Network Interface. Please refer to the following correspondence: 

|            Internet connection| IPv6 Network Interface |
| ----------------------------: | :--------------------- |
|              Cable Connection | WAN                    |
|                Wi-Fi Repeater | WWAN                   |
|                      Tethering| Tethering              |


![network_ineterface](https://static.gl-inet.com/docs/en/3/setup/mt1300/IPv6_NetworkInterface.jpg)

_**Address Type**_: Address type includes Automatic and Manual. It's similar to IPv4, the router can get IPv6 Address and gateway automatically. Or you can input custom IPv6 address and gateway manually. 

_**DNS acquisition method**_: It's similar to DNS server, the router can config a DNS server automaticall. Or you can input one or two custom DNS server manually.

**LAN**

_**Mode**_: There three Modes for selection, _**Native, NAT6 and Static IPv6**_.

![LAN_Mode](https://static.gl-inet.com/docs/en/3/setup/mt1300/IPv6_mode.jpg)

**Native mode**: 
The router will assign a public IPv6 address to each device connected to this router automatically. 

**NAT6 mode**: The router will assign a dynamic internal IPv6 address for all LAN devices connected to the router.

**Static IPv6**: This mode is similar to NAT6 mode, the router will assign a static IPv6 address range, all devices connected to the router will get an IPv6 address in the address range. 



_**DNS acquisition method**_: It's similar to DNS server, the router can config a DNS server automaticall. Or you can input one or two custom DNS server manually.

---
## Custom DNS Server

You can configure the DNS server of the router in order to prevent DNS leak or other purposes.

**DNS Rebinding Attack Protection**: Some network may require authentication in captive portal. Disable this option if the captive portal of your network cannot be resolved.

**Override DNS Settings for All Clients**: Enabling this option will capture DNS request from all connected clients.

**DNS over TLS (Cloudflare or NextDNS)**: 
**Cloudflare DNS** over TLS uses the TLS security protocol for encrypting DNS queries, which helps increase privacy and prevent eavesdropping.
**NextDNS** protects from all kinds of security threats, blocks ads and trackers in websites and apps and provides a safe and supervised Internet for kids. Please go to [**NextDNS**](https://docs.gl-inet.com/en/3/app/nextdns/) for settings details. 



**Manual DNS Server Settings**: Input a custom DNS server manually.

![custom dns server](https://static.gl-inet.com/docs/en/3/setup/brume/more_settings/custom_dns.png)

---

## Button Settings

Configure the function of the mode switch. It doesn't have any function by default. You can set it as a toggle to turn on or off _**Wireguard/OpenVPN client**_ or _**Tor**_.

![button settings](https://static.gl-inet.com/docs/en/3/setup/mini_router/more_settings/button_settings.jpg)


---
## Network Mode

Change the network mode to cater your usage scenario. You may need to reconnect your client device whenever you change the network mode of the router.

Be aware that you may not be able to access the web Admin Panel with the default IP 192.168.8.1 if you use the router in **Access Point**, **Extender** or **WDS** mode. If you want to access the web Admin Panel in this case, you have to use the IP address assigned by the main router to the GL.iNet router.

**Router**: Create your own private network. The router will act as NAT, firewall and DHCP server.

**Bridge mode**: Bridge to a wired network.

![network mode](https://static.gl-inet.com/docs/en/3/setup/mini_router/more_settings/network_mode.jpg)

---

## Revert Firmware

Revert the router to factory default settings. All your settings, applications and data will be erased.

![revert firmware](https://static.gl-inet.com/docs/en/3/setup/brume/more_settings/revert_firmware.png)

---

## Advanced

If you can not find Advanced menu item, please follow the steps to install it.

![how to instlal luci](https://static.gl-inet.com/docs/en/3/setup/mudi/more_settings/how_to_install_luci.png)

After it install successfully, you will find the Advanced menu item.

Click `Advanced` to direct to Luci which is the default web interface of OpenWrt. You can check the detailed system log or conduct more advanced configurations there.

![advanced](https://static.gl-inet.com/docs/en/3/setup/mt1300/Luci.png)

*Note: The username is **root**. The password is same as the one that you use to access the web Admin Panel.*