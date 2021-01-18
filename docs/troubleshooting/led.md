# LED Status Indication



## Mini Router

![](https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/ledlight/mini_led.jpg)

- **Power**: Solid green LED that indicates the router is powered up.
- **Wireless**:  Solid Red LED that indicates the router is broadcasting Wi-Fi. It will flash when there is wireless data transfer.
- **Configurable**: Can be customized by the user.






## GL-USB150 Microuter

![](https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/ledlight/microuter.jpg)

- **Power**: Solid green LED that indicates the router is powered up.
- **Hotspot**:  Solid green LED that indicates the router is broadcasting Wi-Fi. It will flash when there is wireless data transfer.






## GL-MiFi 4G Smart Router

  ![mini LED](https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/ledlight/mifi.jpg)

- **Battery**: Indicate the battery, it will blink when the device is charging until fully charged.
- **Power**: This router is powered on
- **WAN**: This router is connected to the Internet via Ethernet port.  It will blink when the device has data transmission from Ethernet port
- **LAN**: This router is connected to client through LAN cable
- **WI-Fi**: Solid LED that indicates the router is broadcasting Wi-Fi. It will flash when there is wireless data transfer.
- **3G/4G**: This router is connected to the 3G/4G LTE network. It will blink when the device has data transmission from 3G/4G LTE network






## GL-AR750 

  ![](https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/ledlight/ar750.jpg)

- **Power**: Solid white LED that indicates the router is powered up.
- **2.4GHz Wi-Fi**: Solid white LED that indicates the router is broadcasting 2.4GHz Wi-Fi. It will flash when there is wireless data transfer
- **5GHz Wi-Fi**: Solid white LED that indicates the router is broadcasting 5GHz Wi-Fi. It will flash when there is wireless data transfer


## GL-B1300

  ![](https://static.gl-inet.com/docs/en/2.x/troubleshooting/src/ledlight/b1300.jpg)

- **Power**: Solid green LED that indicates the router is powered up.
- **Mesh**: Flash green LED indicates that the router is pairing with another router. It will turn solid green when the Mesh network has been created.
- **Wireless**: Solid green LED that indicates the router is broadcasting Wi-Fi. It will flash when there is wireless data transfer.


## GL-MT1300

  ![](https://static.gl-inet.com/docs/en/3/troubleshooting/led/mt1300_light.jpg)

- **Solid blue light**: Device is powering up.
- **Solid white light**: Network is connected.
- **Slowly growing blue light**: Network disconnects/ No cable connection.
- **Fast flashing blue light**: In reset process.
- **Slowly flashing blue light**: Upgrading firmware in process.


## GL-B2200

  ![](https://static.gl-inet.com/docs/en/3/troubleshooting/led/b2200_light.jpg)


### Power Up

| Status       | Node      | Power Light| Action   | Internet Light    |
| ------------ | --------- | ---------- | -------- | ----------------- |
| Device is powered up       | Main/Sub node      | **Solid white light**      | Plug in cable, internet connected | **Solid white light**                |
| Device is powered up   | Main/Sub node      | **Solid white light**       | No cable plug in | **OFF**                |
| Device is powered up     | Main/Sub node      | **Solid white light**          | Plug in cable, internet disconnected | **Solid blue light**                |


### Reset

| Mode       | Status      | Node| Action   | Power Light    |
| ------------ | --------- | ---------- | -------- | ----------------- |
| Router Mode       | Network Reset      | /      | Press 4s | **Flashing white light**                |
| Router Mode   | Factory Reset     | /       | Press 8s | **Fast flashing white light**                |
| Mesh Mode     | Factory Reset      | Main/sub node         | Press 8s | **Fast flashing white light**                |


### Upgrade

| Status       | Power Light     | Internet Light|
| ------------ | --------- | ---------- |
| Upgrading firmware in process       | **Flashing blue light**      | **Flashing blue light**      | 
| Upgraded firmware    | **Solid blue light**     |   **1s solid blue light then flashing blue light**    | 


### Mesh

| Status       | Node      | Power Light| Action   | Internet Light    |
| ------------ | --------- | ---------- | -------- | ----------------- |
| Starting mesh pairing       | Main/Sub node      | **Solid white light**      | / | **Slowly growing blue light**                |
| Mesh successfully   | Main node      | **Solid white light**       | Plug in cable, internet connected | **Solid white light**                |
| Mesh successfully     | Main node      | **Solid white light**          | No cable plug in | **OFF**                |
| Mesh successfully     | Main node      | **Solid white light**          | Plug in cable, internet disconnected | **Solid blue light**                |
| Mesh successfully     | Sub node      | **Solid white light**          | / | **Solid white light**                |
| Fail to complete the mesh pairing     | Main node      | **Solid white light**          | Plug in cable, Internet connected | **Solid white light**                |
| Fail to complete the mesh pairing     | Main node      | **Solid white light**          | No cable plug in | **OFF**                |
| Fail to complete the mesh pairing     | Main node      | **Solid white light**          | Plug in cable, Internet disconnected | **Solid blue light**                |
| Fail to complete the mesh pairing     | Sub node      | **Solid white light**          | / | **Slowly growing blue light**                |


## LED Customization

To configure the LED of GL.iNet routers, please login to Luci by clicking **Advanced settings** at the bottom-left corner of the web admin page. 

![](https://static.gl-inet.com/docs/en/3/troubleshooting/ledadvanced.png)

![](https://static.gl-inet.com/docs/en/3/setup/slate/more_settings/advanced.jpg)

Then please choose **System** > **LED Configuration**.


