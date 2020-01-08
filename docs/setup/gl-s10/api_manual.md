# GL-S10 API Manual

|Version|Date|Commit|
|:----:|:----:|:----:|
|V1.0.0|2019-10-18|-|

## Introduction

GL-S10 is a BLE-WiFi gateway aimming to provide a simple method conversing Bluetooth Low Energy to WiFi. It supports GAP and GATT, can act as GATT server or GATT client. WiFi is used in STA mode, connect the superior router to access to the network. Also it can connect to network through Ethernet. It has a built-in standard MQTT client which could connect to any standard MQTT server.  Using MQTT, it can forward BLE messages to the cloud and on the other hand forward messages from cloud to the connected BLE device through BLE notify.  

![gl-s10 use case](https://static.gl-inet.com/docs/en/3/setup/gl-s10/gl-s10-use-case.jpg)

## Instructions
GL-S10 provide a BLE instructions set. Send commands and messages by writting GATT characteriscs , and get responses or messages from BLE notification.  
Following is the steps to use this gateway.

### 1. Scan and connect
The gateway act as a GATT server and broadcast itself once power-on. Its name is "GL-S10".
Firstly start the BLE scan and search the name "GL-S10" using your BLE device, then connect to it.

### 2. Enable the notify
The gateway BLE has two GATT services.   
One is for receiving commands and messages. Its service UUID is `000000FF-0000-1000-8000-00805F9B34FB`, has only one characteristic, UUID is `0000FF01-0000-1000-8000-00805F9B34FB`. Its characteristic property is `write`.  
Another is for notification. Its service UUID is `000000EE-0000-1000-8000-00805F9B34FB`, has only one characteristic, UUID is `0000EE01-0000-1000-8000-00805F9B34FB`. This characteristic property is `read|notify`.  
To get the notification, you have to enable the notify function of the second service.

### 3. Send commands or messages
Commands must be written in the first service (Service UUID `000000FF-0000-1000-8000-00805F9B34FB`, Character UUID `0000FF01-0000-1000-8000-00805F9B34FB`).   
And commands must be in special format.   
It begins with a byte `0xFE` , following is a byte "Opcode". It is operation code, corresponds to different operations.   
Next is "Data". It is the parameters for this command. Its length is not fixed and can be zero. *(Note that the "Data" must be converted to hexadecimal Ascci code array)* .  
At end is a byte `0xFF`.

Command Format

|FE|Opcode|Data|FF|
|----|----|----|----|

Opcode

|  Opcode  | Operation  | Need Data? | Description | 
|  :----:  | :----:  | :----:  | :----:  |
|  0x01  | SET_WIFI_CONFIG  | Y | Set WiFi ssid and password |
|  0x02  | START_WIFI  | N | Start WiFi | 
|  0x03  | STOP_WIFI  | N | Stop WiFi |
|  0x04  | RESTART_WIFI  | N | Restart WiFi |
|  0x05  | GET_NETWORK_STATE  | N | Get current network state, WiFi ssid and IP address |
|  0x06  | CLEAR_WIFI_CONFIG  | N | Clear WiFi ssid and password |
|  0x65  | SET_MQTT_URI  | Y | Set MQTT connect uri |
|  0x66  | START_MQTT  | N | Start MQTT |
|  0x67  | STOP_MQTT  | N | Stop MQTT |
|  0x68  | RESTART_MQTT  | N | Restart MQTT |
|  0x69  | GET_MQTT_CONFIG  | N | Get current MQTT uri |
|  0x6A  | CLEAR_MQTT_CONFIG  | N | Clear MQTT connent uri |
|  0x6B  | MQTT_SUBSCRIBE  | Y | Subscribe MQTT topic|
|  0x6C  | MQTT_UNSUBSCRIBE  | Y | Unsubscribe MQTT topic |
|  0x6D  | MQTT_PUBLISH  | Y | Publish MQTT message to broker|

Data Format (*For some special operation*)

|  Opcode  |  Operation  | Data Format  | Example | 
|  :----:  | :----:  | :----:  | :----:  |
| 0x01 | SET_WIFI_CONFIG  | ssid@password | GL-S1300-9cc@12345678 |
| 0x65 | SET_MQTT_URI  | username:password@host:port | admin:password@192.168.8.1:1107 |
| 0x6B | MQTT_SUBSCRIBE  | qos@topic | 0@test |
| 0x6C | MQTT_UNSUBSCRIBE  | topic | test |
| 0x6D | MQTT_PUBLISH  | qos@topic@data | 0@test@Hello world! |

*For example, write uint8array `fe 01 74 65 73 74 77 69 66 69 40 31 32 33 34 35 36 37 38 ff` to the first GATT service means set the wifi to one whose ssid is "testwifi", password is "12345678" .*

### 4. Get response and messages

Every command will return a response indicating whether it sucess or not. It is sent by BLE notification in the second service (Service UUID `000000EE-0000-1000-8000-00805F9B34FB`, Character UUID is `0000EE01-0000-1000-8000-00805F9B34FB`). The response format is similar with command format.

Response Format

| FE | Opcode |Result | FF |
| :----:  | :----:  | :----:  | :----: |

*"Opcode" is the command's Opcode it response to. "Result" is the command execution result, 0 means success and non-zero is failed. For example, get a notification `fe 01 00 ff` means command SET_WIFI_CONFIG excute successfully* 

Result format(*For some special response*)

|  Opcode  |  Operation  | Data Format  | Example |
|  :----:  | :----:  | :----:  |:----:  |
| 0x05 | GET_NETWORK_STATE | state@mode@IP address@ssid | 1@0@192.168.1.111@GL-S1300-9cc | 
| 0x69 | GET_MQTT_CONFIG | state@user:password@host:port | 1@admin:password@192.168.8.1:1107 |

*"state" is the connection state for network or MQTT, 1 means connected, 0 means disconnect. "mode" is the connection mode, 0 means connected by WiFi, 1 means by Ethernet.For example, get a notification `fe 05 31 40 30 40 31 39 32 2e 31 36 38 2e 31 2e 31 31 31 40 74 65 73 74 77 69 66 69 ff` means get the current network state: network is connected, using wifi, ip address is 192.168.1.111, ssid is "testwifi"*

MQTT message format

*Sometimes your BLE devices have to recieve messages from the cloud(MQTT broker). Here the gateway get the msg from the cloud and then send out by BLE notification*

| FE | Opcode | Data | FF |
| :----:  | :----:  | :----:  | :----: |
| FE | 6E | topic@msg | FF |

*For example, notification `fe 6e 74 65 73 74 40 48 65 6c 6c 6f 20 77 6f 72 6c 64 21 ff` means recieve a message "Hello world!" from topic "test".*

