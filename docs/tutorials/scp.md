# Using SCP

SCP (secure copy) is a command-line utility that allows you to securely copy files and directories between two locations.

With SCP, you can copy a file or directory:

* From your local system to a remote system.
* From a remote system to your local system.
* Between two remote systems from your local system.

---

## For Windows User

* Using WinSCP

    WinSCP is an easy tool to edit files on the router, copy and download files or directory to router.

    1. Download WinSCP from here: [https://winscp.net/eng/download.php](https://winscp.net/eng/download.php) and install in your Windows.

    2. Connect to the router

        Run WinSCP, choose `SCP` as the protocol. If you didn't change the IP of the router it should be `192.168.8.1`. Please use your actual IP of the router. Port number should be `22`. Please `root` as the username and input your password. Then click `Login` button.

        ![winscp login](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/winscp1.jpg){class="glboxshadow"}

        After login, you have full control of the router.

        You can choose view, edit or transfer files/directories from/to the router.

        <div class="gl-lightbox" itemscope itemtype="http://schema.org/ImageGallery">
            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                <a href="https://static.gl-inet.com/docs/en/2.x/app/src/ssh/winscp2.jpg" itemprop="contentUrl" data-size="1198x751">
                <img src="https://static.gl-inet.com/docs/en/2.x/app/src/ssh/winscp2.jpg" itemprop="thumbnail" alt="winscp have login" loading="lazy" />
                </a>
            </figure>
        </div>

        For example, if you want edit firewall config, you can go to /etc/config and find firewall file. Then click your right key of your mouse, then choose **Edit**.

        <div class="gl-lightbox" itemscope itemtype="http://schema.org/ImageGallery">
            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                <a href="https://static.gl-inet.com/docs/en/2.x/app/src/ssh/winscp3.jpg" itemprop="contentUrl" data-size="800x504">
                <img src="https://static.gl-inet.com/docs/en/2.x/app/src/ssh/winscp3.jpg" itemprop="thumbnail" alt="winscp have login" loading="lazy" />
                </a>
            </figure>
        </div>

        Now you can edit the file content freely. Be careful not to mess up the settings.

        <div class="gl-lightbox" itemscope itemtype="http://schema.org/ImageGallery">
            <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                <a href="https://static.gl-inet.com/docs/en/2.x/app/src/ssh/winscp4.jpg" itemprop="contentUrl" data-size="1198x751">
                <img src="https://static.gl-inet.com/docs/en/2.x/app/src/ssh/winscp4.jpg" itemprop="thumbnail" alt="winscp edit file" loading="lazy" />
                </a>
            </figure>
        </div>

* Using SCP Command

---

## For Linux/Mac User
