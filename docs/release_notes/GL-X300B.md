# GL-X300B (Collie) - Release Notes

## V3.201 - Apr 12, 2021

- Firmware file: [openwrt-x300b-3.201-0402.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/x300b/release/openwrt-x300b-3.201-0402.bin)

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

## V3.104 - Nov 23, 2020

**This is the first release firmware for GL-300B:**

Firmware file:

- [openwrt-x300b-3.104.bin](https://dl.gl-inet.com/firmware/x300b/releases/openwrt-x300b-3.104.bin)