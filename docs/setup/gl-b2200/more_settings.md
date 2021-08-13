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

![advanced](https://static.gl-inet.com/docs/en/3/setup/Velica/More%20setting/More%20Setting_1.png)

*Note: The username is **root**. The password is same as the one that you use to access the web Admin Panel.*