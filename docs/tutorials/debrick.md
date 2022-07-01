# Using Uboot to Debrick Your Router

You may have bricked your router if you were doing some DIY projects or flashed a wrong firmware. You may not be able to access your router but you can re-install the firmware by using Uboot failsafe.

**Note:** The Uboot operation will remove your router's settings and installed plugins.

---

Please prepare a computer with an ethernet port, if not, please prepare an additional USB Ethernet Adapter.

Please follow the procedures below to access the Uboot Web UI and re-install the firmware.

You can also refer to video tutorial below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/EAaaw8nyrnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. Please download firmware [here](https://dl.gl-inet.com/){target="_blank"} to your computer.

    Some models, such as GL-AR750S-EXT, it is available in two formats of firmware, please use the firmware for uboot, its file name extension is **.img**.

2. Remove the power of router. Connect your computer to the **Ethernet port (either LAN or WAN)** of the router. You **MUST** leave the other port **unconnected**.

3. Press and hold the Reset button firmly, and then power up the router. If your router doesn't have a power button, plugging the power in will power it on automatically.

    Then you will see a light flashes in a regular pattern a few times, please release your finger after the pattern changed.

    The following will give the description of pattern of each model of light flashing.

    **Note:** Same router models with different manufacturing dates may have different LED lights colours or flashing pattern, it won't affect the UBoot process. Please pay more attention to the change of the flashing pattern.

    - For **GL-AR150**, **GL-AR300M**, **GL-USB150(Microuter)**, **GL-AR750(Creta)**, **GL-AR750S-EXT(Slate)**, **GL-X750(Spitz)**, **GL-MT300N-V2(Mango)**, **GL-E750(Mudi)**, **microuter-N300**, the lgiht falshes 5 times.

    - For **GL-S1300(Convexa-S), GL-B1300(Convexa-B)**, the light flashes 4 times.
        
        The left most LED may stay on the whole time while the rightmost LED flashes 4 times, then the middle LED turns on and stays on.
        
        (For some old GL-B1300, the left most LED stays on the whole time, and both the middle LED and the rightmost LED flash 5 times at the same time then they stay on.)

    - For **GL-SF1200**, the 5G LED flashes 5 times then stays on.

    - For **GL-AX1800(Flint)**, the blue light flashes 5 times then turns white and stay on.

    - For **GL-AXT1800(Slate AX)**, the blue light flashes 5 times then stay on.

    - For **GL-XE300(Puli)**, the LAN light falshes 5 times then WIFI light stay on.

    - For **GL-X300B(Collie)**, the WAN light flashes 5 times then WIFI light stay on.

    - For **GL-SFT1200(Opal)**, the blue light flashes 5 times then turns white and stay on.

    - For **GL-AP1300(Cirrus)**, the power light falshes 5 times then stay on.

    - For **GL-MT1300(Beryl)**, the LED is blue at first, flash twice slowly, then light 5 times a bit quick and turn to white and stay on.

    - For **GL-B2200(Velica)**, the two LEDs are blue at first, then turn white to flash 5 times, then turn blue and stay on.

    - For **GL-MV1000**, no repeat LED flashes signal. (Power and WAN LEDs will stay on the whole time.)

    - For **GL-MiFi**, the lgiht flashes 6 times.

    - For **GL-MT300N**, **GL-MT300A**, the light flashes 3 times.

4. Manually set the IP address of your computer to **192.168.1.2**. Please check the step-by-step guide for different operating systems below:

    ??? "Windows 7 / Windows 10"

        1. Go to **Control Panel** -> **Network and Internet** -> **Network and Sharing Center** -> **Change adapter settings**.

        2. Right click **Local Area Connection** -> **Properties**.

        3. Click **Internet Protocol Version 4 (TCP/IPv4)** -> **Properties**.

        4. Set the **IP adress** to `192.168.1.2` manually.

        5. Set the **Subnet mask** to `255.255.255.0`.

            ![ipv4 properties](https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/debrick/set_ip.jpg){class="glboxshadow"}

        6. Click the **OK** button.

    ??? "Windows 11"

        1. Open Settings.

        2. Click on **Network & Internet**.

        3. Click the **Ethernet** tab.

            ![windows 11 ethernet](https://static.gl-inet.com/docs/en/4/tutorials/debrick/windwos11_ethernet.png){class="glboxshadow"}

        4. Under the "IP settings" section, click the **Edit** button.

            ![windows 11 ethernet edit](https://static.gl-inet.com/docs/en/4/tutorials/debrick/windows11_ethernet_ip_assignment_edit.png){class="glboxshadow"}

        5. Select the **Manual** option.

            ![windows 11 ethernet edit](https://static.gl-inet.com/docs/en/4/tutorials/debrick/windows11_ethernet_edit_ip_settings.png){class="glboxshadow"}

        6. Turn on the **IPv4 toggle** switch.

        7. Set the static **IP address** as **192.168.1.2**.

            ![windows 11 ethernet edit](https://static.gl-inet.com/docs/en/4/tutorials/debrick/windows11_ethernet_edit_ip_settings_2.png){class="glboxshadow"}

        8. Specify the **Subnet mask** as **255.255.255.0**.

        9. Click the **Save** button.

    ??? "macOS"

        1. Go to System Preferences -> Network.

        2. Chooose Ethernet -> Advanced -> TCP/IP.

        3. In Configure IPv4, choose Manually.

        4. Set the IPv4 Address to 192.168.1.2 manually.

5. Use browser to visit **http://192.168.1.1**, this is the Uboot Web UI.

    ![uboot web ui](https://static.gl-inet.com/docs/en/4/tutorials/debrick/uboot_ui.png){class="glboxshadow" width="700"}

    **Note:** The uboot Web UI above may not be exactly the same as what you see, because the Uboot version is different for different production dates. In some cases, we recommend upgrading the Uboot version. Please refer to the tutorial below.

    ??? "Upgrade the Uboot version"

        Some Uboot versions are too old or its Web UI is not easy for users to understand, so we recommend upgrading the Uboot version.

        For example, the following figure shows the Web UI of the old Uboot version of GL-AR750S. It has two **Choose file** buttons, which can be confusing for users.

        ![gl-ar750s old uboot version](https://static.gl-inet.com/docs/en/4/tutorials/debrick/gl-ar750s_firmware_update_page_of_old_uboot_version.png){class="glboxshadow" width="700"}

        1. You need to download the uboot file [here](https://github.com/gl-inet/uboot-for-qca95xx/tree/master/bin){target="_blank"} in advance.

        2. Repeat the above steps until you can access the Uboot Web UI.

        3. Use browser to visit **http://192.168.1.1/uboot.html**

            ![gl-ar750s u-boot update page](https://static.gl-inet.com/docs/en/4/tutorials/debrick/u-boot_update.png){class="glboxshadow" width="700"}

        4. Click the **Choose file** button and choose the uboot file you just downloaded.

        5. Click **Update U-Boot** button.

        6. It will take several minutes to update. After a successful update, it will reboot the router.

        7. At this time you can change the IP setting back in step 4 and try to access the web Admin Panel, if you can access the web Admin Panel normally, it means the router has been rebooted.

        8. Repeate the above steps to upgrade the firmware. If the uboot version is updated successfully, you will see that the Uboot Web UI has changed at step 5. 

6. Click **Choose file** button to find the firmware file. Then click **Update firmware** button.

7. Wait for around 3 minutes. Don’t power off your device when updating. The router is ready when both power and  Wi-Fi LED are on or you can find its SSID on your device.

8. Revert the IP setting you did in step 4 and connect your device to the LAN or Wi-Fi of the router. You will be able to access the router via **192.168.8.1** again.
