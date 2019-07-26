# DLNAサーバー

弊社のルーターがDLNAに対応、DLNAサーバーをセットすることができます。しかし、これはデフォルト機能ではありません、ソフトパッケージをインストールすることが必要です。

DLNAとは、Digital Living Network Alliance(デジタルネットワークアライアンス)の略称で、家庭内の家電やAV機器、通信機器がLANを利用して相互につながったり、遠隔操作できるための「ガイドライン」の事を意味しています。

この機能を使って、スマートＴＶでルーターの外付けストレージの映画を放送することができます。

対応デバイス：GL-AR750S GL-AR750 GL-MT300N-V2 GL-AR300Mシリーズ GL-AR150シリーズ　GL-MiFi GL-X750

## パッケージインストール

1.ソフトバーグに進め、更新をクリックして、minidlnaを入力します。

2.luci-app-minidlnaをインストール

![install](https://static.gl-inet.com/docs/jp/3/app/dlnaserver/1.png)

3.miniDLNAをインストール

![install2](https://static.gl-inet.com/docs/jp/3/app/dlnaserver/2.png)

## minidlnaを確認

DLNAを使用する前に、Luci界面に進め、minidlnaをチェック。

1.高級機能に進め

2.minidlnaに進め

![minidlna](https://static.gl-inet.com/docs/jp/3/app/dlnaserver/3.png)

3.状態を確認

![minidlna](https://static.gl-inet.com/docs/jp/3/app/dlnaserver/4.png)


## ルーターの準備

1.TFカードをスロットに差し込み、ルーターを再起動します。
2.USBポートを差し込みます
3.あなたのデバイスをルーターのwifiに接続
4.openwrt dlna serverがデバイスで発見できます

例えば:

### Window Media Player

![media](https://static.gl-inet.com/docs/jp/3/app/dlnaserver/media1.png)


### ネットワーク

![network](https://static.gl-inet.com/docs/jp/3/app/dlnaserver/media2.png)

ほかのDLNAに対応のデバイスも簡単にルーター共有ファイルを見つかることができます。