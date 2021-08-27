# Connect to a Hotspot with Captive Portal

Some public hotspots especially those in hotel, cafe or airport, require you to input your authentication information or agree the terms and conditions through a web page **(Captive Portal) **before you can connect to it or access the Internet.

However, you may find that you are not able to enter the captive portal so that you cannot connect to the hotspot or access the Internet. In this case, please follow the following procedures to disable the **DNS rebind protection**.



---
<ol type="1">
<li>
	<p>Connect to the public hotspot which requires authentication through captive portal.</p>
    <img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/captive_portal/1.jpg"/>
    <img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/captive_portal/6.jpg"/>
</li>
<li>
    <p>Go to Admin Panel -> MORE SETTINGS -> Custom DNS Server. Then, disable <b>DNS Rebinding Attack Protection</b>.</p>
	<img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/captive_portal/4.jpg"/>
</li>
<li>
	<p>Use your web browser to visit a webpage, it will be redirected to the captive portal of the hotspot automatically.</p>
    <p>If you are using smartphone but your web browser doesn't redirect to the captive portal. Please turn off the Wi-Fi of your smartphone and then turn it on and reconnect to the Wi-Fi of your router again. The captive portal should be popped up directly after you entered the Wi-Fi password.
    </p>
	<img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/captive_portal/7.jpg"/>
</li>
</ol>

