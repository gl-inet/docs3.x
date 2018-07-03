# Modem Manager 

Modem manager for MiFi

Modem manager is the UI to control the modem on MiFi from firmware v2.27. The modem manager can be used to configure modem automatically, read/send SMS or issue AT commands.



Please insert Micro SIM card before you turn on the device.

![SIM](https://static.gl-inet.com/docs/en/2.x/setup/src/modem_manager/insert.jpg)



You will see `Modem Connection` in `Internet Status`. You can check different information of your GL-MiFi and configure your 3G/4G modem settings.

You can find the following information in `Modem Connection`:

**Model**: The model of your 3G/4G module.

**IMEI**: A unique number for your GL-MiFi router.

**Carrier**: The service provider of your SIM card.

![Modem Connection](https://static.gl-inet.com/docs/en/2.x/setup/src/modem_manager/modem_connection.jpg)



#Modem Tools

We have developed a modem tools for you to configure your 3G/4G modem in GL-MiFi easily. Please click `Modem Tools`.

![Modem Tools](https://static.gl-inet.com/docs/en/2.x/setup/src/modem_manager/modem_connection.jpg)



## Data

The configuration of Mobile Data should be auto detected by the modem manager. You can also change these settings manaually.

Input the correct information in order to activate the 3/4G modem.

- **Modem device**: Please choose `/dev/cdc-wdm0` if this modem support QMI, otherwise you need to choose `ttyUSB*`. There may be several `ttyUSB` from 1 to 3. You need to choose the correct one based on modem spec.
- **Service Type**: This is needed for 3G connection only. For 4G connection, this setting is not necessary.
- **APN**: This is the most important setting, check your ISP for the correct setting.
- **Dial Number**: Generally, it is a default value and you don't need to set it by yourself. However, if you have this info, please input it.
- **Pin, Username and Password:** Generally, these informations are not necessary for a unlocked SIM card. However, if you have a locked SIM card, please find these informations from your carrier.

![Modem Tools](https://static.gl-inet.com/docs/en/2.x/setup/src/modem_manager/modem_tool1.jpg)



## Send SMS

You will be able to use the SIM card in GL-MiFi to send message to others. 

**Note: only support English at this moment. ** 

![Modem Tools](https://static.gl-inet.com/docs/en/2.x/setup/src/modem_manager/send_message.jpg)



## Read SMS

You will be able to use the SIM card in GL-MiFi. Therefore, if someone send a message to the phone number of your SIM card, you can read it in `Read SMS`.

![Modem Tools](https://static.gl-inet.com/docs/en/2.x/setup/src/modem_manager/read_message.jpg)



## AT Tools

You can configure the 3G/4G modem by sending AT command to the router via `AT Tools`. You have to use the port **/dev/ttyUSB2** for all 3G/4G modules. We have pre-configured several AT commands that you can use directly in `Shortcut`.

![Modem Tools](https://static.gl-inet.com/docs/en/2.x/setup/src/modem_manager/at.jpg)



**Request IMEI**: Request International Mobile Equipment Identity of your MiFi

Correct result:

```
AT+CIMI 460010529708870 OK
```

Wrong result:

```
AT+CIMI ERROR
```



**Request QCCID**: Request the CCID number of your SIM card. If you get a number, it means that the connection of your SIM card is OK.

Correct result:

```
AT+QCCID+QCCID: 89860115851079757018 OK
```

Wrong result:

```
AT+CCIDI ERROR
```



**Request IMSI**: Request the International Mobile Subscriber Identity associated with your cellular network.

Correct result:

```
AT+CIMI 460010529708870 OK
```

Wrong result:

```
AT+CIMI ERROR
```



**Check Signal Quality**:

Correct result:

```
+CSQ: 21,99 OK 
```

This first number—“21” is the result. We usually get the value number is 18~23.

Wrong result:

```
AT+CSQ ERROR
```



**Reset Modem**: Reset the modem to its default state and erase all Data.

**Operator Name**: Get the Name of current network operator.

Correct result:

```
AT+COPS?+COPS: 0,0,"CHN-UNICOM (Example only)",6 OK
```

Wrong result:

```
AT+COPS? ERROR
```



There are other AT commands that you can input manually, please refer to Quectel_EC25&EC21_AT_Commands_Manual_V1.0.



#Discussions