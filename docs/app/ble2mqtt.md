# BLE MQTT Bridge

## Introduction

Bluetooth Low Energy (BLE) is widely used for smart home, wearable and IoT sensors. This guide provide a simple but useful tool that send your BLE data to MQTT servers, which is the underling mechanism for popular IoT solution. 

In this guide we will introduce two GL.iNet BLE gateway, `GL-X750 Spitz`	and `GL-S1300 convexa S` which has built-in BLE modules and how to use them to forward your BLE data to the cloud based on MQTT protocol, including GL.iNet `GoodCloud` and `AWS IoT`. 



## Hardware Required

Both GL-X750 and GL-S1300 comes with a Silicon BLE 5.0 module with the following specs. It connects to the main board using `UART`. The same module support BLE and Zigbee. However you need to change the firmware on the module (not the gateway). There is no way to change the firmware from BLE to Zigbee or vice versa on the air. So you have to select the correct module when you purchase the correct product.

| Item                  | Specification                                               |
| --------------------- | ----------------------------------------------------------- |
| Product Name          | Bluetooth & Zigbee Module                                   |
| Model                 | GL-EFR32S/GL-EFR32H                                         |
| CPU                   | Silicon Labs EFR32MG1P232F256GM48-CR0                       |
| Protocol              | Support Zigbee、BLE                                         |
| Storage               | RAM:32KB/ Flash:256KB                                       |
| Tx Power              | 19 dBm                                                      |
| Antenna               | On-board antenna (external antenna IPEX reserved)           |
| Internal Interface    | 17*GPIO (could be configured to UART、SPI、JTAG、I2C, etc.) |
| Module Interface Type | Stamp interface/Pin interface                               |
| Supply Voltage        | 3.3 V                                                       |
| Power Consumption     | support low power consumption, standby power＜50uW          |
| Module Dimenstion     | 25mm*20mm                                                   |
| Operation Temperature | 0℃~75℃                                                      |
| Storage Temperature   | -40℃~85℃                                                    |
| Operating Humidity    | 10%~90%                                                     |

You must use the gateway with BLE devices.

There are two kinds of BLE devices. One kind of BLE device use beacons to send data, e.g a BLE thermometer. Another kind of device need to pair first, e.g. BLE smart watch. 

For BLE beacon device, you can just scan the beacon and get the data. The data is generally encrypted. It is depends on you to decrypted the data. You can decrypt locally on the gateway or just send the encrypted data to your cloud to decrypt there. 

For BLE devices that needs to pair first, you need to know how they can pair with the gateway. Generally this is provided by the device maker. There are a lot of devices that accept standard connection so you can pair without problem.

A list of compatible devices will be collected and posted here.

***TBD: a list of compatible BLE device.***

## BLE Tools

Both GL-X750 and GL-S1300 come with OpenWrt and our BLE tools. 

In your current firmware for S1300, there may be a BLE tool which comes with a UI. But we are further developing this and you need to use the new BLE tool.

```shell
root@GL-S1300:~# opkg remove gl-ble-daemon gl-ble-api
root@GL-S1300:~# opkg install bletool
Installing bletool (1-2) to root...
Downloading http://download.gl-inet.com/releases/packages-3.x/ipq40xx/glinet/bletool_1-2_ipq806x.ipk.
Configuring bletool.
```

Now you can use the bletool to test your BLE function.

```shell
root@GL-S1300:~# bletool on
root@GL-S1300:~# bletool discovery_type 1 1
OK
root@GL-S1300:~# bletool discovery 1 1 0
OK
af000045d1e43df801ff1f0201061bff570100a0c931e781473f364824a724d7d3380402f83de4d1  4500
af040045d1e43df801ff0f0a094d492042616e6420320302e0fe
d0009238c444f07001ff0e02011a0aff4c001005031802dcbd
d0049238c444f07001ff00

```

You can find a detailed documentation about `bletool` ***here***. 



## MQTT

MQTT is a machine-to-machine (M2M)/"Internet of Things" connectivity protocol.  You can find official document in [mqtt.org](mqtt.org).

This guide will give you a step to step guide of how to send message to GL.iNet GoodCloud and AWS.

### Send Data to GoodCloud

GoodCloud is our Cloud based on MQTT under development. Now you can use it for demo purpose related to BLE. You can contact us if you have any suggestions by sending an email to admin@goodcloud.xyz. 

