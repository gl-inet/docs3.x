# GL-AR750S-Ext (Slate) - Release Notes

## V3.201 - Apr 12, 2021

- Update through Admin Panel: [gl-ar750s-3.201.tar](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.201-0402.tar)
- Update through Uboot: [gl-ar750s-3.201.img](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.201-0402.img)

**System：**

- Based on openwrt 19.07.7

**Security:**

- Fixed wolfSSL heap buffer overflow in RsaPad_PSS (CVE-2020-36177)
- Fixed netifd and odhcp6c routing loop on IPv6 point to point links (CVE-2021-22161)
- Fixed dnsmasq multiple vulnerabilities (CVE-2020-25681, CVE-2020-25682, CVE-2020-25683, CVE-2020-25684, CVE-2020-25685, CVE-2020-25686, CVE-2020-25687)
- Added times limit to password authentication

**New features:**

- Supported IPv6 ( Internet, OpenVPN, WireGuard )
- Supported WPA3 (AR150,MIFI,AR300M,USB150,AR750,AR750S,X750,E750,X1200,XE300)
- Supported deleting offline clients
- Added warnings when uploading old version or three-party firmwares
- Added 2.4G WIFI and LTE working channel interference automatic avoidance(MIFI,X750,E750,X1200,XE300)
- Supported IGMP 
- Supported DLNA

**Hardware support:**

- Supported SPI nand GD5F1GQ5UEYIG

**Optimization:**

- Optimized client statistics function

**APP support:**

- Supported V1.0.5

**Cloud support:**

- Supported Rtty SSH Access
- Supported Rtty HTTP Access
- Supported Ping tool
- Supported Traceroute tool
- Supported RS485 tool（X300B)

**Language:**

- Supported Russian

**Important bugfix:**

- Fixed speed limit function failure in some models
- Fixed tor initialization failure in some models
- Fixed the problem that when turn off the AP in MT300N-V2, the repeater won't auto-reconnect.
- Fixed the problem that when WireGuard's Allowed IPs are not set with global proxy address, router will be unable to access the internet. 
- Fixed the problem that MT1300 can't access internet when using StrongVPN.
- Fixed other known issues.

---

## V3.105 - Dec 8, 2020

Firmware file:

- Update through Admin Panel: [gl-ar750s-3.105.tar](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.105.tar)
- Update through Uboot: [gl-ar750s-3.105.img](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.105.img)

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

## V3.104 - May 7, 2020

Firmware file:

- Update through Admin Panel: [gl-ar750s-3.104.tar](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.104.tar)
- Update through Uboot: [gl-ar750s-3.104.img](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.104.img)

**New Features:**

- Added Korean.
- Added hint in vpn page.

**Fixed Problems:**

- Fixed the problem that tcpdump was unable to catch the ingree data pack.
- Fixed tethering problem with Samsung S10 phone.
- Fixed the problem that the web was unable to access due to 443,83,80 port settings of vpn server.
- Fixed PPP CVE-8597 security vulnerability.
- Fixed opkg CVE-7982 security vulnerability.

**Improvements:**

- Optimized the vpn conflict testing.
- Optimized the port forwarding function.
- Optimized wireless rate from setting mode to working mode and bandwidth mode.

**Others:**

- Modified the page tag.
- Disabled ipv6 function by default due to leak problem.

---

## V3.101 - Mar 3, 2020

Firmware file:

- Update through Admin Panel: [gl-ar750s-3.101.tar](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.101.tar)
- Update through Uboot: [gl-ar750s-3.101.img](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.101.img)

**New Features:**

- Added hints in Tor function
- Added hint in upgrade page :"If unable to access router web panel after the firmware upgrade is complete, please try to clear the browser cache."
- Added "kmod-nf-nathelper" kernel package in order to solve the problem that FTP server couldn't be found

**Fixed:**

- Disabled the ipv6 function due to leak problem
- Fixed initialization failed problem on Tor
- Fixed the problem : Unable to access web panel when 83 port is open
- Fixed the problem : Last changed ovpn rules back to default setting after system reboot 

**Improvements:**

- Optimized web access problem when upgrading firmware with low version
- Optimized splash screen problem when upgrading
- Optimized AR750S pictures and upgrade hints
- Optimized Japanese translation

---

## V3.100 - Dec 30, 2019

Firmware file:

