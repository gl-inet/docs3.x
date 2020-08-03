# SMS Forward

Starting from firmware version 3.105, users can forward SMS message from router to phone or email, please follow this guide to complete the settings.

![sms_forward](https://static.gl-inet.com/docs/en/3/app/sms_forward/4G_page.png)

## Settings 

![sms_forward](https://static.gl-inet.com/docs/en/3/app/sms_forward/settings.png)

**Phone**: The phone numbers that you want to forward the SMS messages to.

**Email**: The emails that you want to forward the SMS message to.

**Account**: The email account that you want to set as the sender.

**App Password**: The password for you to sign in your email on devices

**domain**: Domain of your email

**smtp**: The smtp address of your email server


## Add Forward Targets

You can add the forward targets here. For example, I add an American phone number and a Gmail address. The "+" could be omitted but remember to add the country code. Use "|" to divide the targets.

![sms_forward](https://static.gl-inet.com/docs/en/3/app/sms_forward/add.png)

There have no other settings for forwarding the sms to phone via message except inputting the phone number, but for email you need to do some additional settings.

## Setup Email Sender

If you want to forward the SMS via emails, you will need to set a sender account first, we suggest using Gmail.

*Some email account may not work with current firmware.*

![sms_forward](https://static.gl-inet.com/docs/en/3/app/sms_forward/sender.png)

For the APP Password, you need to login your google account and create it. (Need to enable two-steps verification first)

![sms_forward](https://static.gl-inet.com/docs/en/3/app/sms_forward/app_password.png)

## Verification Email

Once you setup the sender account, the router will send an email to your email account to make sure the setup has been completed.

![sms_forward](https://static.gl-inet.com/docs/en/3/app/sms_forward/verification.png)

Then the SMS that router received will be automatically forwarded to the phone numbers and email address that you set.

![sms_forward](https://static.gl-inet.com/docs/en/3/app/sms_forward/forward_email.png)

