# AT&T Network Fix Solution

<p>Some of our clients purchased GL-X750(Spitz) or GL-E750(Mudi) with EC25-AFFA module, and cannot use it on AT&T network. Here is a solution for your trying. </p>

Step 1:
Enter the AT instruction page and execute the command AT+QPRTPARA=3

<img src="https://static.gl-inet.com/docs/en/3/troubleshooting/ATT_Network_Fix/attfix0.png"/>

<img src="https://static.gl-inet.com/docs/en/3/troubleshooting/ATT_Network_Fix/attfix1.png"/>

Step 2:
Confirm the modem version and execute the corresponding instruction
For version R05, execute <b>at+qfopen="../../usr/fota_ip_a/update_report.ur",1</b>

For version R07, execute <b>at+qfopen="../../data/fota_ip_a/update_report.ur",1</b>

For EP06, execute <b>at+qfopen="../../data/fota_ip_a/update_report.ur",1</b>

<img src="https://static.gl-inet.com/docs/en/3/troubleshooting/ATT_Network_Fix/attfix2.png"/>

Step 3:
Execute AT command AT+CGDCONT=1,"IP","broadband"
Then, In modem manual Settings, modify your apn configuration to use broadband and click Apply

<img src="https://static.gl-inet.com/docs/en/3/troubleshooting/ATT_Network_Fix/attfix3.png"/>

Step 4:
Restart your router

