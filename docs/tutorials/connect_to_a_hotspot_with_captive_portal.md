# Connect to a Hotspot with Captive Portal

Some public hotspots especially those in hotel, cafe or airport, require you to input your authentication information or agree the terms and conditions through a web page (Captive Portal) before you can connect to it or access the Internet.

However, you may find that you are not able to enter the captive portal so that you cannot connect to the hotspot or access the Internet. In this case, please follow the solutions below one by one.

---

## Solution 1：Change DNS settings

1. Visit the web Admin Panel (default is 192.168.8.1), use Repeater to connect to the public hotspot which requires authentication through captive portal.

    Click **Scan** in the repeater sector.

    ![repeater](https://static.gl-inet.com/docs/router/en/3/tutorials/connect_to_a_hotspot_with_captive_portal/repeater.png){class="glboxshadow"}

    Select the public network which you want to connect, click **Join** button.

    ![repeater](https://static.gl-inet.com/docs/router/en/3/tutorials/connect_to_a_hotspot_with_captive_portal/repeater_selected.png){class="glboxshadow"}

2. Go to web Admin Panel -> MORE SETTINGS -> Custom DNS Server. Then, disable **DNS Rebinding Attack Protection**.

    ![custom dns server](https://static.gl-inet.com/docs/router/en/3/tutorials/connect_to_a_hotspot_with_captive_portal/custom_dns_server.png){class="glboxshadow"}

3. Go to web Admin Panel -> VPN -> OpenVPN Client & WireGuard Client. Make sure the connection of OpenVPN and WireGuard client is disable.

4. Go to web Admin Panel -> APPLICATIONS -> AdGuard Home (if appropriate). Make sure the AdGuard Home is stopped.

    ![adguard home is disable](https://static.gl-inet.com/docs/router/en/3/tutorials/connect_to_a_hotspot_with_captive_portal/adguardhome_is_disable.png){class="glboxshadow"}

5. Use your web browser to visit a webpage, it will be redirected to the captive portal of the hotspot automatically.

    If you are using smartphone but your web browser doesn't redirect to the captive portal. Please turn off the Wi-Fi of your smartphone and then turn it on and reconnect to the Wi-Fi of your router again. The captive portal should be popped up directly after you entered the Wi-Fi password.

    ![captive portal](https://static.gl-inet.com/docs/router/en/2/troubleshooting/src/captive_portal/7.jpg){class="glboxshadow" width="500"}

---

## Solution 2：MAC Clone

Sometimes, [Solution 1](#solution-1change-dns-settings) is not enough to solve this issue. Then you need to try the **MAC Clone** based on the solution 1.

1. Got your smartphone registered on the network.

2. On the left side of web Admin Panel -> MORE SETTINGS -> MAC Clone.

3. Clone the MAC address of your smartphone to the router.

    ![mac clone](https://static.gl-inet.com/docs/router/en/3/tutorials/connect_to_a_hotspot_with_captive_portal/mac_clone.png){class="glboxshadow" width="400"}

4. It may need to reboot the router to take effect.

---

## Solution 3：Ask the help from the hotel staff

Some hotel's network has a very strict verification policy. Neither solution 1 nor 2 is unable to make it work, then you can consult with the hotel staff if they can add the router's MAC address(the Factory default one) to their "Whitelist" directly.
