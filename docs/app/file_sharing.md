# ファイル共有


GL.iNetルーターをUSBメモリ、マイクロSDカードなどの外部記憶装置と一緒に使用することができます。そのため、接続しているすべてのクライアント間でコンテンツを共有できます。その内容を簡単に読んだり変更したりできます。


---



## ルーター設定

 外付けストレージデバイスのコンテンツはLANでは共有されますがWANでは共有されず、デフォルトでは書き込み不可です。

**外部記憶装置をサポート**


| ルーターモデル | USB ストレージ | USB ハードドライブ | マイクロSDカード |
| :----------- | :-------: | :---: | :---: |
| GL-MT300N*   |  √  | √ | - |
| GL-MT300N-V2 |     √     |    √ | - |
| GL-AR150 Series | √ | √ | - |
| GL-AR300M Series | √ | √ | - |
| GL-USB150 | - | - | - |
| GL-MiFi | √ | √ | √ |
| GL-AR750 | √ | √ | √ |
| GL-AR750S-Ext (Slate) | √ | √ | √ |
| GL-B1300* | √ | √ | - |

*このモデルの3.0ファームウェアはまだリリースされていません。

*注意：USBハードドライブの消費電力はかなり高いです。あなたは外部電源でそれを使うべきです。そうでなければ故障の原因となるかもしれません。*

---



## ストレージデバイスにアクセス

あなたは、パソコンまたはスマホから外部ストレージデバイスのファイルをアクセスします。異なるオペレーティングシステム間でのファイル共有の使用については、次のガイダンスを確認してください。


### Windows

**1)** あなたのネットワークはホーム/プライベートでなければなりません。そうでなければ、**ネットワーク**であなたのルーターを見えないかもしれません。Win10を使ったら、SMB 1.0を有効にすることも必要です。

- Win7

  「コントロールパネル」ー＞「ネットワークとインターネット」ー＞「ネットワークと共有センター」。アクティブなネットワークが**ホームネットワーク**かどうかを調べます。そうでない場合は、それをクリックして**ホームネットワーク**に変更してください。

- Win10

  「コントロールパネル」ー＞「ネットワークとインターネット」ー＞「ホームグルプ」。**ネットワークロケーションを変更**をクリックします。

  「コントロールぱねる」ー＞「プログラムとフィトンチッド」ー＞「Windowsフィトンチッドを開閉」ー＞「SMB 1.0/CIFSファイル共有サポート」を見つける、SMB1相関のすべてのアイテムをチェックして、アプリをクリックしてパソコンを再起動します。



**2)** Windowsエクスプローラを開くと、フォルダディレクトリに**ネットワーク**があります。 ルーターをダブルクリックしてその内容にアクセスします。

![Network](https://static.gl-inet.com/docs/en/3/tutorials/file_sharing/network.jpg)

デバイスが発見されていない場合で、ルーターのipアドレスを入力し、共有ファイルが見つけます。

![Network](https://static.gl-inet.com/docs/jp/3/app/file_sharing/network1.png)



### Mac

**1)** 「セステム界面」ー＞「共有」ー＞「ファイル共有」。`オプション`をクリックして、SMBを有効にします。


**2)** Finderを開く、共有であなたのルーターが見つけるはずです。


### IOS

あなたは、外部ストレージデバイスのファイルをアクセスするため、ファイル管理appを使うことが必要です。
**FE File Explorer**がおすすめです：

**1)** `+`をクリックして、`Windows`接続を作ります。

![IOS1](https://static.gl-inet.com/docs/en/3/tutorials/file_sharing/ios11.jpg)



![IOS1](https://static.gl-inet.com/docs/en/3/tutorials/file_sharing/ios12.jpg)

**2)** ルーターの「IP address」を入力します。「User Name」がrootです、そして「Password」が管理者パネルをアクセスするときのパスワードです。最後に、`Save`をクリックします。

![IOS1](https://static.gl-inet.com/docs/en/3/tutorials/file_sharing/ios13.jpg)

**3)** 作った接続をクリックして、ファイルにアクセスします。

![IOS1](https://static.gl-inet.com/docs/en/3/tutorials/file_sharing/ios14.jpg)



### Android

大部分のAndroidデバイスは外部ストレージデバイスのファイルにアクセスできるのファイルマネージャーがあります。**ES file explorer**を使うこともできます。
**1)** appを開いて、`Network`をクリックします。

![android1](https://static.gl-inet.com/docs/en/3/tutorials/file_sharing/android1.jpg)

**2)** `Scan`をクリックして、あなたのネットワークストレージデバイスを見つける。

![android2](https://static.gl-inet.com/docs/en/3/tutorials/file_sharing/android2.jpg)

![android3](https://static.gl-inet.com/docs/en/3/tutorials/file_sharing/android3.jpg)