# APPLICATIONS



## AT Command

The built-in modem supports AT command for the management and configuration of the modem. You can also use this AT command tool [here](internet.md#at-command).

- **Shortcut:** There are several pre-configured AT commands that you can use directly. If you want to run your own AT command, choose **Manual command**.
- **AT Command:** The place where you can input AT command. For the list of AT command, please refer to the AT command manual of the built-in modem.
- **Port:** The default port for AT command is **/dev/ttyUSB2**.

![at command](https://static.gl-inet.com/docs/en/3/setup/4g_smart_router/applications/at_command.jpg)



---



## Plug-ins

**Plug-ins** allows you to manage the OpenWrt packages. You can install or remove any package. 

Remember to click `Update` whenever you access this packages repository.

![Plug ins](https://static.gl-inet.com/docs/en/3/setup/4g_smart_router/applications/plug-ins.jpg)



---

## Send Message

You can send and receive message once you have set up the 3G/4G modem with your SIM card. Go to `Send Message` to check any received message. 

![message](https://static.gl-inet.com/docs/en/3/setup/4g_smart_router/applications//message.jpg)



Click `New Message` to send message.

![send message](src/applications/send_message.jpg)



---

## File Sharing

You can use an external USB storage or a MicroSD with GL.iNet router. The file sharing features of the external storage device can be configured in **File Sharing**.

**Share via LAN**: Share the contents of the external storage device with all connected clients.

**Share via WAN**: The contents of the external storage device can be access from the WAN.

**Writable**: Other network computers and devices can edit the contents of the external storage device if they are allowed to access.

![File sharing](https://static.gl-inet.com/docs/en/3/setup/4g_smart_router/applications/file_sharing.jpg)



The contents of the USB stick or MicroSD card will be shared among all connected clients. However, please make sure the network of your computer is private. Otherwise, you may not be able to access the router in **Network**.

For WIN10, you have to enable SMB1 in order to access the external storage device. Go to Control Panel -> Programs and Features -> Turn Windows features on or off -> Find SMB 1.0/CIFS file sharing support, check all SMB1 related items, click apply and restart your computer.

![network](https://static.gl-inet.com/docs/en/3/setup/4g_smart_router/applications/network.jpg)