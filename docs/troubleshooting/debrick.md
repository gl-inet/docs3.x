# Using Uboot to Debrick Your Router

You may brick your router if you were doing some DIY projects or flashed a wrong firmware. You are not able to access your router but you can re-install the firmware by using Uboot failsafe.



Please follow the procedures below to access the Uboot Web UI and re-install the firmware:

---


## 1. Connect
Connect **only one** cable to your router, and leave **the other port (LAN or WAN) unconnected**.


## 2. Press and Hold
Press and hold the *Reset* button firmly first, and then power on your device. **Must obey the first and then procedure**.


## 3. Lights
The LEDs will start blinking.


## 4. Release
Release your finger when you see the LEDs flashing:
- 5 times for GL-AR150 and GL-AR300M16

- 3 times for GL-MT300N, GL-MT300A, and GL-B1300


## 5. Set IP
Set your computer’s IP address to **192.168.1.2** (see the cap-screen of Win 7 below)

   ![](https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/debrick/set_ip.jpg)


## 6. Enter Web UI
User Firefox or Chrome to visit **http://192.168.1.1.** Then you will enter Uboot Web UI.

   ![](https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/debrick/ui.jpg)


## 7. Update
Click **Choose File** to find the firmware. Then click **Update firmware**. You can download the firmware here: <http://download.gl-inet.com/firmware/>


## 8. Upgrading
Wait for around 3 minutes. Don’t power off your device while upgrading. Revert the IP setting you did in step 5 and you will be able to access the router via 192.168.8.1 again.