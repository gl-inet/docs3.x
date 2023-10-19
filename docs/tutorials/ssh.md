# Using SSH

Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network. The best known example application is for remote login to computer systems by users. Sometime you need to have basic tools to SSH to the server. This guide is about how to SSH login to the GL.iNet routers.

---

## For Windows User

There are many tools, like Windows PowerShell, PuTTY, Bitvise.

### Using Bitvise

<iframe width="560" height="315" src="https://www.youtube.com/embed/7yVd5UkKJ74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Using PuTTY

#### 1. Download PuTTY

Go to the following webpage to download the latest PuTTY version:

[https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

#### 2. Install PuTTY

![install putty](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/PuTTY-Install-1.png){class="glboxshadow"}

![install putty](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/PuTTY-Install-2.png){class="glboxshadow"}

![install putty](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/PuTTY-Install-3.png){class="glboxshadow"}

![install putty](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/PuTTY-Install-4.png){class="glboxshadow"}

#### 3. Launch PuTTY 

Click **PuTTY** in Start Menu 

![launch putty](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/1522164842915.png){class="glboxshadow"}

You will see the following Configuration Window: 

![putty interface](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Setup-PuTTY-1.png){class="glboxshadow"}

Input Host Name (or IP address) `192.168.8.1`, keep Port as default `22`, select connection type: `SSH`,

Input `Your Session` in saved sessions, and `Save` your content.

![putty interface](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Setup-PuTTY-2.png){class="glboxshadow"}

Click `Open` at the bottom

![putty security alert](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Setup-PuTTY-3.png){class="glboxshadow"}

A security alert will pop-up, click `Yes`.

login as：`root`

Then input your admin password 

*Note: You need to use your password which you set up the router at the first time*

![ssh successfully](https://static.gl-inet.com/docs/router/en/3/tutorials/ssh/ar750s_ssh_successfully.jpg){class="glboxshadow"}

When you see above picture, that means you are now SSH login the router successfully.  

---

## For Linux/Mac User

The process on Linux and Mac OS are generally the same. Below we use Ubuntu as an example.

![ubuntu terminal](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Ubuntu-Login.png){class="glboxshadow"}

### 1. Launch Terminal

Click the `Terminal` icon to launch Terminal. Then, input the following command: 

`ssh root@192.168.8.1`

If you have ever connected to another router, host key verification failed may displayed as follow:

![remote host identification has changed](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/remove-ssh-keygen.png){class="glboxshadow"}

If this happens, run the command in the red box. Please copy the exact command which is displayed in your terminal.

`ssh-keygen -f "~/.ssh/known_hosts" -R "192.168.8.1"`

![ssh update known_hosts](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Removed-Host-keygen.png){class="glboxshadow"}

You may also encounter the following error when connecting:

```
Unable to negotiate with 10.0.0.1 port 22: no matching host key type found. Their offer: ssh-rsa
```
This error is due to a change in the Openssh package from version 8.8. To fix it, open the ~/.ssh/config file with a text editor (you can use for example Nano or Vim) and add the following lines:

```
host 192.168.8.1
    HostkeyAlgorithms +ssh-rsa
    PubkeyAcceptedAlgorithms +ssh-rsa
```
Make sure to change the host IP if it is not the default one.

### 2. Log In Router

Retry the SSH login command: 

`ssh root@192.168.8.1` 

![ssh login](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Ubuntu-sshin-router-1.png){class="glboxshadow"}

Type "**yes**"

![ssh login](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Ubuntu-sshin-router-2.png){class="glboxshadow"}

Input your router password: (you can set this password when you first connect to your router)

![ssh login successfully](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/1522205896331.png){class="glboxshadow"}

Finally, you login the router when the above message displayed.

## Troubleshooting

[No matching host key type found. Their offer: ssh-rsa](https://forum.gl-inet.com/t/can-no-longer-ssh-into-router-no-matching-host-key-type-found-their-offer-ssh-rsa/20915/12)
