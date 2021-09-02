# Connect to a Hotspot with Captive Portal

Some public hotspots especially those in hotel, cafe or airport, require you to input your authentication information or agree the terms and conditions through a web page **(Captive Portal) **before you can connect to it or access the Internet.

However, you may find that you are not able to enter the captive portal so that you cannot connect to the hotspot or access the Internet. In this case, please follow the following procedures to disable the **DNS rebind protection**.

---

1. Connect to the public hotspot which requires authentication through captive portal.

    ![](https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/captive_portal/1.jpg){class="glboxshadow"}
    ![](https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/captive_portal/6.jpg){class="glboxshadow"}

2. Go to Admin Panel -> MORE SETTINGS -> Custom DNS Server. Then, disable **DNS Rebinding Attack Protection**.

    ![](https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/captive_portal/4.jpg){class="glboxshadow"}

3. Use your web browser to visit a webpage, it will be redirected to the captive portal of the hotspot automatically.

    If you are using smartphone but your web browser doesn't redirect to the captive portal. Please turn off the Wi-Fi of your smartphone and then turn it on and reconnect to the Wi-Fi of your router again. The captive portal should be popped up directly after you entered the Wi-Fi password.

    ![](https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/captive_portal/7.jpg){class="glboxshadow"}
