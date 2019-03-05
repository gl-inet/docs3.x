UART シリアル接続
===================

接続
----------

シリアルピンは、DIYユーザーに最も使用されているピンです。以下のピクチャのように<a href="http://www.ebay.com/itm/PL-2303-USB-to-UART-TTL-adapter-/321407483336">USB UART</a>アダプターに接続することができます。
![UART](https://static.gl-inet.com/docs/en/2.x/dev/src/uart_serial.jpg)

Linux (ubuntu)/MAC
------------
LinuxまたはOSXで、USB UARTアダプタをコンピュータに接続すると、ドライバはすでにインストールされているはずです。デバイスが登録されているか確認してください。
```
$ls /dev/ttyUSB*
/dev/ttyUSB0
```
シリアルに接続ために、kermitが必要です。
```
$sudo apt-get install gkermit
```

kermitのコンフィグレーションファイルを作ることが必要です：　~/.kermrc　内容は：
```
set line /dev/ttyUSB0
set speed 115200
set carrier-watch off
set handshake none
set flow-control none
robust
set file type bin
set file name lit
set rec pack 1000
set send pack 1000
set window 5
```

rootを使ってデバイスに接続します：
```
$sudo kermit -c
Connecting to /dev/ttyUSB0, speed 115200
 Escape character: Ctrl-\ (ASCII 28, FS): enabled
Type the escape character followed by C to get back,
or followed by ? to see other options.
----------------------------------------------------

```

終了したら、`Ctrl-\`を押してから`c`を押してkermitを終了します。
Windows
---------
USB UARTアダプターをパソコンに接続するとき、ドライバーをインストールすることが必要かもしれません。

今はデバイスマネージャーでシリアルCOMポート（この例：`COM3`）を見つけることができます。

![Com](https://static.gl-inet.com/docs/en/2.x/dev/src/find-serial-port.jpg)

ターミナルソフトウエアをインストールします。<a href="http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html">putty</a>がおすすめです。COM ポートを`COM4`に、スビートを`115200`に、接続タイプを`Serial`に設定することが必要です。"Open"をクリックします。


![Putty](https://static.gl-inet.com/docs/en/2.x/dev/src/putty.png)

黒いWindows界面が開きます。今デバイスの電源を入れると、ボックスのコンソール出力が表示されます。


![Putty](https://static.gl-inet.com/docs/en/2.x/dev/src/putty1.png)

Domino Piのデュアルシリアル接続
-------------------------------
Piは、デュアルシリアル接続があります、もっと詳細な情報について、<a href='https://docs.gl-inet.com/en/2/domino/pi/serial/'>Domino Pi Serial</a>を参考してください。


