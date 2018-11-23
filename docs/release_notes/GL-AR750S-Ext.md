#GL-AR750S-Ext (Slate) - Release Notes


## v3.007 - Nov 22, 2018

Firmware file:

- Update through Uboot: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/release/gl-ar750s-3.007.img" target="_blank">gl-ar750s-3.007.img</a>
- Update through Admin Panel: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/release/gl-ar750s-3.007.tar" target="_blank">gl-ar750s-3.007.tar</a>

The following is an incomplete summary of the changes since v3.003 (work in progress).

**NEW FEATURE:**
 - Add firewall functionality, including port forwarding, port opening, and DMZ
 - Add Qos functionality
 - Add traffic statistics and real-time traffic display
 - Add change OpenVPN server without data leak

**FIX BUG:**
 - Fix without prompting for username and password when uploading PureVPN's OpenVPN configuration file
 - Fix WISP bind to BSSID which caused cannot reconnect to other available AP automatically
 - Fix 5GHz AP disappear when it is used to WISP mode
 - Optimize WIFI scan list with sort by signal strength
 - Optimize "Saved Networks" in WISP mode, the same SSID only display one
 - Optimize the automatic reconnection mechanism to improve the stability of WISP

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





