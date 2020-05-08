# microuter-N300 - Release Notes

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