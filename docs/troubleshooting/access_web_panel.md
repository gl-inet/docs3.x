# Access Web Panel

<p>Sometimes you may be unable to access 192.168.8.1 to login web admin panel, please follow the guide below to solve this problem.</p>

---

## Check connection/router's IP address 

<p>Make sure your WAN/LAN port connection is correct. WAN port is connected to an internet source and LAN port is connected to devices. If connected by wifi, make sure the SSID is correct.</p>

Then follow the steps below to check the router's IP address.

<details>
        <summary>Windows 7 / Windows 10</summary>
<ol type="1">
         <li>Go to Control Panel -> Network and Internet -> Network and Sharing Center -> Change adapter settings.</li>
         <li>Right click Local Area Connection -> Status .</li>
         <li>Click Details -> Check IPv4 Default Gateway if it is 192.168.8.1(Correct results).
         <img src="https://static.gl-inet.com/docs/en/3/troubleshooting/access_web_panel/1.png"/></li>
        </ol>
        </details>

*Your ip address results determine the next step.*

---

## Your IP address is incorrect

If the IP address is incorrect, check your connection again.

<ol type="1">
   <li>

   Try <a href="https://docs.gl-inet.com/en/3/troubleshooting/reset/">Reset</a> to back to factory default.

   </li>
   <li>

   If the reset doesn't work, you can try <a href="https://docs.gl-inet.com/en/3/troubleshooting/debrick/">Debrick via uboot</a>.

   </li>
</ol>

---

## Your IP address is correct


<ol type="1">
   <li>

   Make sure you are using Chrome/Firefox, then try to access 192.168.8.1 again.

   </li>
   <li>

   <p>In order to avoid problems caused by the cache, click <b>ctrl+shift+n</b> in Chrome to enter the incognito mode. Then try to access 192.168.8.1 again.</p>

   <img src="https://static.gl-inet.com/docs/en/3/troubleshooting/access_web_panel/2.png"/></li>
   </li>
</ol>

---
