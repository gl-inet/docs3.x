# microuter-N300 - Release Notes

## V3.201 - Apr 12, 2021

Firmware file: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/n300/release/openwrt-n300-3.201-0402.bin" target="_blank">openwrt-n300-3.201.bin</a>

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

## V3.102 - May 7, 2020

Firmware file: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/n300/release/openwrt-n300-3.102.bin" target="_blank">openwrt-n300-3.102.bin</a>

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

Firmware file: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/n300/release/openwrt-n300-3.025.bin" target="_blank">openwrt-n300-3.025.bin</a>