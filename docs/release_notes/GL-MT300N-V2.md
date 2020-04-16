# GL-MT300N-V2 - Release Notes

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
- Added guest network.
- Added Captive Portal.

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