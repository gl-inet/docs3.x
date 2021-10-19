# Override DNS Settings for All Clients does not take effect

Some users have reported that the **Override DNS Settings for All Clients** option will not work if you manually set DNS on device. This may be because your device already uses DNS encryption.

Newer versions of Windows 10 and some browsers support **DoH** (DNS-over-HTTPS). They will automatically detect the **DoH** support status of DNS providers and automatically apply them. Some of the DNS providers that support **DoH** are as follows:

| Server Owner | IPv4 addresses               | IPv6 addresses                                 |
| ------------ | ---------------------------- | ---------------------------------------------- |
| Cloudflare   | 1.1.1.1<br />1.0.0.1         | 2606:4700:4700::1111<br />2606:4700:4700::1001 |
| Google       | 8.8.8.8<br />8.8.4.4         | 2001:4860:4860::8888<br />2001:4860:4860::8844 |
| Quad9        | 9.9.9.9<br />149.112.112.112 | 2620:fe::fe<br />2620:fe::fe:9                 |

If your device already supports **DoH** or other DNS encryption, your router's DNS-related Settings may not overwrite your device.

---

## How to check or turn off DoH of device

### Windows 10

The link below describes how to enable **DoH** on Windows 10. Similarly, you can follow the link to check or disable the **DoH**.

[https://winaero.com/how-to-enable-dns-over-https-in-windows-10/](https://winaero.com/how-to-enable-dns-over-https-in-windows-10/){target="_blank"}

### Browers

Some browers uses **DoH** by default, which can be turned off by following the link below.

* Google Chrome

[https://support.strongvpn.com/hc/en-us/articles/360055227833-How-to-Disable-DNS-Over-HTTPS-in-Chrome-](https://support.strongvpn.com/hc/en-us/articles/360055227833-How-to-Disable-DNS-Over-HTTPS-in-Chrome-){target="_blank"}

* Microsoft Edge

[https://www.tenforums.com/tutorials/151318-how-enable-disable-dns-over-https-doh-microsoft-edge.html](https://www.tenforums.com/tutorials/151318-how-enable-disable-dns-over-https-doh-microsoft-edge.html){target="_blank"}

* Firefox

[https://www.keepsolid.com/smartdns/manuals/how-to-disable-dns-over-https](https://www.keepsolid.com/smartdns/manuals/how-to-disable-dns-over-https){target="_blank"}
