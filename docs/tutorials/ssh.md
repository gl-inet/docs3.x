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

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/PuTTY-Install-1.png) 

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/PuTTY-Install-2.png) 

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/PuTTY-Install-3.png) 

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/PuTTY-Install-4.png) 

#### 3. Launch PuTTY 

Click **PuTTY** in Start Menu 

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/1522164842915.png) 

You will see the following Configuration Window: 

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Setup-PuTTY-1.png) 

Input Host Name (or IP address) `192.168.8.1`, keep Port as default `22`, select connection type: `SSH`,

Input `Your Session` in saved sessions, and `Save` your content.

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Setup-PuTTY-2.png)  

Click `Open` at the bottom

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Setup-PuTTY-3.png) 

A security alert will pop-up, click `Yes`.

login as：`root`

Then input your admin password 

*Note: You need to use your password which you set up the router at the first time*

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/SSH-in-2.png)  

When you see above picture, that means you are now SSH login the router successfully.  

---

## For Linux/Mac User

The process on Linux and Mac OS are generally the same. Below we use Ubuntu as an example.

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Ubuntu-Login.png)

### 1. Launch Terminal

Click the `Terminal` icon to launch Terminal. Then, input the following command: 

`ssh root@192.168.8.1` 

If you have ever connected to another router, host key verification failed may displayed as follow:

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/remove-ssh-keygen.png) 

If this happens, run the command in the red box. Please copy the exact command which is displayed in your terminal.

`ssh-kengen -f "~/.ssh/known_hosts" -R "192.168.8.1"`

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Removed-Host-keygen.png)

### 2. Log In Router

retry the SSH login command: 

`ssh root@192.168.8.1` 

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Ubuntu-sshin-router-1.png)  

Type "**yes**"

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Ubuntu-sshin-router-2.png)  	

Input your router password: (you can set this password when you first connect to your router)

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/1522205896331.png) 

Finally, you login the router when the above message displayed.
