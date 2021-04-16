# GL-XE300 (Puli) - Release Notes

## V3.201 - Apr 12, 2021

- Update through Admin Panel: [openwrt-xe300-3.201.tar](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/xe300/release/openwrt-xe300-3.201-0402.tar)
- Update through Uboot: [openwrt-xe300-3.201.img](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/xe300/release/openwrt-xe300-3.201-0402.img)

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

## V3.200 - Dec 9, 2020

**This is the first release firmware for GL-XE300:**

Firmware file:

- Update through Admin Panel: [openwrt-xe300-3.200.tar](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/xe300/release/openwrt-xe300-3.200.tar)
- Update through Uboot: [openwrt-xe300-3.200.img](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/xe300/release/openwrt-xe300-3.200.img)
