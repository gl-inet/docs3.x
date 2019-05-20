# Using Uboot to Debrick Your Router

You may brick your router if you were doing some DIY projects or flashed a wrong firmware. You may not be able to access your router but you can re-install the firmware by using Uboot failsafe.



---

Please follow the procedures below to access the Uboot Web UI and re-install the firmware.

You can also refer to our video, [How to Recover GL.iNet Mini Router by U-Boot FailSafe](https://docs.gl-inet.com/en/3/video/tutor/#how-to-recover-glinet-mini-router-by-u-boot-failsafe).



<ol type="1">
    <li><p>
        First you have to download <b>firmware</b> to your computer. You can download the firmware <a href="https://dl.gl-inet.com/firmware" target="_blank">here</a>. For GL-AR300M, GL-AR300M-Ext, GL-AR750S-Ext, please download the.img firmware file, others download the .bin firmware file.
        </p> 
    </li>
    <li>
        <p> Connect your computer to the <b>Ethernet port (either LAN or WAN)</b> of the router, and you <b>MUST</b> leave the other port <b>unconnected</b>.
        </p>
    </li>
    <li>
    	<p>Press and hold the Reset button firmly first, and then power on your device. <b>You MUST obey the first and then procedure</b>.
        </p>
    </li>
    <li>
    	<p>The Power LED will light up. Then, other LEDs will start flashing.
        </p>
    </li>
    <li>
    	<p>Release your finger when you see the LED has flashed:
        <ul>
        	<li><b>5 times</b> for GL-AR150, GL-AR300M, GL-MiFi, GL-USB150, GL-AR750, GL-AR750S-Ext (Slate), GL-X750-Ext (Spitz), GL-B1300.</li>
        	<li><b>3 times</b> for GL-MT300N, GL-MT300A.</li>
        </ul>
        </p>
    </li>
    <li>
    	<p>Set your computer’s IP address to <b>192.168.1.2</b>. Please check the step-by-step guide for different operating systems below:</p>
        <details>
        <summary>Windows 7 / Windows 10</summary>
        <ol type="1">
        	<li>Go to Control Panel -> Network and Internet -> Network and Sharing Center -> Change adapter settings.</li>
        	<li>Right click Local Area Connection -> Properties.</li>
        	<li>Click Internet Protocol Version 4 (TCP/IPv4) -> Properties.</li>
        	<li>Set the IP adress to 192.168.1.2 manually.</li>
        	<img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/debrick/set_ip.jpg">
        </ol>
        </details>
        <details>
        <summary>Mac</summary>
        <ol type="1">
        	<li>Go to System Preferences -> Network.</li>
        	<li>Chooose Ethernet -> Advanced -> TCP/IP.</li>
        	<li>In Configure IPv4, choose Manually.</li>
        	<li>Set the IPv4 Address to 192.168.1.2 manually.</li>
        </ol>
        </details>
	</li>
    <li>
    	<p>Use Firefox or Chrome to visit <b>http://192.168.1.1</b>.<img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/debrick/ui.jpg">
        </p>
    </li>
    <li>
    	<p>Click <b>Choose File</b> to find the firmware file. Then click <b>Update firmware</b>. 
        </p>
        <p>For GL-AR300M, GL-AR300M-Ext, GL-AR750S-Ext, please download the .img firmware file and upload to the Nand flash.
        <img src="https://static.gl-inet.com/docs/en/3/troubleshooting/uboot.jpg"><p>
    </li>
    <li>
    	<p>Wait for around 3 minutes. Don’t power off your device when updating. The router is ready when both power and  Wi-Fi LED are on or you can find its SSID on your device.
        </p>
    </li>
    <li>
    	<p>Revert the IP setting you did in step 6 and connect your device to the LAN or Wi-Fi of the router. You will be able to access the router via 192.168.8.1 again.
        </p>
    </li>
</ol>

