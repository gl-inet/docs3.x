# アップグレード

`アップグレード`をクリックして、利用可能なアップデートをチェックして、ファームウェアをアップグレードします。

![upgrade](https://static.gl-inet.com/docs/jp/3/setup/mini_router/upgrade/firmware.png)



---

## オンラインアップグレード

ここで現在のバージョンが見つかれます。ルーターがインターネットに接続する時、一番新しいのファームウェアバージョンをチェックするようになります。

![online upgrade](https://static.gl-inet.com/docs/jp/3/setup/mini_router/upgrade/firmware1.png)

*注意事項：**設定保存**を無効にすることをお勧めします。 アップグレード後も設定を維持して問題が発生した場合は、ルータをリセットしてください。

---

## アップロードファームウェア

`ローカルアップグレード`をクリックして、ファームウェアファイルをルーターにアップロードしてください。ファームウェアファイルをドラッグし、表示されている領域にドロップすればいいです。


![upload firmware](https://static.gl-inet.com/docs/jp/3/setup/mini_router/upgrade/firmware2.png)



### オフィシャルOpenWrt/LEDEファームウェア

本社の[ウェブサイト](http://download.gl-inet.com/firmware/)でオフィシャルファームウェアがダウンロードできます。

- GL-AR150 シリーズ: [http://download.gl-inet.com/firmware/ar150/](http://download.gl-inet.com/firmware/ar150/)
- GL-AR300M シリーズ: [http://download.gl-inet.com/firmware/ar300m/](http://download.gl-inet.com/firmware/ar300m/)

あなたのデバイスモデルによって、対応なファームウェアを探してください。ファームウェアファイルは以下のサブフォルダーであります:

**v1**: オフィシャルGL.iNet OpenWrt/LEDE ファームウエア。

**clean**: OpenWrt/LEDE クリーンファームウェアです。Luci管理者ページしかほかのUIがありません。

**tor**: Tor ファームウエア。

**testing**: GL.iNet OpenWrt/LEDE ファームウエアのベータ版。

**nand *(AR300M only)***: 128MB Nand フラッシュが持っているGL-AR300MとGL-AR300M-Extのファームウェア。


*注意：.tar ファイルをアップロードしてください、.img ファイルがUbootに使用します。*

*注意：**Nand**フォルダ内のファームウェアファイルは**GL-AR300M**と**GL-AR300M-Ext**専用です。これら2つのモデルは128MBのNandフラッシュを持っているからです。 .tarファイルを使用してアップロードする必要があります。 .imgファイルはUbootでのみ使用できます。*



### あなた自分のファームウェアをコンパイル

自分のファームウェアをコンパイルして、ルーターにインストールすることができます。[github.com/domino-team/openwrt-cc](https://github.com/domino-team/openwrt-cc)を参考してください。



### サードパーティのファームウェア

DDWRTとかのほかのファームウェアを試すこともできます。



*注意：互換性がないファームウェアをアップロードしてルーターが損害した場合は、Ubootを使用して正しいファームウェアを再インストールしてください。*



---

## 自動アップグレード

自動アップグレードが有効になれます。ルーターは、設定した時間にとって、アップデートを自動にサーチしてアップグレードすることになります。

![auto upgrade](https://static.gl-inet.com/docs/jp/3/setup/mini_router/upgrade/firmware3.png)
