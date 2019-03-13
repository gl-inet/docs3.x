# GL-AR750S-Ext (Slate) - リリースノート

## V3.009 - 2018.12.12

ファームウェアファイル:

- Uboot　アップデート: <a href="https://dl.gl-inet.com/firmware/ar750s/release/" target="_blank">gl-ar750s-3.009.img</a>
- 管理者パネルアップデート: <a href="https://dl.gl-inet.com/firmware/ar750s/release/" target="_blank">gl-ar750s-3.009.tar</a>

**新しい機能:**

- クライアントが有効にする時に、ブリッジモードができないのリマインダーを追加しました。
- VPNクライアントに異常がある場合の警告を追加しました。

**修復:**

- 保存されたネットワークに接続する時のWi-Fi中継を最適化しました。
- Wi-Fi中継の再接続問題を改善しました。
- OpenVPNのデータ漏洩を修正しました。
- ファイル名は`'`が含まれるOpenVPNコンフィグレーションがアップロード失敗することを修正しました。
- PiVPNコンフィグレーションファイルをサポートします。
- `'`と`.`が含まれるパスワードのため、SSHログイン失敗を修正しました。
- WireGuardのデータ漏洩を修正しました。

---

## v3.007 - 2018.11.12

ファームウェアファイル:

- Ubootアップデート: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/release/gl-ar750s-3.007.img" target="_blank">gl-ar750s-3.007.img</a>
- 管理者パネルアップデート: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/release/gl-ar750s-3.007.tar" target="_blank">gl-ar750s-3.007.tar</a>

**新しい機能:**

 - ポート転送、ポートを開く、DMZが含まれるファイアウォール機能を追加しました。
 - Qos機能を追加しました。
 - 通信状態と通信データの表示を追加しました。

**修復:**

 - ユーザーネームとパスワードが入力できないPureVPNコンフィグレーションアップロード問題を修復しました。
 - ルーターが他の利用可能なWi-Fiネットワークに自動的に再接続するのを制限するWISP-BSSIDバインディングを修正しました。
 - ルーターが中継モードのときに5GHz APが消える問題を修正しました。
 - 信号強度に応じてWi-Fiスキャン結果の並べ替えのリストを最適化しました。
 - WISPモードで"保存されたネットワーク"を最適化する、同じSSIDが一度だけ表示されます。
 - WISPの安定性を向上させるのため、自動再接続メカニズムを最適化します。
---

## v3.003 - 2018.10.10

ファームウェアファイル:

- Ubootアップデート: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/release/gl-ar750s-3.003.img" target="_blank">gl-ar750s-3.003.img</a>
- 管理者パネルアップデート: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/release/gl-ar750s-3.003.tar" target="_blank">gl-ar750s-3.003.tar</a>

**新しい機能:**

- ルーターからスマートフォンのWireGuardアプリに設定を簡単にエクスポートするためのWireGuard QRコードを追加しました。

**改良:**

- OpenVPNクライアントがサブフォルダーがあるのコンフィグレーションファイルをサポートします。
- 無線設定が自動チャンネルをサポートします。

**修復:**

- メモリリークを修復しました。
- askpassを修正しました。
- ソフトウエアアップデート問題を修復します。
- OpenVPNがNordVPNとPureVPNコンフィグレーションをサポートします。
- その他の細かいバグの修正。



---
## v3.001 - 2018.7.30

ファームウェアファイル:

- Ubootアップデート: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.001.img" target="_blank">openwrt-ar750s-3.001.img</a>
- 管理者パネルアップデート: <a href="https://s3.us-east-2.amazonaws.com/download.gl-inet.com/firmware/ar750s/release/openwrt-ar750s-3.001.tar" target="_blank">openwrt-ar750s-3.001.tar</a>





