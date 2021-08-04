# microuter-N300 - Release Notes

## V3.203 - Aug 3, 2021

- Firmware file: <a href="https://fw.gl-inet.com/firmware/n300/release/openwrt-n300-3.203-0701.bin" target="_blank">openwrt-n300-3.203-0701.bin</a>

    SHA256: 6dbbb4e27621e479281e59055bc6d43b9f6ff2ae16b643564802f871d706cd85

**OpenWrt Distribution:**

- Based on OpenWrt 19.07.7  (AR150, MIFI, AR300M, USB150, N300, AR750, AR750S, X750, E750, X1200,XE300, MT300N-V2, MT1300, MV1000)
- Based on QSDK11  (B1300, S1300, AP1300)

**Security fix:**

- mac80211: backport upstream fixes for FragAttacks(CVE-2020-24586, CVE-2020-24587, CVE-2020-24588, CVE-2020-26139, CVE-2020-26140, CVE-2020-26141, CVE-2020-26142, CVE-2020-26143, CVE-2020-26144, CVE-2020-26145, CVE-2020-26146, CVE-2020-26147)

**Important bug fix:**

- Fixed a BUG where the OpenVPN connection status was displayed incorrectly on the E750 LCD
- Fixed XE300 modem manual settings always being overwritten when reboot 
- Fixed DNS leakage when using OpenVPN and Wireguard

---

## V3.201 - Apr 12, 2021

- Firmware file: <a href="https://fw.gl-inet.com/firmware/n300/release/openwrt-n300-3.201-0402.bin" target="_blank">openwrt-n300-3.201-0402.bin</a>

    SHA256: 5d95320f7be5224afc97cab91259e38f951ec987238f347a1fe82bb6e03ff967
    MD5: 77774dbd0c17864ab4a381574b7f171a

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

## V3.102 - May 7, 2020

- Firmware file: <a href="https://fw.gl-inet.com/firmware/n300/release/openwrt-n300-3.102.bin" target="_blank">openwrt-n300-3.102.bin</a>

    MD5: dd3fecf7ef8a341e63267507d3c70f32

**New Features:**

- Added Site to Site function.
- Added a one-click channel optimization function.
- Added app status interface.
- Added DNS encryption function.
- Added Tor function (currently support custom installation).
- Added Internet Kill Switch function.
- Added default kernel package "kmod-nf-nathelper"  to solve the problem that FTP server cannot be found.
- Added 83 ports to support web access.
- Added guest network.
- Added Captive Portal.

**Fixed Problems:**

- Fixed the problem that the web was unable to access due to 443,83,80 port settings of vpn server.
- Fixed PPP CVE-8597 security vulnerability.
- Fixed opkg CVE-7982 security vulnerability.
- Updated wireless driver to fix the problem of Chromebook connection.
- Fixed dual-stack vpn connection problem caused by disabling ipv6 function 

**Improvements:**

- Optimized the vpn conflict testing.
- Optimized wireless rate from setting mode to working mode and bandwidth mode.
- Removed restrictions on network detection of wgClient and VPN clients from the front end.

**Others:**

- Disabled ipv6 function by default due to leak problem.
- Modified the name of the server zone.

---

## V3.025 - Aug 2, 2019

- Firmware file: <a href="https://fw.gl-inet.com/firmware/n300/release/openwrt-n300-3.025.bin" target="_blank">openwrt-n300-3.025.bin</a>

    MD5: 39aab9331c6930c9d2224da398cd87ad