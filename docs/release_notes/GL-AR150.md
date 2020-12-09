# GL-AR150 - Release Notes

## V3.105 - Dec 8, 2020

Firmware file:

Firmware file: [openwrt-ar150-3.105.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar150/v1/openwrt-ar150-3.105.bin)

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

## V3.017 - Mar 11, 2019

Firmware file: [openwrt-ar150-3.017.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar150/v1/openwrt-ar150-3.017.bin)

**New Features:**

- OpenWrt Updated to version 18.06.
- Adopted new user-interface.
- WireGuard Server/Client pre-installed, supports Azirevpn and Mullvad service providers.
- Support DNS over TLS from Cloudflare.
- Support multiple web admin panel display languages.
- Added [GL Cloud](https://docs.gl-inet.com/en/3/app/cloud/).
- Added new [DDNS](https://docs.gl-inet.com/en/3/app/ddns/) function.
- Added client management feature which includes QoS, traffic statistics and offline client.
- Added firewall settings page which includes port forwards, open port and DMZ.
- Added static IP address binding in LAN IP settings.
- Added **Hide SSID** option in wireless settings.
- Added guest Wi-Fi network.
- Added **Keep Installed Packages** option in firmware upgrade.

**Fixed:**

- Fixed safety vulnerability.
- Removed UPnP server, PPTP and L2TP.