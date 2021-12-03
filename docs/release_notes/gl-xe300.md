# GL-XE300 (Puli) - Release Notes

## V3.203 - Aug 3, 2021

- Update through Admin Panel: [openwrt-xe300-3.203-0701.tar](https://fw.gl-inet.com/firmware/xe300/release/openwrt-xe300-3.203-0701.tar)

    SHA256: 58207a7f84ea88f453ec8aac08bb9c2ddc1669ff8af9be9b1d9a6866f2cbba72

- Update through Uboot: [openwrt-xe300-3.203-0701.img](https://fw.gl-inet.com/firmware/xe300/release/openwrt-xe300-3.203-0701.img)

    SHA256: 21027267c6617998b15800364a5ec74eb7af25cdc681c034e3e7b98628ae4420

**OpenWrt Distribution:**

- Based on OpenWrt 19.07.7  (AR150,MIFI,AR300M,USB150,N300,AR750,AR750S,X750,E750,X1200,- XE300,MT300N-V2,MT1300,MV1000)
- Based on QSDK11  (B1300,S1300,AP1300)

**Security:**

- Fixed wolfSSL heap buffer overflow in RsaPad_PSS (CVE-2020-36177)
- Fixed netifd and odhcp6c routing loop on IPv6 point to point links (CVE-2021-22161)
- Fixed dnsmasq multiple vulnerabilities (CVE-2020-25681, CVE-2020-25682, CVE-2020-25683, CVE-2020-25684, CVE-2020-25685, CVE-2020-25686, CVE-2020-25687)
- Fixed mac80211 FragAttacks(CVE-2020-24586,CVE-2020-24587,CVE-2020-24588,CVE-2020-26139,CVE-2020-26140,CVE-2020-26141,CVE-2020-26142,CVE-2020-26143,CVE-2020-26144,CVE-2020-26145,CVE-2020-26146,CVE-2020-26147)
- Added times limit to password authentication

**New features:**

- Supported IPv6 ( Internet, OpenVPN, WireGuard )
- Supported WPA3 (AR150,MIFI,AR300M,USB150,N300,AR750,AR750S,X750,E750,X1200,XE300)
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

- Supported GL.iNet App

**Cloud support:**

- Supported Rtty SSH Access
- Supported Rtty HTTP Access
- Supported Ping tool
- Supported Traceroute tool
- Supported RS485 tool（X300B)

**Language:**

- Supported Russian

**Important bug fix:**

- Fixed speed limit function failure in some models
- Fixed tor initialization failure in some models
- Fixed the problem that when turn off the AP in MT300N-V2, the repeater won't auto-reconnect.
- Fixed the problem that when WireGuard's Allowed IPs are not set with global proxy address, router will be unable to access the internet. 
- Fixed the problem that MT1300 can't access internet when using StrongVPN.
- Fixed a BUG where the OpenVPN connection status was displayed incorrectly on the E750 LCD
- Fixed XE300 modem manual settings always being overwritten when reboot 
- Fixed DNS leakage when using OpenVPN and WireGuard
- Fixed other known issues.

---

## V3.200 - Dec 9, 2020

**This is the first release firmware for GL-XE300:**

Firmware file:

- Update through Admin Panel: [openwrt-xe300-3.200.tar](https://fw.gl-inet.com/firmware/xe300/release/openwrt-xe300-3.200.tar)

    SHA256: 8219aa5e8e89f3e96313a0fd68743a7802e85b3217655fb494face7442fd1e48

- Update through Uboot: [openwrt-xe300-3.200.img](https://fw.gl-inet.com/firmware/xe300/release/openwrt-xe300-3.200.img)

    SHA256: fa44a746600561b920607b2de6e7ec613bc9f5e6e0f172b7dddb5541bd912fb4
