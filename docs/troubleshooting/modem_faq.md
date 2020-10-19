# Modem FAQ

This is the FAQ for Modem connection about GL-X750, GL-MiFi, GL-X1200, GL-E750, GL-XE300, GL-AP1300 when using the Internal (Quectel) modems. 

This does not work with external USB modems. 



## Q1: SIM card not detected

The SIM card does not support hot plug and play. Make sure that you have inserted the SIM card before powering the 4G router on. 

This prompt indicates that there is a problem with the contact between SIM card and card slot. You can try the following methods:

1. If you inserted the SIM card after the router is powered on, reboot the 4G router or perform a "Modem Reset" from the Router's UI.
2. Check that you have inserted the SIM card in the correct direction.
3. Add a piece of paper to the non-contact surface of SIM card inside of the SIM slot so that the SIM card is contacting well inside the slot. 
4. Try another SIM card.
5. Check whether the SIM card slot is damaged and contact customer service through the purchase platform.



## Q2: SIM card not registered

1.  Enter the AT instruction page and execute the command **AT+QPRTPARA=3**

   <img src="https://static.gl-inet.com/docs/en/3/troubleshooting/ATT_Network_Fix/attfix0.png"/>

   

   <img src="https://static.gl-inet.com/docs/en/3/troubleshooting/ATT_Network_Fix/attfix1.png"/>

   Wait for about 30 seconds to check whether the device is registered with the network.

   

2. Some SIM cards need to fill in the correct APN to register the network. In this case, please ignore the prompt information on the page, enter the manual setting page and fill in the correct APN, and click apply.

3. Some SIM cards needs to fill a correct PIN code to register the network. In this case, please choose set up manually, choose ttyUSB3 and input your pin code. Please note: QMI mode does not work with a PIN code. 



### How to get your APN

Different types of SIM cards  may have different APN settings, so you can check with your local operator for the correct APN settings.

## Q3: Auto Setup failed

Auto Setup will try all the possible methods to build a connection. In case Auto Setup fails to connect, please try manually setting and selecting the appropriate connection protocol.

<img src="https://static.gl-inet.com/docs/en/3/troubleshooting/modem_faq/manual_2.png"/>



### Use the QMI protocol

Select device as **/dev/cdc-wdmX** and fill in the correct [APN](modem_faq.md#how-to-get-your-apn).

<img src="https://static.gl-inet.com/docs/en/3/troubleshooting/modem_faq/qmi.png"/>



### Use PPPD dial

Select device as **/dev/ttyUSBX** and fill in the correct  [APN](modem_faq.md#how-to-get-your-apn). X is a number, and in general, select the port with the largest value.

For **MIFI,E750,X750,X300B**, select **ttyUSB3**.

For **XE300** and **AP1300**, select **ttyUSB4**.

<img src="https://static.gl-inet.com/docs/en/3/troubleshooting/modem_faq/pppd.png"/>



### Use the QCM protocol

QCM protocol is supported in versions after 3.200. Please select device as **/dev/cdc-wdmX**, fill in the correct  [[APN](modem_faq.md#how-to-get-your-apn)) settings, and then click More to select protocol as QCM

<img src="https://static.gl-inet.com/docs/en/3/troubleshooting/modem_faq/qcm.png"/>



## Q4: Data throughput is low

If you have successfully set up the 4G router but the data throughput is low, for example, when testing with speedtest.net, here is what you can try to dragonize the problem. 

Please note: generally the 4G router cannot beat your smartphone in speed test. This is because the modern smartphone uses a different design which is equipped with much higher grade of modems. For example, Samsung S10 has a Cat 20  modem and iPhone 11 has a Cat 19 modem. They are 6 times faster in specs than a Cat 6 Quectel EP06 modem.

1. Try to use [QMI](modem_faq.md#use-the-qmi-protocol) or [QCM](modem_faq.md#use-the-qcm-protocol) protocol instead of using ttyUSB mode. 

2. Ask your carrier to make sure the  [APN](modem_faq.md#how-to-get-your-apn)Settings are correct. Some carriers use different APNs which may yield different speed. 

3. The signal may not be good. Click Cell Info to check the signal-related parameters, such as RSSI, RSRP, RSRQ,SINR, etc. Please refer to the [wiki](https://wiki.teltonika.lt/view/Mobile_Signal_Strength_Recommendations#4G_.28LTE.29) for parameter range determination. If the device's signal is poor, try moving the device to another location and check that the antenna is properly connected.

   <img src="https://static.gl-inet.com/docs/en/3/troubleshooting/modem_faq/cells_info.png"/>

   <img src="https://static.gl-inet.com/docs/en/3/troubleshooting/modem_faq/cells.png"/>

   

   Bandwidth also affects the rate. For example, when routers were working on Band5, the band5 supported only 10M bandwidth at most, and routers acquired a lower rate.

   In LTE mode, the bandwidth of each band is as follows, which is a parameter that 3GPP has already defined, so there is no way to change it.

   <img src="https://static.gl-inet.com/docs/en/3/troubleshooting/modem_faq/bandwidth.png"/>
   
   



## Q5: EP06 cannot work at 4G+

Some customers may encounter the situation that the mobile phone can work in 4G+ mode, but the router using EP06 cannot work in 4G+ mode. This may be because the band support of EP06 is different from that of mobile phone.

For EP06-E, the following band combinations are supported

<img src="https://static.gl-inet.com/docs/en/3/troubleshooting/modem_faq/ep06e_ca_band.png"/>

For EP06-A, the following band combinations are supported

<img src="https://static.gl-inet.com/docs/en/3/troubleshooting/modem_faq/ep06a_ca_band.png"/>

