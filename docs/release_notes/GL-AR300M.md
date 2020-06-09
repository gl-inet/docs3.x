# GL-AR300M - Release Notes

## V3.104 - Jun 8, 2020

Nand :  [openwrt-ar300m-ubi-3.104.img](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-ubi-3.104.img)

Nor :  [openwrt-ar300m16-3.104.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar300m/v1/openwrt-ar300m16-3.104.bin)


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

- **GL-AR300M,GL-AR300M-Ext**:

[openwrt-ar300m-ubi-3.024.img](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-ubi-3.024.img)

- **GL-AR300M16,GL-AR300M16-Ext**:

[openwrt-ar300m16-3.024.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar300m/v1/openwrt-ar300m16-3.024.bin)


**New Features:**

- Added pre-installed cloud/ddns soft packages
- Added IP Address Range in LAN IP page
- Added connecting hidden SSIDs function
- Added firmware compile time in upgrade page
- Added Captival Portal
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

- **GL-AR300M, GL-AR300M-Ext**:

  Upgrade through Uboot [gl-ar300m-ubi-3.019.img](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-ubi-3.019.img)

  Upgrade through web admin panel [gl-ar300m-nand-3.019.tar](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar300m/nand/v1/openwrt-ar300m-nand-3.019.tar)

- **GL-AR300M16, GL-AR300M16-Ext, GL-AR300M-Lite**: [gl-ar300m16-3.019.bin](https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar300m/v1/openwrt-ar300m16-3.019.bin)



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



