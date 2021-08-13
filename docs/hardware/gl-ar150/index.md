# 	GL-AR150 シリーズ

AR150シリーズはAR150、AR150-Ext、AR150-PoEとAR150-Ext-PoEを含まれています。




## ハードウェア 仕様

|                         モデル | GL-AR150                                                     |
| ----------------------------: | :----------------------------------------------------------- |
|                           CPU | Atheros 9331 400MHz                                          |
|                        メモリ | DDRII 64MB                                                   |
|                    ストレージ | 16MB flash                                                   |
|       　　　  インターフェイス | 1 WAN、1 LAN、1 USB2.0、1 Micro USB (パワー)、1 リセットボタン、UART |
|                    　 周波数 | 2.4GHz                                                       |
|            　　　　　 転送速度 | 150Mbps                                                      |
|                 最大送信電力 | 18dBm                                                        |
|                   プロトコル | 802.11 b/g/n                                                 
| 　　外付けドライブフォーマット | FAT32/NTFS/EXT4/EXT3/EXT2                                    |
|              　  ウェブカメラ | MJPEG、 YUV (ファームウェア v2.27からサポートしません) |
|               　　   DIY機能 | UART、GPIO、3.3V & 5V パワーポート                            |
|     　　　　　　 外部アンテナ | あり 選択可能)                                               |
|         　   PoE モジュール |あり (選択可能)                                              |
|          　　　         電源 | 5V/1A                                                        |
|          　　　　　   消費電力 | <1.5W                                                        |
|         　　　   サイズ、重量 | 58mmX58mmX25mm、39g                                          |



##PCB ピンアウト

![gl-ar150 pcb pinout](https://static.gl-inet.com/docs/en/2.x/hardware/ar150/src/AR150-V4.4-PINOUT.jpg)

## RTC 設定


GL-AR150 miniルーターでRTC (リアルタイム制御)モジュールを使用することができます。

![gl-ar150 use RTC module](https://static.gl-inet.com/docs/en/2.x/hardware/ar150/src/rtc_1200x1200.jpg)

### カーネルモジュールのインストール

弊社のファームウェアを使ったら、`opkg`をインストールすればいいです。

```
opkg update
opkg install kmod-i2c-gpio-custom
opkg install kmod-rtc-sd2068
```

自分のファームウェアをコンパイルほしいなら、以下のパッケージを選択してください。

```
Kernel modules  --->  I2C support  --->  kmod-i2c-gpio-custom
Kernel modules  --->  Other modules  --->  kmod-rtc-sd2068
```

### ソフトウェア

RTCで使用しているGPIOは以下の通り：

`SDA` <--> `GPIO1`

`SCL` <--> `GPIO17`

カーネルモジュールを挿入して接続する必要があります。

```
insmod i2c-gpio-custom.ko bus0=0,1,17
echo sd2068 0x32 > /sys/bus/i2c/devices/i2c-0/new_device
```

RTCモジュールから時間を読み出す

```
hwclock -r
```

RTCモジュールの時間をマイクロルータに同期します。

```
hwclock -s
```

マイクロルータの時間をRTCモジュールに書き込みます。

```
hwclock -w
```





## PoE 接続


GL-AR150 マイクロルーターの特定PoEモジュールがあります。AR150ルーターのPoEバージョンで捜せます。

一回に一つの電源接続方法しか利用できません。PoE（イーサネット給電）あるいはmicro USB電源を利用します。互換性のある受動的または能動的なPoE入力器は48V 802.3af/atでなければならない。

PoEは***WAN ポート***使用に限ります。



![AR150 PoE Connection](https://static.gl-inet.com/docs/en/2.x/hardware/ar150/src/AR150-PoE_setup.png)



PoE セットアップサンプル：

例のPoEはマーケットで広く使われ、価格もとても安いです。インターネットケーブルを`Data In`ポートに挿入して、`Data & Power Out`ポートをAR150 PoEの`WAN`ポートに接続してください。

***PoEバージョン限り***

![PoE switch and Ethernet cable](https://static.gl-inet.com/docs/en/2.x/hardware/ar150/src/white_1000x1000_PoE_2.jpg) 







