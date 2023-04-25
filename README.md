# Mastojs-testrun（Masto.js Web UI サンプル）

![GitHub](https://img.shields.io/github/license/hidao80/katex-ruby-generator?style=plastic)

## インストール方法

1. WSLやmacなどのPOSIX互換環境にて以下のバージョンのプログラムが実行できるようにしておく。

    - Node.js: `>= 14.x`
    - npm: `>= 6.x`
    - TypeScript (optional peer dependency): `>= 3.6.0`

2. 本リポジトリを`clone`またはzipでダウンロードして、ソースコードを展開する。  
  展開先は`mastjs-testrun`ディレクトリとする。

    ```sh
    git clone https://github.com/hidao80/mastjs-testrun.git
    ```

3. `masto`と`vite`に必要なパッケージをインストールする。

    ```sh
    npm i
    ```

4. `vite`を使ってapacheなどのnode.jsのないWebサーバでも動作するようにバンドルする。`vite`を実行するコマンドは`package.json`に書かれているので、
  コマンドとしては以下の通りでもよい。

    ```sh
    npm run build
    ```

    実行に成功すると、`dist`ディレクトリ以下に`index.html`ファイルと`assets/index-ef790df2.js`（`ef790df2`は適当な英数）が出力される。

5. Webサーバに`index.html`と`assets/index-ef790df2.js`を配置し、ブラウザから`index.html`にアクセスすると、フォームが表示される。  

## 使い方

1. 投稿したいMastodonインスタンスの設定→開発からアクセストークンを取得する。
2. `npm run build`コマンドを実行して、`vite`でnode.jsで書かれたプログラムをひとつの`js`ファイルに変換（バンドル）する
3. Webサーバに`index.html`と`assets/index-ef790df2.js`を配置し、ブラウザのからアクセスする。  
    チャチなフォームが表示されたら成功。
4. 「アクセストークン」欄にアクセストークンをコピペする。なんとなく伏せ字にするようになっているので手入力はオススメしない。
5. 「インスタンス」欄にアクセストークンを取得したインスタンスのURLを入力する。デフォルトは`sosical.vivaldi.net`になっている。
6. アクセストークンとインスタンスのURLを入力したら「ログイン」ボタンをクリックする。画面下に「ログインしました。」と表示され、ログインボタンが無効になったらログイン成功。
7. テキストエリアに文章を書き、投稿ボタンをクリックしたら指定したインスタンスの自分のタイムラインを見ると公開範囲「公開」でテキストエリアの内容が投稿されていれば成功。

`Masto.js`自体は投稿の読み込みなどもできるっぽいですが、ここではとりあえずブラウザ上で動作確認するだけにとどめています。

## スクリーンショット

![image](https://user-images.githubusercontent.com/8155294/234266420-364a8e8a-f7fe-473b-8dee-6bbf540d68a2.png)

## とってもありがとう

@woxtu
