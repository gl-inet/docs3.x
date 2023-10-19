# Repeat Failure

In some cases, when the router scan the 2.4G Wi-Fi signal, you may find you are not able to see some SSIDs, this situation may caused by Wi-Fi channel.
Our routers use channel 1 to 11 for 2.4GHz Wi-Fi by default, when the Wi-Fi you want to repeat is in 12 or 13 channel, the router would not be able to see or repeat it.

However, you can change **Country Code** in LuCI to get full channel.(Don't support GL-MT300N-V2)

---

<ol type="1">
<li>
	<p>Log in your router by 192.168.8.1.</p>
</li>
<li>
	<p>Go to MORE SETTINGS -> Advanced.</p>
	<img src="https://static.gl-inet.com/docs/router/en/3/troubleshooting/repeat_failure/1.png"/>
</li>
<li>
    <p>Input web page password and you will enter LuCI page.</p>
	<img src="https://static.gl-inet.com/docs/router/en/3/troubleshooting/repeat_failure/2.png"/>
</li>
<li>
	<p>Go to Network -> Wireless.</p>
	<img src="https://static.gl-inet.com/docs/router/en/3/troubleshooting/repeat_failure/3.png"/>
</li>
<li>
    <p>click <b>Edit</b> on 2.4G Wi-Fi section.</p>
	<img src="https://static.gl-inet.com/docs/router/en/3/troubleshooting/repeat_failure/4.png"/>
</li>
<li>
	<p>Click <b>Advanced Settings</b>, change the <b>Country Code</b> to your country or Japan. Click <b>Save&Apply</b>.</p>
	<img src="https://static.gl-inet.com/docs/router/en/3/troubleshooting/repeat_failure/5.png"/>
	
</li>
<li>
    <p>Refresh your web UI page and you will see 12/13 section in 2.4G Wi-Fi channel. Scan again and now you will be able to see other SSIDs.</p>
	<img src="https://static.gl-inet.com/docs/router/en/3/troubleshooting/repeat_failure/6.png"/>
</li>
</ol>

---
