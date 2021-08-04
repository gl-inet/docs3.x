# GL-MT300N-V2 - Release Notes

## V3.203 - Aug 3, 2021

- Firmware file: [openwrt-mt300n-v2-3.203-0701.bin](https://fw.gl-inet.com/firmware/mt300n-v2/v1/openwrt-mt300n-v2-3.203-0701.bin)

    SHA256: f071bce3cf6bdc9b3bd30b6c7749661dafc1a73c4b964c0b7ca547fba196eaa7

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

- Firmware file: [openwrt-mt300n-v2-3.201-0402.bin](https://fw.gl-inet.com/firmware/mt300n-v2/v1/openwrt-mt300n-v2-3.201-0402.bin)

    SHA256: 9d09794f994dc4a5b3a511a20d9ff1626f8aae57e6692e5fde243cb2ba15ed5f

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

- Firmware file: [openwrt-mt300n-v2-3.105.bin](https://fw.gl-inet.com/firmware/mt300n-v2/v1/openwrt-mt300n-v2-3.105.bin)

    MD5: 5e87a67985b6f2eaae1995665c1bcf78

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

## V3.102 - Apr 15, 2020

- Firmware file: [openwrt-mt300n-v2-3.102.bin](https://fw.gl-inet.com/firmware/mt300n-v2/v1/openwrt-mt300n-v2-3.102.bin)

    MD5: 9fdd5882f4215b2344c04d8117222934

**New Features:**

- Added Site to Site function.
- Added one-click channel optimization function.
- Added app status interface.
- Added DNS encryption function.
- Added Tor function (currently support custom installation).
- Added Internet Kill Switch function.
- Added default kernel package "kmod-nf-nathelper"  to solve the problem that FTP server cannot be found.
- Added 83 ports to support web access.

**Fixed Problems:**

- Fixed PPP CVE-8597 security vulnerability.
- Fixed opkg CVE-7982 security vulnerability.
- Updated wireless driver to fix problem of Chromebook connection.

**Improvements:**

- Removed restrictions on network detection of wgClient and VPN clients from front end.
- Updated the date of main interface.


**Others:**

- Disabled ipv6 function by default due to leak problem.
- Changed tx power value to display by level.
- Modified the name of server zone.
- Optimized wireless rate from setting mode to working mode and bandwidth mode.

---

## V3.025 - Aug 13, 2019

- Firmware file: [openwrt-mt300n-v2-3.025.bin](https://fw.gl-inet.com/firmware/mt300n-v2/v1/openwrt-mt300n-v2-3.025.bin)

    MD5: 036227926450cc58c8d6c4257487db51

**New Feature**:

- Added Italian
- Added Guest Wifi
- Added Repeater Options
- Added connecting to hidden wifi
- Added offline clients
- Added VPN Policies
- Added Remote Access
- Added Captive portal
- Added DHCP address range management

---



## V3.012 - Jan 21, 2019

- Firmware file: [openwrt-mt300n-v2-3.012.bin](https://fw.gl-inet.com/firmware/mt300n-v2/v1/openwrt-mt300n-v2-3.012.bin)

    MD5: f16ef226c5037dd35239d0b4284d78c1

**New Feature:**

- Web admin panel display language supports Japanese.

--------

## V3.011 - Jan 4, 2019

Firmware file: [gl-mt300n-v2-3.011.bin](https://fw.gl-inet.com/firmware/mt300n-v2/v1/gl-mt300n-v2-3.011.bin)

**New Features:**

- OpenWrt Updated to version 18.06.
- Adopted new user-interface.
- WireGuard Server/Client pre-installed, supports Azirevpn and Mullvad service providers.
- Support DNS over TLS from Cloudflare.
- Added [GL Cloud](https://docs.gl-inet.com/en/3/app/cloud/).
- Added new [DDNS](https://docs.gl-inet.com/en/3/app/ddns/) function.
- Added client management feature which includes QoS, traffic statistics.
- Added firewall settings page which includes port forwards, open port and DMZ.
- Added static IP address binding in LAN IP settings.
- Added **Hide SSID** option in wireless settings.

**Fixed:**

- Improved the stability of wireless connection.
- Removed UPnP server, PPTP and L2TP.