# SMS Forward

Since version 3.105, users can forward SMS message from router to phone or email.

Note: This feature only works on GL.iNet 4G models with original 4G LTE module, not support with other modules or any other USB modules. Currently support GL-MiFi, GL-X750 (Spitz), GL-X1200 (Amarok), GL-XE300 (Puli), GL-X300B (Collie). 

Please follow this guide to complete the settings.

![sms_forward](https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/4g_page.png){class="glboxshadow"}

![sms_forward](https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/4g_modem_sms_forward.png){class="glboxshadow"}

## Settings 

**Phone**: The phone numbers that you want to forward the SMS messages to.

**Email**: The emails that you want to forward the SMS message to.

**Account**: The email account that you want to set as the sender.

**Password**: The password for you to sign in your email account on devices.

**smtp**: The smtp address of your email server.

**protocol**: Encryption protocol.

**Subject**: Forward email's subjects.

## Add Forward Targets

You can add the forward targets here. For example, I add an American phone number and a Gmail address. The "+" could be omitted but remember to add the country code. Use "|" to divide the targets.

![sms_forward](https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/add.png){class="glboxshadow"}

There have no other settings for forwarding the sms to phone via message except inputting the phone number, but for email you need to do some additional settings.

**Please test first if router can send SMS to other phones, some maynot work in specific environment.**

## Setup Email Sender

If you want to forward the SMS via emails, you will need to set a sender account first, please follow the guide below.


<details>
  <summary>Gmail</summary>
  <p>For Gmail, there are two kinds if password to login as the mail sender, password or App password.</p>
  <p>For the APP Password, you need to login your google account and create it. (Need to enable two-steps verification first)</p>
  <p><img alt="sms" src="https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/app_password.png"> </p>
  <p>If you want to use origin password, you need to enable "Less Secure App Access", which is conflict with two-steps verification.</p>
  <p><img alt="sms" src="https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/less_secure.png"></p>
Both 465 and 587 ports are useable.
  <p>Example:</p>
  <p><img alt="sms" src="https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/gmail.png"></p>
</details>


<details>
  <summary>Outlook</summary>
  <p>For Outlook, you can use password directly without any setting, and it supports port 587.</p>
  <p>Example:</p>
  <p><img alt="sms" src="https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/outlook.png"></p>
</details>


<details>
  <summary>iCloud</summary>
  <p>For iCloud, you need to set an app password for login, and it supports port 587.</p>
  <p><img alt="sms" src="https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/icloudapp.png"></p>
  <p>Example:</p>
  <p><img alt="sms" src="https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/icloud.png"></p>
</details>


<details>
  <summary>Yahoo</summary>
  <p>For Yahoo, you need to set an app password for login, and it supports both port 465 and 587.</p>
  <p><img alt="sms" src="https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/yahooapp.png"></p>
  <p>Example:</p>
  <p><img alt="sms" src="https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/yahoo.png"></p>
</details>


## Verification Email

Once you setup the sender account, the router will send an email to your email account to make sure the setup has been completed.

**If you didn't receive the mail, please check your account setting and apply again.**

![sms_forward](https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/verification.png){class="glboxshadow"}

Then the SMS that router received will be automatically forwarded to the phone numbers and email address that you set. The mail subject depends on your setting.

![sms_forward](https://static.gl-inet.com/docs/router/en/3/tutorials/sms_forward/forward_email.png){class="glboxshadow"}