- Update through Admin Panel: [gl-ar750s-3.100.tar](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.100.tar)
- Update through Uboot: [gl-ar750s-3.100.img](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.100.img)

**New Features:**

- Added Site to Site
- Added cells info
- Added app status interface
- Added DNS encryption
- Added Channel Optimization
- Added Tor function
- Added internet kill switch

**Fixed:**

- Removed ipk auto re-install function and changed to save ipk list
- Changed tx power to showed by levels

**Improvements:**

- Optimized wireguard auto reconnection
- Optimized wireguard DNS resolution failure

---


## V3.025 - Jul 3, 2019

Firmware file:

- Update through Admin Panel: [gl-ar750s-3.025.tar](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.025.tar)
- Update through Uboot: [gl-ar750s-3.025.img](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.025.img)

**New Features:**

- Added guest wifi
- Added hiding ssid and connecting hidden ssid
- Added client management feature which includes QoS, traffic statistics and offline client.
- Added compile time and release note update in firmware upgrade page
- Added firewall settings page which includes port forwards, open port and DMZ
- Added VPN Policies
- Added Captive Portal
- Added static IP address binding in LAN IP settings
- Added DHCP address pool
- Added new support modem MC7430
- Added keeping installed package when upgrade
- Added libustream-openssl modem which support download firmware and software package in https
- Added kmod-usb-storage-uas modem
- Added Flash available space in plus-in

**Fixed:**

- Removed company MAC address detection
- Fixed other bugs 

---

## V3.009 - Dec 12, 2018

Firmware file:

- Update through Admin Panel: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.009.tar" target="_blank">gl-ar750s-3.009.tar</a>
- Update through Uboot: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.009.img" target="_blank">gl-ar750s-3.009.img</a>

**New Features:**

- Added bridge mode disabled reminder in Network Mode when OpenVPN or Wireguard client is activated.
- Added alert when VPN client is abnormal.

**Fixed:**

- Optimized Wi-Fi repeater when connecting to saved network.
- Improved Wi-Fi repeater reconnection issue.
- Fixed OpenVPN data leakage.
- Fixed OpenVPN configuration file upload failure caused by file name which includes `'`.
- Support PiVPN configuration file.
- Fixed  SSH login failure caused by admin password which includes quotation mark `'` and full stop `.`.
- Fixed WireGuard data leakage.

---

## v3.007 - Nov 22, 2018

Firmware file:

- Update through Admin Panel: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/gl-ar750s-3.007.tar" target="_blank">gl-ar750s-3.007.tar</a>
- Update through Uboot: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/gl-ar750s-3.007.img" target="_blank">gl-ar750s-3.007.img</a>

**New Features:**

 - Added firewall function which includes port forwarding, port opening and DMZ.
 - Added Qos function.
 - Added traffic statistics and real-time traffic display.

**Fixed:**

 - Fixed OpenVPN configuration file upload issue of PureVPN which user cannot input username and password.
 - Fixed WISP-BSSID binding which restricts the router to reconnect to other available Wi-Fi network automatically.
 - Fixed 5GHz AP disappear issue when the router is in repeater mode.
 - Optimized the list of Wi-Fi scan result sorting according to signal strength.
 - Optimized "Saved Networks" in WISP mode, same SSID only displays once.
 - Optimized the automatic reconnection mechanism to improve the stability of WISP.

---

## v3.003 - OCT 10, 2018

Firmware file:

- Update through Admin Panel: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/gl-ar750s-3.003.tar" target="_blank">gl-ar750s-3.003.tar</a>
- Update through Uboot: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/gl-ar750s-3.003.img" target="_blank">gl-ar750s-3.003.img</a>

**New Features:**

- Added WireGuard QR code for the easy exportation of the configuration from the router to the smart phone WireGuard Apps.

**Improvements:**

- OpenVPN client supports configuration file with sub-folder.
- Wireless setting supports Auto channel.

**Fixes:**

- Fixed Memory leak.
- Corrected askpass.
- Fixed the issue of software update.
- OpenVPN supports NordVPN and PureVPN configuration.
- Other minor bug fixes.



---

## v3.001 - JUL 30, 2018

Firmware file:

- Update through Admin Panel: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.001.tar" target="_blank">openwrt-ar750s-3.001.tar</a>
- Update through Uboot: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.001.img" target="_blank">openwrt-ar750s-3.001.img</a>





