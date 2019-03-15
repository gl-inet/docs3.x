# SSH と WinSCPの使用


SSH と WinSCPは、あなたがミニルーターでもっと機能を使いたいなら基本的なツールです。

Secure Shell（セキュアシェル・SSH）とは、セキュリティで保護されていないネットワーク上でネットワークサービスを安全に運用するための暗号化ネットワークプロトコルです。一番有名な例は、ユーザーがコンピュータシステムへのリモートログインです。場合によっては、サーバーにSSH接続するための基本的なツールが必要になります（たとえば、Shadowsocksサーバーをセットアップする必要がある場合）。 このガイドはGL.iNetルーターにSSHログインする方法です。


WinSCPとは、SSHプロトコルの上で実行し、ルーターに接続し、ファイルを編集するためのWindowsツールです。Linuxで`scp`も使いできます、でもwindows上でWinSCPが一番良いツールです。


---

## 　WindowsユーザーのルーターへのSSH

### 1. PuTTYをダウンロード・インストール
  
下記のウェブページに行って最新のPuTTYバージョンをダウンロードする：

https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html

### 2. PuTTYをインストール
PuTTYのインストールプロセスは英語で表示されます。

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/PuTTY-Install-1.png) 



![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/PuTTY-Install-2.png) 



![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/PuTTY-Install-3.png) 



![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/PuTTY-Install-4.png) 



### 3. PuTTYを起動

**PuTTY** をクリックしてください。

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/1522164842915.png) 



次の設定ウィンドウが表示されます：

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Setup-PuTTY-1.png) 

Host Name 「or IP address」に `192.168.8.1`を入力し、デフォルト「Port」 `22`をそのままにいって、「connection type」を`SSH`に選択します。

Saved Sessionsで`あなたの設備`を入力し, そして`Save`をクリックして設定を保存します。

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Setup-PuTTY-2.png)  

底部の`Open`をクリックします

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Setup-PuTTY-3.png) 

セキュリティの警告が表示されたら、「はい」をクリックします

login as：`root`を入力します

password：あなたのパスワードを入力します

*注意：ルーターで設定した最初のパスワードを入力してください。*

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/SSH-in-2.png)  

以上のような画像が見るとき、あなたがルーターにSSHログインのが成功しています。


---

## WinSCP

Windowsを使う場合、WinSCPはルーターでファイルを編集することにはるかに簡単なツールです。


### 1. WinSCPダウンロード

 https://winscp.net/eng/download.php でWinSCPをダウンロードし、あなたのWindowsにインストールします。


### 2. ルーターに接続


WinSCPを実行し、プロトコルで`SCP`を選択します。あなたがルーターのIPアドレスを変更させない場合は、「Host name」が192.168.8.1はずです。「Port number」が`22`はずです。「User name」でrootを入力し、「Password」でルーターのパスワードを入力し、「Login」をクリックします。

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/winscp1.jpg)

ログイン後、あなたは今ルーターのコントロール権限を持っています。


あなたはルーターとデバイス間のファイルの表示、編集または転送ができます。


![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/winscp2.jpg)

例えば、あなたがファイアウォール設定ファイルを編集したいなら、/etc/config に行ってfirewallファイルを見つけて、マウスの右キーをクリックして、**編集**をクリックします、そしてファイルを編集できます。

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/winscp3.jpg)

今は自由にファイルを編集することができます、設定の変更を注意してください。
![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/winscp4.jpg)



---

## Linux/MacユーザーのルーターへのSSH

Linux と Mac OSのプロセスは大体同じです、以下では例としてUbuntuを使用します。
![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Ubuntu-Login.png)

 

### 1. ターミナルを起動

ターミナルを起動するために `ターミナル`アイコンをクリックしてください。 次に、以下のコマンドを入力してください：

`SSH root@192.168.8.1` 

他のルータに接続したことがある場合は、ホストキーの確認に失敗したことがあります

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/remove-ssh-keygen.png) 

このような場合は、下記のコマンドを実行してください。 端末に表示されている正確なコマンドをコピーしてください。

`ssh-kengen -f "~/.ssh/known_hosts" -R "192.168.8.1"`

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Removed-Host-keygen.png)



### 2. ルーターログイン

ssh ログインコマンドを再試行してください。

` ssh root@192.168.8.1` 

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Ubuntu-sshin-router-1.png)  

"**yes**"を入力します

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/Ubuntu-sshin-router-2.png)  	

あなたのルーターパスワードを入力します

![](https://static.gl-inet.com/docs/en/2.x/app/src/ssh/1522205896331.png) 

最後に、ログイン成功です。