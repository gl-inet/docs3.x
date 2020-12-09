# GL-MT300N-V2 - Release Notes

## V3.105 - Dec 8, 2020

Firmware file:

**Firmware file:** [openwrt-mt300n-v2-3.105.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/mt300n-v2/v1/openwrt-mt300n-v2-3.105.bin)

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

**Firmware file:** [openwrt-mt300n-v2-3.102.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/mt300n-v2/v1/openwrt-mt300n-v2-3.102.bin)

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

Firmware file: [openwrt-mt300n-v2-3.025.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/mt300n-v2/v1/openwrt-mt300n-v2-3.025.bin)

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

Firmware file: [openwrt-mt300n-v2-3.012.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/mt300n-v2/v1/openwrt-mt300n-v2-3.012.bin)

**New Feature:**

- Web admin panel display language supports Japanese.

--------

## V3.011 - Jan 4, 2019

Firmware file: [gl-mt300n-v2-3.011.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/mt300n-v2/v1/gl-mt300n-v2-3.011.bin)

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