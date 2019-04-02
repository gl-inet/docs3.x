# アップグレード

`アップグレード`をクリックして、利用可能なアップデートをチェックして、ファームウェアをアップグレードします。

![upgrade](https://static.gl-inet.com/docs/en/3/setup/travel_ac_router/upgrade/firmware.jpg)



---

## オンラインアップグレード

ここで現在のファームウェアバージョンが見つかれます。ルーターがインターネットに接続する時、一番新しいのファームウェアバージョンをチェックするようになります。

![online upgrade](https://static.gl-inet.com/docs/en/3/setup/travel_ac_router/upgrade/firmware1.jpg)



*注意事項：**設定保存**を無効にすることをお勧めします。 アップグレード後も設定を維持して問題が発生した場合は、ルータをリセットしてください。



---

## アップロードファームウェア

`ローカルアップグレード`をクリックする、それでファームウェアファイルをルーターにアップロードしてください。ファームウェアファイルをドラッグし、表示されている領域にドロップすればいいです。


![upload firmware](https://static.gl-inet.com/docs/en/3/setup/travel_ac_router/upgrade/firmware2.jpg)



### オフィシャルOpenWrt/LEDEファームウェア

本社の[ウェブサイト](http://download.gl-inet.com/firmware/)でオフィシャルファームウェアがダウンロードできます。

- GL-AR750: [http://download.gl-inet.com/firmware/ar750/](http://download.gl-inet.com/firmware/ar750/)
- GL-AR750S (Slate): [http://download.gl-inet.com/firmware/ar750s/](http://download.gl-inet.com/firmware/ar750s/)

あなたのデバイスによって、必要なファームウェアを探してください。ファームウェアファイルは、以下のサブフォルダーであります:

**V1/release**: オフィシャルGL.iNet OpenWrt/LEDE ファームウエア。

**testing**:  GL.iNet OpenWrt/LEDE ファームウエアのベータ版。



### あなた自分のファームウェアをコンパイル

あなた自分のファームウェアをコンパイルして、ルーターにインストールすることができます。[github.com/domino-team/openwrt-cc](https://github.com/domino-team/openwrt-cc)を参考してください。



### サードパーティのファームウェア

DDWRTとかのほかのファームウェアを試すこともできます。



*注意：このようにして互換性のないファームウェアをアップロードしてルーターが破損した場合は、Ubootを使用して正しいファームウェアを再インストールしてください。*



---

## 自動アップグレード

自動アップグレードが有効になれます。ルーターは、設定した時間にとって、アップデートを自動にサーチしてアップグレードすることになります。

![auto upgrade](https://static.gl-inet.com/docs/en/3/setup/travel_ac_router/upgrade/firmware3.jpg)
