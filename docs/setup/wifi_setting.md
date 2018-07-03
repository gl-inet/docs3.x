# Wireless Settings

## Turn On or Off the Radio

You can turn on or off the radio from the wen admin page by the switch beside the wireless icon.

![wifi switch](https://static.gl-inet.com/docs/en/2.x/setup/src/wifi/wifi_switch.jpg)



## Wireless Status

You can click the `wireless icon` to check the wireless status.

There are two parts in the wireless status. The first part is **Radio information**. The second part is **Interface (Virtual AP) information**.

A single router may have one or more radio and one device can have multiple Virtual interfaces.

In this example, the channel is **6** and tx power is **20**. We have one AP interface with SSID **GL-MT300M-164**.

![wifi switch](https://static.gl-inet.com/docs/en/2.x/setup/src/wifi/status.jpg)



## Wireless Settings

Click the `Setting` button, you can change the wireless settings:

**Mode**: Change from 802.11 b/g/n, etc.

**Channel**: The router will not choose the best channel itself. You need to choose one channel manually. You will have different choices based on the region you selected. In US, you can choose from 1 to 11. In China and EU, you can choose from 1 to 13. If you are using repeater, the channel will be fixed according to the main router.

**SSID**: Change the name of the Wi-Fi. It is not suggested to use unicode characters such as **Chinese**.

**Encryption**: You can only choose from WPA, WPA2 or WPA-Mixed. You cannot choose WEP or open because it is insecure. If you want to use WEP or you don't need a password, you can configure in Advanced settings (Luci).

**Password**: If you keep the password value empty, it will use the old password. It must be at least 8 characters. We suggest you to change the Wi-Fi password when you get the router.

![wifi switch](https://static.gl-inet.com/docs/en/2.x/setup/src/wifi/setting.jpg)



#Discussions