All you need to do is to register an account in GoodCloud.xyz and bind your X750 or S1300 to your account.

**Register your device on [GoodCloud.xyz](https://www.goodcloud.xyz)**

Follow [this docs](https://docs.gl-inet.com/en/3/app/cloud/#setup) to add devices on GoodCloud. 



**Where is the config file**

The config file for cloud is in UCI. You will need to modify this directly if you want to connect to your own MQTT cloud.

```shell
root@GL-S1300:~# cat /etc/config/glconfig
....
config service 'cloud'
        option enable '1'
        option check_status '1'
        option serverzone 'gslb-jp.goodcloud.xyz'
        option username 'your name'
        option email 'your@email.address'
        option bindtime '1558928701947'

```



**Forward data to GoodCloud**

To forward data to GoodCloud, you can use simple shell script. 

After your device is connected to your cloud account, you can [SSH](https://docs.gl-inet.com/en/3/app/ssh/) to the router, try the following command.  

   ```shell
   root@GL-S1300:~# ubus call mqtt pub '{"api":"/user/data", "data":"hello from S1300"
   }'
   {
           "code": 0
   }
   root@GL-S1300:~#
   
   ```

Login the GoodCloud， https://www.goodcloud.xyz，find the registered device in"device list", click the device name and you will find your message in timeline.

   ![](http://static.gl-inet.com/docs/en/3/app/BLE_bridge/find-device.png)

   ![](http://static.gl-inet.com/docs/en/3/app/BLE_bridge/find-log.jpg)

   



### Send Data to AWS IoT

Amazon AWS IoT is a good choice for business applications. AWS seems to have good security and privacy protection. Here we will give an example of how to send your data to AWS IoT platform. It is a little complicated but still OK for IT specialist. 

####1. Setting up your AWS IoT environment 

1) On the **Welcome to the AWS IoT Console** page, in the navigation pane, choose **Manage->Things** , then **Register a thing**. 

![](http://static.gl-inet.com/docs/en/3/app/BLE_bridge/image001.png)

2) On the **Creating AWS IoT things** page, choose **Create a single thing**.

![](http://static.gl-inet.com/docs/en/3/app/BLE_bridge/image002.png)

3) On the **Create a thing** page, in the **Name** field, type a name for your thing, such as **x750**. Choose **Next**.

![](http://static.gl-inet.com/docs/en/3/app/BLE_bridge/image003.png)

4) On the **Add a certificate for your thing** page, choose **Create certificate**. This generates an X.509 certificate and key pair.

![](http://static.gl-inet.com/docs/en/3/app/BLE_bridge/image004.png)

5) On the **Certificate created!** page, download your public and private keys, certificate, and root certificate authority (CA):

- Choose **Download** for your certificate.

- Choose **Download** for your private key.

- Choose **Download** for the Amazon root CA. This will display a new web page. Choose **RSA 2048 bit key: Amazon Root CA 1**. This opens another web page with the text of the root CA certificate. Copy this text and paste it into a file named `Amazon_Root_CA_1.pem`.

  Most web browsers save downloaded files into a Downloads directory. You will copy these files to a different directory when you run the sample applications. Choose **Activate** to activate the X.509 certificate, and then choose **Attach a policy**.


![](http://static.gl-inet.com/docs/en/3/app/BLE_bridge/image005.png)

The **RSA 2048 bit key: Amazon Root CA1** download web page:

![	](http://static.gl-inet.com/docs/en/3/app/BLE_bridge/image007.png)



6) Active your thing

Back to the previous site, click "**Activate**", then click "**Done**". 

![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image008.png)

**2. Attach Policy**

1) After you register your thing, you will need to create and attach a new **policy** to the **certificate**.![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image009.png)



2) Enter a Name for the policy,such as x750_policy, then **Advance mode**

![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image010.png)

3) Delete the automatically created policy code, then paste the policy below. 

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "iot:Publish",
        "iot:Subscribe",
        "iot:Connect",
        "iot:Receive"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    }
  ]
}
```

4) **Create** Policy after you pasted policy code. 

![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image012.png)



5) On the left side, Secure --> Certificates, Select the certificate you just created, Actions
--> Attach policy

![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image013.png)

6) Chose the policy you created(x750_policy) and choose **Attach**.

![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image014.png)



####2. Config GL.iNet devices to connect to AWS IoT

**1) Upload your certificate to the router** 

Rename the downloaded certificate files :

AmazonRootCA1.pem --> root_CA.crt

xxxxxxxxxx.private.pem.key --> client.key

xxxxxxxxxx. certificate.pem.crt --> client.crt

Windows User use [SSH and WinScp](https://docs.gl-inet.com/en/3/app/ssh/) to transfer these three certificate files to `/etc/aws/` on router,  please create new folder if you cannot find `/etc/aws/`.

```shell
mkdir /etc/aws/
```

**2) Update mqtt package on GL.iNet routers.** 

You can check if your router comes with updated MQTT package. If it is not, please upgrade it if you want to use AWS.

Download the updated [mqtt package]( https://1drv.ms/u/s!AgvZCliGPjk-saQ_3HbKiRGo_WsSSQ), file name is '**gl-mqtt_3.0.37-1_mips_24kc.ipk**‘

Use WinSCP/SSH to transfer the package to /tmp/ , then delete the old package. 

```shell
opkg remove gl-mqtt --force-depends
```

Then install the package:

```shell
opkg install gl-mqtt_3.0.37-1_mips_24kc.ipk
```

**3) Setup config file for your router**

Edit  `/etc/config/glconfig ` 

Add the following code to your **glconfig** file.

```shell
config service 'cloud'                                                   
        option enable '1'                                               
        option sub_topic '/a1rLNyG2VK5/mqtt_demo/user/get'               
        option pub_topic '/sys/a1rLNyG2VK5/mqtt_demo/thing/event/property/post' 
        option service_pride '2'                                         
        option address 'ssl://xxxxxxxxxxxxxx-ats.iot.us-east-1.amazonaws.com:8883'
        option clientid 'iotconsole-xxxxxxxxxxxxxx'   
	    option log '1'
