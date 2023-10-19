# DDNS

Dynamic Domain Name Service (DDNS) is a service used to map a domain name to the dynamic IP address of a network device.

## Setup

On the left side of web Admin Panel -> APPLICATIONS -> Remote Access

## Enable DDNS 

![enable-ddns](https://static.gl-inet.com/docs/en/3/tutorials/ddns/enable-ddns.png){class="glboxshadow"}

At the left sidebar, APPLICATIONS -> Remote Access, toggle "Enabled DDNS", agree Terms of Services & Privacy Policy, click "Apply" button.
Generally it take several minutes to take effect.

Move mouse to hover the icon besides "Enabled DDNS", it will display the DDNS url of your device.

![ddns-url](https://static.gl-inet.com/docs/en/3/tutorials/ddns/ddns-url.png){class="glboxshadow"}

The DDNS domain printed on the back label of router has changed. If your DDNS url is `xxxxxxx.gl-inet.com` on the back of router, new DDNS url will be `xxxxxxx.glddns.com`.

DDNS update frequency is once every 10 minutes.

**Note**: If the DDNS and VPN Client(OpenVPN Client or WireGuard Client) connection are both enabled at the same time, the DDNS url will map to the IP address of VPN, so please enable the [VPN Policies](vpn_policies.md) and disable the **Use VPN for all process on the router**.

## Check if DDNS is enabled

Use `nslookup` command to check if your DDNS is enabled. You need to change `xx5007c.glddns.com` to your DDNS url when use `nslookup` command.

`nslookup xx5007c.glddns.com 8.8.8.8`

![nslookup](https://static.gl-inet.com/docs/en/3/tutorials/ddns/nslookup.png){class="glboxshadow"}

The output above means the DDNS url has maped to a IP address.

## HTTP Remote Access

This function requires a public IP address. To check if your Internet Provider Service assign your a public IP address, please check [here](how_to_check_if_isp_assigns_you_a_public_ip_address.md).

If your router is behind NAT, you may need to set up port forward in higher level router. It use port 80.

![HTTP-Remote-Access](https://static.gl-inet.com/docs/en/3/tutorials/ddns/HTTP-Remote-Access.png){class="glboxshadow"}

Follow the steps above, to enable HTTP Remote Access. 

***HTTP is not encrypted, use at your own risk.***

After you enable HTTP Remote Access, you can access Admin Panel anywhere by your DDNS url of http, e.g. `http://xxxxxxx.glddns.com`. If you use port forward, you should be access like `http://xxxxxxx.glddns.com:YourExternalPort`.

## HTTPS Remote Access

This function requires a public IP address. To check if your Internet Provider Service assign your a public IP address, please check [here](how_to_check_if_isp_assigns_you_a_public_ip_address.md).

If your router is behind NAT, you may need to set up port forward in higher level router. It use port 443.

![HTTPS-Remote-Access](https://static.gl-inet.com/docs/en/3/tutorials/ddns/HTTPS-Remote-Access.png){class="glboxshadow"}

This function use self-signed certificates, so the browers will indicate that "Your connection is not private". I will show you how to use it anyway on Chrome iOS. Other browers are the similar process.

![HTTPS-Remote-Access-on-iOS-Chrome](https://static.gl-inet.com/docs/en/3/tutorials/ddns/https-remote-access-ios-chrome-1.png){class="glboxshadow" width="400"}

As show above, click "Advanced".

![HTTPS-Remote-Access-on-iOS-Chrome](https://static.gl-inet.com/docs/en/3/tutorials/ddns/https-remote-access-ios-chrome-2.png){class="glboxshadow" width="400"}

As show above, click "Processed to xxxxxxx.glddns.com (unsafe)".

After you enable HTTPS Remote Access, you can access Admin Panel anywhere by your DDNS url of https, e.g. `https://xxxxxxx.glddns.com`. If you use port forward, you should be access like `https://xxxxxxx.glddns.com:YourExternalPort`.

## SSH Remote Access

This function requires a public IP address. To check if your Internet Provider Service assign your a public IP address, please check [here](how_to_check_if_isp_assigns_you_a_public_ip_address.md).

If your router is behind NAT, you may need to set up port forward in higher level router. It use port 22.

![SSH-Remote-Access](https://static.gl-inet.com/docs/en/3/tutorials/ddns/SSH-Remote-Access.png){class="glboxshadow"}

Follow the steps above, to enable SSH Remote Access, then you can ssh to your router anywhere. 

## Turn Off

If you don't want to use DDNS, just disable it.

![disable ddns](https://static.gl-inet.com/docs/en/3/tutorials/ddns/disable-ddns.png){class="glboxshadow"}

![after disable ddns](https://static.gl-inet.com/docs/en/3/tutorials/ddns/after-disable-ddns.png){class="glboxshadow"}

After disable DDNS, the interface is like above.
