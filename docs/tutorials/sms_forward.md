# SMS Forward

Since version 3.105, users can forward SMS message from router to phone or email.

Note: This feature only works on GL.iNet 4G models with original 4G LTE module, not support with other modules or any other USB modules. Currently support GL-MiFi, GL-X750 (Spitz), GL-X1200 (Amarok), GL-XE300 (Puli), GL-X300B (Collie). 

Please follow this guide to complete the settings.

![sms_forward](https://static.gl-inet.com/docs/en/3/tutorials/sms_forward/4g_page.png){class="glboxshadow"}

![sms_forward](https://static.gl-inet.com/docs/en/3/tutorials/sms_forward/4g_modem_sms_forward.png){class="glboxshadow"}

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

![sms_forward](https://static.gl-inet.com/docs/en/3/tutorials/sms_forward/add.png){class="glboxshadow"}

There have no other settings for forwarding the sms to phone via message except inputting the phone number, but for email you need to do some additional settings.

**Please test first if router can send SMS to other phones, some maynot work in specific environment.**

## Setup Email Sender

If you want to forward the SMS via emails, you will need to set a sender account first, please follow the guide below. For other email provider, please search their smtp settings.

??? "Gmail"

    For Gmail, you need to login your google account and create an **App Passwords**. Please check the official guide [Sign in with App Passwords](https://support.google.com/accounts/answer/185833?hl=en){target="_blank"}. You need to enable two-steps verification before create the App Passwords.

    Both 465 and 587 ports are useable.

    Example:

    ![gmail smtp](https://static.gl-inet.com/docs/en/3/tutorials/sms_forward/gmail.png){class="glboxshadow"}

??? "Outlook"

    For Outlook, you can use password directly without any setting, and it supports port 587. Please chck the official guide [POP, IMAP, and SMTP settings for Outlook.com](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-for-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040){target="_blank"}

    Example:

    ![outlook smtp](https://static.gl-inet.com/docs/en/3/tutorials/sms_forward/outlook.png){class="glboxshadow"}

??? "iCloud"

    For iCloud, you need to create an app-specific passwords for login, and it supports port 587. Please refer to the official guide [iCloud Mail server settings for other email client apps](https://support.apple.com/en-hk/HT202304){target="_blank"} and [Generate an app-specific password](https://support.apple.com/en-gb/HT204397){target="_blank"}.

    Example:

    ![icloud smtp](https://static.gl-inet.com/docs/en/3/tutorials/sms_forward/icloud.png){class="glboxshadow"}

??? "Yahoo"

    For Yahoo, you need to set an app password for login, and it supports both port 465 and 587. Please refere to the official guide [POP access settings and instructions for Yahoo Mail](https://help.yahoo.com/kb/SLN4724.html){target="_blank"} and [Generate and manage third-party app passwords](https://help.yahoo.com/kb/SLN15241.html){target="_blank"}.

    Example:

    ![yahoo smtp](https://static.gl-inet.com/docs/en/3/tutorials/sms_forward/yahoo.png){class="glboxshadow"}

## Verification Email

Once you setup the sender account, the router will send an email to your email account to make sure the setup has been completed.

**If you didn't receive the mail, please check your account setting and apply again.**

![sms_forward](https://static.gl-inet.com/docs/en/3/tutorials/sms_forward/verification.png){class="glboxshadow"}

Then the SMS that router received will be automatically forwarded to the phone numbers and email address that you set. The mail subject depends on your setting.

![sms_forward](https://static.gl-inet.com/docs/en/3/tutorials/sms_forward/forward_email.png){class="glboxshadow"}

**Note**: Each emailer may has a limit on SMTP, limiting the number of emails that can be sent per day. Please consult with your service provider.
