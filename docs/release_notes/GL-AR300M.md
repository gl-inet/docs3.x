# GL-AR300M - Release Notes

## V3.203 - Aug 3, 2021

Firmware:

**For GL-AR300M, GL-AR300M-Ext**:

- Upgrade through web Admin Panel [openwrt-ar300m-3.203-0701.tar](https://fw.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-3.203-0701.tar)

    SHA256: 368a1d31be7f07d70fae31873bec8738349b820bddba50735cb742b8bd96f3d5

- Upgrade through Uboot [openwrt-ar300m-3.203-0701.img](https://fw.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-3.203-0701.img)

    SHA256: 32f5a27f770157b4daf87f3ecdf92266747df9650b8ca00a101a1144b37d0c9c

**For GL-AR300M16, GL-AR300M16-Ext**:

- Firmware file: [openwrt-ar300m16-3.203-0701.bin](https://fw.gl-inet.com/firmware/ar300m/v1/openwrt-ar300m16-3.203-0701.bin)

    SHA256: 1b062aaf367d4ddd0163266c2e2e6aa16bff2ddfa4f866b9844064cfa26ac5cc

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

Firmware:

**For GL-AR300M, GL-AR300M-Ext**:

- Upgrade through web Admin Panel [openwrt-ar300m-ubi-3.201-0402.tar](https://fw.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-3.201-0402.tar)

    SHA256: 50cda44a860e0541d221ea88ca82f8f8f0c4864885c788034f19950e988161c5
    MD5: 08e759d56ae1d59a40c990ca66b6bee6

- Upgrade through Uboot [openwrt-ar300m-ubi-3.201-0402.img](https://fw.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-3.201-0402.img)

    SHA256: 7dff070c2725485231d352b492d99ef37bad1f274c92a32ce27ab417bdffb755
    MD5: 84a2eeb7f86f478d2ea2e540b77d1f3e

**For GL-AR300M16, GL-AR300M16-Ext**:

- Firmware file: [openwrt-ar300m16-3.201-0402.bin](https://fw.gl-inet.com/firmware/ar300m/v1/openwrt-ar300m16-3.201-0402.bin)

    SHA256: 75812594f0577a4f59c8624f123153b9306718de9503917226493addc31c0bd8
    MD5: f5bef4116131db1285109c09225b72cc

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

**For GL-AR300M, GL-AR300M-Ext**:

- Upgrade through web Admin Panel [openwrt-ar300m-ubi-3.105.tar](https://fw.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-ubi-3.105.tar)

    MD5: bb8a19ada429cb0e2a70ccafe0944b2c

- Upgrade through Uboot [openwrt-ar300m-ubi-3.105.img](https://fw.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-ubi-3.105.img)

    MD5: a39f48bcd3b928e3ca5323004eaec262

**For GL-AR300M16, GL-AR300M16-Ext**:

- [openwrt-ar300m16-3.105.bin](https://fw.gl-inet.com/firmware/ar300m/v1/openwrt-ar300m16-3.105.bin)

    MD5: 614a4f9dfe5b9baa10ece35d07e5eac0

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

## V3.104 - Jun 8, 2020

**For GL-AR300M, GL-AR300M-Ext**:

- Upgrade through web Admin Panel [gl-ar300m-nand-3.104.tar](https://fw.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-nand-3.104.tar)

    MD5: 8cecf52de9765396b3ef71a84f504a06

- Upgrade through Uboot [openwrt-ar300m-ubi-3.104.img](https://fw.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-ubi-3.104.img)

    MD5: 4bcd39a69150b1d8624876a91b032650

**For GL-AR300M16, GL-AR300M16-Ext**:

- [openwrt-ar300m16-3.104.bin](https://fw.gl-inet.com/firmware/ar300m/v1/openwrt-ar300m16-3.104.bin)

    MD5: a02897bf241952515eaf56b4588b8488

**New Features:**

- Added site to site.
- Added one-click channel optimization function.
- Added app status interface.
- Added DNS encryption function.
- Added Tor function (currently support custom installation).
- Added Internet Kill Switch function.
- Added default kernel package "kmod-nf-nathelper"  to solve the problem that FTP server cannot be found.

**Fixed Problem:**

- Tcpdump unable to catch ingree data problem.
- Tethering problem with Samsung 10.
- Fixed the problem that the web panel is unable to access due to 443,83,80 port settings of vpn server.
- Fixed PPP CVE-8597 CVE-7982 security vulnerability.

**Improvements:**

- Removed gl-autoupkg(auto reinstall ipk function), change from keep installed packages to keep installed packages list. Auto upgrade and cloud upgrade will save this list by default, users can choose the package they want to keep via admin panel.
- Optimized Wireguard auto-reconnect function.
- Optimized the vpn conflict testing.
- Optimized the port forwarding function.

**Others:**

- Changed tx power value to display by level.
- Disabled ipv6 function by default due to leak problem.
- Optimized wireless rate from setting mode to working mode and bandwidth mode.
- Modified the name of server zone.



---

## V3.024 - Jun 19, 2019

Firmware file: 

**For GL-AR300M, GL-AR300M-Ext**:

- Upgrade through web Admin Panel [gl-ar300m-nand-3.024.tar](https://fw.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-nand-3.024.tar)

    MD5: d24f10a176acc4f3f839079a8b666055

- Upgrade through Uboot [openwrt-ar300m-ubi-3.024.img](https://fw.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-ubi-3.024.img)

    MD5: bcc19b353bd58e5cc217f1db387d9e74

**For GL-AR300M16, GL-AR300M16-Ext**:

- [openwrt-ar300m16-3.024.bin](https://fw.gl-inet.com/firmware/ar300m/v1/openwrt-ar300m16-3.024.bin)

    MD5: 3913d837b3ea7a3a22723e226a4fb1ab

**New Features:**

- Added pre-installed cloud/ddns soft packages
- Added IP Address Range in LAN IP page
- Added connecting hidden SSIDs function
- Added firmware compile time in upgrade page
- Added Captive Portal
- Added VPN Policies
- Added new support modem MC7430
- Supported batch setup on cloud

**Fixed:**

- Removed company MAC address detection
- Changed to single MAC
- Changed for being compatible with AR300MD
- Fix other bugs


---

## V3.019 - Mar 21, 2019

Firmware file:

**For GL-AR300M, GL-AR300M-Ext**:

- Upgrade through web Admin Panel [gl-ar300m-nand-3.019.tar](https://fw.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-nand-3.019.tar)

    MD5: 993808778ade47ab30fc5311a3ae5233

- Upgrade through Uboot [gl-ar300m-ubi-3.019.img](https://fw.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-ubi-3.019.img)

    MD5: 1267a6102fc0b53feadffa37fe1f3241

**For GL-AR300M16, GL-AR300M16-Ext, GL-AR300M-Lite**: 

- [gl-ar300m16-3.019.bin](https://fw.gl-inet.com/firmware/ar300m/v1/openwrt-ar300m16-3.019.bin)

    MD5: 47fa12816fb0a5f85febe80acf0f7844

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



