# GL-USB150 (Microuter) - Release Notes

## V3.201 - Apr 12, 2021

Firmware file: [openwrt-usb150-3.201.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/usb150/v1/openwrt-usb150-3.201-0402.bin)

System：
Based on openwrt 19.07.7

Security:
1. Fixed wolfSSL heap buffer overflow in RsaPad_PSS (CVE-2020-36177)
2. Fixed netifd and odhcp6c routing loop on IPv6 point to point links (CVE-2021-22161)
3. Fixed dnsmasq multiple vulnerabilities (CVE-2020-25681, CVE-2020-25682, CVE-2020-25683, CVE-2020-25684, CVE-2020-25685, CVE-2020-25686, CVE-2020-25687)
4. Added times limit to password authentication

New features:
1. Supported IPv6 ( Internet, OpenVPN, WireGuard )
2. Supported WPA3 (AR150,MIFI,AR300M,USB150,AR750,AR750S,X750,E750,X1200,XE300)
3. Supported deleting offline clients
4. Added warnings when uploading old version or three-party firmwares
5. Added 2.4G WIFI and LTE working channel interference automatic avoidance(MIFI,X750,E750,X1200,XE300)
6. Supported IGMP 
7. Supported DLNA

Hardware support:
1. Supported SPI nand GD5F1GQ5UEYIG

Optimization:
1. Optimized client statistics function

APP support:
1. Supported V1.0.5

Cloud support:
1. Supported Rtty SSH Access
2. Supported Rtty HTTP Access
3. Supported Ping tool
4. Supported Traceroute tool
5. Supported RS485 tool（X300B)

Language:
1. Supported Russian

Important bugfix:
1. Fixed speed limit function failure in some models
2. Fixed tor initialization failure in some models
3. Fixed the problem that when turn off the AP in MT300N-V2, the repeater won't auto-reconnect.
4. Fixed the problem that when WireGuard's Allowed IPs are not set with global proxy address, router will be unable to access the internet. 
5. Fixed the problem that MT1300 can't access internet when using StrongVPN.
6. Fixed other known issues.

---

## V3.105 - Dec 8, 2020

Firmware file:

Firmware file: [openwrt-usb150-3.105.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/usb150/v1/openwrt-usb150-3.105.bin)

**New features:**

- Supported traffic statistics in bridge mode
- Supported OpenVPN bridge
- Supported NextDNS personal ID
- File sharing supported closing LAN sharing and supports shared folder selection
- OpenVPN server supported CHACHA20-POLY1305 encryption
- OpenVPN server supported Authentication option setting
- Wireguard server supported local network access switch
- The modem supported QCM protocol, SMS forwarding, adding Auth, Proto, TTL, and other configuration options (MIFI, X750, E750, X1200)
- Supported MCU setting (E750)
- Supported AdGuardHome (S1300)

Software Upgrade:

- Openssl upgraded to 1.1.1d
- Openvpn upgraded to 2.5.0

Optimization:

- Optimized real-time traffic statistics and reduce CPU load
- Optimized MQTT
- Optimized 4G to WiFi speed (MIFI,X750,E750)
- Optimized the number of X1200 5G client connections

Language:

- Supported Russian
- Fixed the problem of incomplete and inaccurate translation of some languages

UI:

- Added VPN status indicator icon to the navigation page
- Added quick navigation to Wireguard client commercial configuration
- Removed the import method with JSON format in Wireguard client 

Important bug fix:

- Fixed the problem that AdGuardHome cannot be upgraded
- Fixed MV1000 memory leak problem
- Fixed tethering problem with iOS14 system
- Fixed the problem that port 53 is exposed to the WAN after opening Override DNS Settings for All Clients
- Fixed the problem that the client of the router cannot access the address of the Wireguard server when using Wireguard client
- Fixed the problem that the Wireguard client AllowedIPs parameter does not take effect
- Fixed the problem that Mullvad WireGuard needs to manually modify the MTU to 1380
- Fixed the X1200 dual-module IP exchange problem
- Fixed the problem that some websites cannot be opened after using VPN policy (AR750S, X1200)
- Fixed other known issues

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

