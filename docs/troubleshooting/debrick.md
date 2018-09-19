# Using Uboot to Debrick Your Router

You may brick your router if you were doing some DIY projects or flashed a wrong firmware. You may not be able to access your router but you can re-install the firmware by using Uboot failsafe.



---

Please follow the procedures below to access the Uboot Web UI and re-install the firmware.

You can also refer to our video, [How to Recover GL.iNet Mini Router by U-Boot FailSafe](https://docs.gl-inet.com/en/3/video/tutor/#how-to-recover-glinet-mini-router-by-u-boot-failsafe).



<ol type="1">
    <li>
        <p> Connect your computer to the <b>LAN port</b> of the router, and leave the other port <b>unconnected</b>.
        </p>
    </li>
    <li>
    	<p>Press and hold the Reset button firmly first, and then power on your device. <b>You MUST obey the first and then procedure</b>.
        </p>
    </li>
    <li>
    	<p>The LEDs will start blinking.
        </p>
    </li>
    <li>
    	<p>Release your finger when you see the LED has flashed:
        <ul>
        	<li>5 times for GL-AR150, GL-AR300M, GL-MiFi, GL-USB150, GL-AR750, GL-AR750S-Ext (Slate)</li>
        	<li>3 times for GL-MT300N, GL-MT300A, and GL-B1300</li>
        </ul>
        </p>
    </li>
    <li>
    	<p>Set your computer’s IP address to <b>192.168.1.2</b>.<img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/debrick/set_ip.jpg">
        </p>
    </li>
    <li>
    	<p>Use Firefox or Chrome to visit <b>http://192.168.1.1</b>.<img src="https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/debrick/ui.jpg">
        </p>
    </li>
    <li>
    	<p>Click <b>Choose File</b> to find the firmware file. Then click <b>Update firmware</b>. You can download the firmware <a href="http://download.gl-inet.com/firmware">here</a>.
        </p>
    </li>
    <li>
    	<p>Wait for around 3 minutes. Don’t power off your device when updating.
        </p>
    </li>
    <li>
    	<p>Revert the IP setting you did in step 5 and you will be able to access the router via 192.168.8.1 again.
        </p>
    </li>
</ol>