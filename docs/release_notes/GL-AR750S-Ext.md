# GL-AR750S-Ext (Slate) - Release Notes

## V3.009 - Dec 12, 2018

Firmware file:

- Update through Uboot: <a href="https://dl.gl-inet.com/firmware/ar750s/release/" target="_blank">gl-ar750s-3.009.img</a>
- Update through Admin Panel: <a href="https://dl.gl-inet.com/firmware/ar750s/release/" target="_blank">gl-ar750s-3.009.tar</a>

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

- Update through Uboot: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/release/gl-ar750s-3.007.img" target="_blank">gl-ar750s-3.007.img</a>
- Update through Admin Panel: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/release/gl-ar750s-3.007.tar" target="_blank">gl-ar750s-3.007.tar</a>

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

##v3.003 - OCT 10, 2018

Firmware file:

- Update through Uboot: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/release/gl-ar750s-3.003.img" target="_blank">gl-ar750s-3.003.img</a>
- Update through Admin Panel: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/release/gl-ar750s-3.003.tar" target="_blank">gl-ar750s-3.003.tar</a>

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

- Update through Uboot: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.001.img" target="_blank">openwrt-ar750s-3.001.img</a>
- Update through Admin Panel: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.001.tar" target="_blank">openwrt-ar750s-3.001.tar</a>