```

The sample of glconfig file: 

![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image016.png)

If you already setup GoodCloud on router before, just add the code at the end of **config service 'cloud'**

![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image017.png)

```shell
option log '1'
```

 must be contained in the config file.

Note**

The topic ARN follows this format:

```shell
arn:aws:iot:*your-region*:*your-aws-account*:topic/*<your/topic>*
```

For example:

```shell
arn:aws:iot:us-east-1:123456789012:topic/my/topic
```

**Topics**

The message broker uses topics to route messages from publishing clients to subscribing clients. The forward slash (/) is used to separate topic hierarchy.

**Note**

We do not recommend using personally identifiable information in your topics.

The following table lists the wildcards that can be used in the topic filter when you subscribe.

**Topic Wildcards**

| Wildcard | Description                                                  |
| :------- | :----------------------------------------------------------- |
| #        | Must be the last character in the topic to which you are subscribing. Works as a wildcard by matching the current tree and all subtrees. For example, a subscription to `Sensor/#` receives messages published to `Sensor/`, `Sensor/temp`, `Sensor/temp/room1`, but not the messages published to `Sensor`. |
| +        | Matches exactly one item in the topic hierarchy. For example, a subscription to `Sensor/+/room1` receives messages published to `Sensor/temp/room1`,`Sensor/moisture/room1`, and so on. |

**4) HTTP: API Endpoints add to router config file** 

The message broker supports clients connecting with the HTTP protocol using a REST API. Clients can publish by sending a POST message to `*<AWS IoT Endpoint>*/topics/*<url_encoded_topic_name>*?qos=1"`.

![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image019.png)



![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image020.png)





![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image021.png)





![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image022.png)



![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image023.png)





![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image024.png)





![](http://static.gl-inet.com./docs/en/3/app/BLE_bridge/image025.png)





## Application and Demo 

### Read BLE Thermal Sensor

The following demo show how to read data from a thermal sensor, pack the data in JSON format and  send to the GoodCloud.

```shell
#!/usr/bin/sh
. /usr/share/libubox/jshn.sh
while true
do
sleep 5
bletool on
bletool discovery_type 1 1
bletool discovery 1 1 0 | awk '/0d09536d6172745f426561636f6e02/{print $0; exit}' >
/tmp/blesniffer.log
bletool end_procedure
adv_data=`awk '{print $1}' /tmp/blesniffer.log`
date=`date +"%Y%m%d%H%M%S"`
json_init
json_add_string "api" "/user/data"
json_add_object "data"
json_add_string "date" "$date"
json_add_string "advertising data" "$adv_data"
json_close_object
json_close_object
data=`json_dump`
ubus call mqtt pub "$data"
rm /tmp/blesniffer.log
done
```

