# GL-AR750S-Ext (Slate) - Release Notes

## V3.203 - Aug 3, 2021

- Update through web Admin Panel: [gl-ar750s-3.203-0701.tar](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.203-0701.tar)

    SHA256: 8dfe7535a8818939342e8bed87e17edd1cd411a4583c95c6f00e51c92937c8aa

- Update through Uboot: [gl-ar750s-3.203-0701.img](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.203-0701.img)

    SHA256: 1b56b10ca7282994aef5eef2a0412b9c0b8cd2741368789ddb0383fef1d257e6

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

- Update through web Admin Panel: [gl-ar750s-3.201-0402.tar](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.201-0402.tar)

    SHA256: d0b6c011ca5e94e903920de4bed4d0b0cb4d946eb8728880bf3d60a46ba40aff
    MD5: df17529eb2405f11845aaa8b15dbb052

- Update through Uboot: [gl-ar750s-3.201-0402.img](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.201-0402.img)

    SHA256: 03f6e86399d1582ffbcf1ea15c9a255025441bb2ebe2f8e5d7b1f4e4cd4e77a6
    MD5: a6ed8ce2c2293dc43eb4bc1efeec8115

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

- Update through Admin Panel: [gl-ar750s-3.105.tar](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.105.tar)

    MD5: 612bb7574c87c5bbb284ce12589034a8

- Update through Uboot: [gl-ar750s-3.105.img](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.105.img)

    MD5: 53d81383ddeeb54fa6d79a7195401a2a

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

- Update through Admin Panel: [gl-ar750s-3.104.tar](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.104.tar)

    MD5: 337953a9b41865746cffb6d8435c1e45

- Update through Uboot: [gl-ar750s-3.104.img](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.104.img)

    MD5: 8326b4894d0a74caba2422fa9a1bad7c

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

- Update through Admin Panel: [gl-ar750s-3.101.tar](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.101.tar)

    MD5: 4ea4a02fed296534087ca0d16c4413e1

- Update through Uboot: [gl-ar750s-3.101.img](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.101.img)

    MD5: 1934d6f600b3152164c2afd6cf90581c

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

- Update through Admin Panel: [gl-ar750s-3.100.tar](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.100.tar)

    MD5: c7dc7c255965740e7870dde4dc473e3b

- Update through Uboot: [gl-ar750s-3.100.img](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.100.img)

    MD5: 4d26c768fee284763ba61ea7f02b0832

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

- Update through Admin Panel: [gl-ar750s-3.025.tar](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.025.tar)

    MD5: 5375a7431d25053eb2564bf087a986ea

- Update through Uboot: [gl-ar750s-3.025.img](https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.025.img)

    MD5: 2887d0acacdb80e0a3080e042f7d2527

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

- Update through Admin Panel: <a href="https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.009.tar" target="_blank">gl-ar750s-3.009.tar</a>

    MD5: f957027d0f3ad7c4e4dae9e725bf311f

- Update through Uboot: <a href="https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.009.img" target="_blank">gl-ar750s-3.009.img</a>

    MD5: de4b7974610238f94dd858aa5a8dd3a0

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

- Update through Admin Panel: <a href="https://fw.gl-inet.com/firmware/ar750s/release/gl-ar750s-3.007.tar" target="_blank">gl-ar750s-3.007.tar</a>

    MD5: e676a562ca36999c6575d1b8a936c40c

- Update through Uboot: <a href="https://fw.gl-inet.com/firmware/ar750s/release/gl-ar750s-3.007.img" target="_blank">gl-ar750s-3.007.img</a>

    MD5: 5f8ee11d912517eec9c05457fb949ce5

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

- Update through Admin Panel: <a href="https://fw.gl-inet.com/firmware/ar750s/release/gl-ar750s-3.003.tar" target="_blank">gl-ar750s-3.003.tar</a>

    MD5: 7cb93efd5d0fb352dbe21892ea6281b5

- Update through Uboot: <a href="https://fw.gl-inet.com/firmware/ar750s/release/gl-ar750s-3.003.img" target="_blank">gl-ar750s-3.003.img</a>

    MD5: 10dff3bbd441c53be6b48076300c8e2e

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

- Update through Admin Panel: <a href="https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.001.tar" target="_blank">openwrt-ar750s-3.001.tar</a>

    MD5: 96a553c97cbf2ee0696f75ffcc938dc6

- Update through Uboot: <a href="https://fw.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.001.img" target="_blank">openwrt-ar750s-3.001.img</a>

    MD5: 9ed13405a9ea78119c1651216a8c6b0a



