# GL-MiFi - Release Notes

## V3.201 - Apr 12, 2021

Firmware file: [openwrt-mifi-3.201.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/mifi/v1/openwrt-mifi-3.201-0402.bin)

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

Firmware file: [openwrt-mifi-3.105.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/mifi/v1/openwrt-mifi-3.105.bin)

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

## V3.029 - Jan 02, 2020

Firmware file:[openwrt-mifi-3.029.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/mifi/v1/openwrt-mifi-3.029.bin)

**Fix:**

- In certain case, the web Admin Panel cannot be accessed

## V3.028 - Nov 25,2019

Firmware file:[openwrt-mifi-3.028.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/mifi/v1/openwrt-mifi-3.028.bin)

**New Features:**


- Added site to site
- Added one-click channel optimization function
- Added VPN Policies
- Added keep installed package when upgrade
- Added libustream-openssl module which support download firmware and software package in https
- Added Flash available space in plus-in
- Added app status interface
- Added front-end networking mode icon change

**Fix:**

- Removed company MAC address detection


## V3.023 - May 16,2019

Firmware file:[openwrt-mifi-3.023.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/mifi/v1/openwrt-mifi-3.023.bin)

**New Features:**


- Added Italian, Japanese.
- Added guest Wi-Fi network.
- Added Hide SSID option in wireless settings.
- Support connect to hidden Wi-Fi.
- Added GL Cloud.
- Added new DDNS function.
- Added static IP address binding in LAN IP settings and custom DHCP range.
- Added Captive Portal.
- Optimize client management features which include QoS, traffic statistics and adding offline client.

**Fixed:**


- Fixed timezone sync.
- Other minor bug fixes.

