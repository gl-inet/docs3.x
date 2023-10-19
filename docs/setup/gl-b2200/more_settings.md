# MORE SETTINGS

## Admin Password

On the left side of web Admin Panel -> MORE SETTINGS -> Admin Password

Change the password of the web Admin Panel, which must be at least 5 characters. You have to input your current password to change it.

![admin password](https://static.gl-inet.com/docs/router/en/3/setup/share/more_settings/admin_password.png){class="glboxshadow"}

---

## LAN IP

On the left side of web Admin Panel -> MORE SETTINGS -> LAN IP

LAN IP is the IP address that you use to connect to this router. The default IP address of GL.iNet router is 192.168.8.1. If it conflicts with the IP address of your main router, you can change it.

![lan ip](https://static.gl-inet.com/docs/router/en/3/setup/share/more_settings/lan_ip.png){class="glboxshadow"}

Guest IP is the IP address for Guest Wi-Fi, default is 192.168.9.1.

![guest ip](https://static.gl-inet.com/docs/router/en/3/setup/share/more_settings/guest_ip.png){class="glboxshadow"}

---

## Static IP Address Binding

On the left side of web Admin Panel -> MORE SETTINGS -> LAN IP -> Static IP Address Binding

Usually your computer's IP address is dynamically assigned by the router. If you want your computer to have a static IP address, you can manually add your computer's MAC address and the static IP address you want to use.
Note the configured client has to reconnect the router to take effect.

![static ip address binding](https://static.gl-inet.com/docs/router/en/3/setup/share/more_settings/static_ip_address_binding.png){class="glboxshadow"}

---

## Time Zone

On the left side of web Admin Panel -> MORE SETTINGS -> Time Zone

The time of the router's activities will be recorded according to the router time. Therefore, choosing the time zone of your location is recommended.

![time zone](https://static.gl-inet.com/docs/router/en/3/setup/share/more_settings/time_zone.png){class="glboxshadow"}

---

## MAC Clone

On the left side of web Admin Panel -> MORE SETTINGS -> MAC Clone

Clone the MAC address of your current client to the router. It is used especially in hotel when the network checks your MAC address. For example, if you got your smartphone registered on the network, you can clone the MAC address of your smartphone to the router so that the router can also connect to the network.

![mac clone](https://static.gl-inet.com/docs/router/en/3/setup/share/more_settings/mac_clone.png){class="glboxshadow"}

---

## Custom DNS Server

On the left side of web Admin Panel -> MORE SETTINGS -> Custom DNS Server

You can configure the DNS server of the router in order to prevent DNS leak or other purposes.

**DNS Rebinding Attack Protection**: Some network may require authentication in captive portal. Disable this option if the captive portal of your network cannot be resolved.

**Override DNS Settings for All Clients**: Enabling this option will capture DNS request from all connected clients.

**DNS over TLS (Cloudflare or NextDNS)**: 
**Cloudflare DNS** over TLS uses the TLS security protocol for encrypting DNS queries, which helps increase privacy and prevent eavesdropping.
**NextDNS** protects from all kinds of security threats, blocks ads and trackers in websites and apps and provides a safe and supervised Internet for kids. Please go to [**NextDNS**](../../../tutorials/nextdns/) for settings details. 

**Manual DNS Server Settings**: Input a custom DNS server manually.

![custom dns server](https://static.gl-inet.com/docs/router/en/3/setup/share/more_settings/custom_dns_server.png){class="glboxshadow"}

---

## Network Mode

On the left side of web Admin Panel -> MORE SETTINGS -> Network Mode

Change the network mode to cater your usage scenario. You may need to reconnect your client device whenever you change the network mode of the router.

Be aware that you may not be able to access the web Admin Panel with the default IP 192.168.8.1 if you use the router in **Access Point**, **Extender** or **WDS** mode. If you want to access the web Admin Panel in this case, you have to use the IP address assigned by the main router to the GL.iNet router.

**Router**: Create your own private network. The router will act as NAT, firewall and DHCP server.

**Access Point**: Connect  to a wired network and broadcast a wireless network.

**Extender**: Extend the Wi-Fi coverage of an existing wireless network.

**WDS**: Similar to Extender, please choose WDS if your main router supports WDS mode.

![network mode](https://static.gl-inet.com/docs/router/en/3/setup/share/more_settings/network_mode.png){class="glboxshadow"}

---

## Revert Firmware

On the left side of web Admin Panel -> MORE SETTINGS -> Revert Firmware

Revert the router to factory default settings. All your settings, applications and data will be erased.

![revert firmware](https://static.gl-inet.com/docs/router/en/3/setup/share/more_settings/revert_firmware.png){class="glboxshadow"}

---

## Advanced

On the left side of web Admin Panel -> MORE SETTINGS -> Advanced

`Advanced` is for LuCI, which is the default web interface of OpenWrt. You can check the detailed system log or conduct more advanced configurations there.

For some models, LuCI is not preinstalled, click `Install LuCI` to continue.

![luci no installed](https://static.gl-inet.com/docs/router/en/3/setup/share/more_settings/luci/luci_no_installed.png){class="glboxshadow"}

After installed.

![luci installed](https://static.gl-inet.com/docs/router/en/3/setup/share/more_settings/luci/luci_installed.png){class="glboxshadow"}

Click the `192.168.8.1/cgi-bin/luci` will go to LuCI login page.

![luci login](https://static.gl-inet.com/docs/router/en/3/setup/share/more_settings/luci/luci_login.png){class="glboxshadow"}

*Note: The username is **root**. The password is same as the one that you use to access the web Admin Panel.*
