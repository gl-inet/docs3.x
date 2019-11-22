# GL-USB150 (Microuter) - Release Notes

## V3.027 - Sep 19, 2019

<mark>Note: This version cannot use Online Upgrade(automatically upgrade) due to tech issue, </mark> please follow <a href="https://docs.gl-inet.com/en/3/setup/microuter/upgrade/#upload-firmware" target="_blank">the instruction of Local Upgrade</a> manually.

Here is  the local upgrade firmware file: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/usb150/v1/openwrt-usb150-3.027.bin" target="_blank">openwrt-usb150-3.027.bin</a>.

**New Features:**

- Added Guest wifi.
- Added hiding ssid and connecting hidden ssid.
- Added client management feature which includes QoS, traffic statistics and offline client. 
- Added VPN Policies.
- Added Cloud/DDNS.
- Added Captive Portal.
- Added DHCP address pool.
- Added static IP address binding in LAN IP settings.
- Added keeping installed package when upgrade.
- Added libustream-openssl modem which support download firmware and software package in https.
- Added Flash available space in plus-in.
- Added Site to Site.

**Improvements:**

- Optimized VPN.
- Optimized lighttpd startup sequence.
- Optimized firmware upgrade.
- Optimized Cloudfare DNS using stubby.

**Fixed:**

- Removed MAC address check.

---

## v3.001 - SEP 12, 2018

Firmware file: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/usb150/v1/openwrt-usb150-3.001.bin" target="_blank">openwrt-usb150-3.001.bin</a>

**New Features:**

- Support DNS over TLS from Cloudflare.
- Added WireGuard Client/Server.
- Added Bridge mode function.
- Support 6 display languages (English**, **简体中文**, **繁體中文**, **Deutsch**, **Français and Español).
- Visit Luci advanced settings in MORE SETTING -> Advanced.
- Added Plug-ins application for OpenWrt packages management.
- Clients can be blocked through the page of CLIENTS.

**Improvements:**

- Improved back end and the stability of the router.
- Improved Repeater function and its network switching feature.
- Improved OpenVPN Client/Server.

**Fixed:**

- Fixed the bug of manual DNS server configuration which user is not allowed to input only one DNS server.



---

##v3.0 - JUN 22, 2018

Firmware file: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/usb150/v1/openwrt-usb150-3.0.bin" target="_blank">openwrt-usb150-3.0.bin</a>

