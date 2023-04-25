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

4. `vite`を使ってPC内にWebサーバを立てる。`vite`を実行するコマンドは`package.json`に書かれているので、
  コマンドとしては以下の通りでもよい。

  ```sh
  npm run dev
  ```

  実行に成功すると、コマンド実行画面が切り替わり、次のようになれば成功。

  ```sh
  
  VITE v4.3.1  ready in 184 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
  ```

5. 画面にあるとおり、ブラウザから`http://localhost:5173/`にアクセスすると、  
  ブラウザから`masto.js`が呼び出せるフォームが表示される。  

※URLの末尾の数字は実行したPCによって変わるかもしれない。  
自分の画面に表示されているものと同じURLにアクセスしてください。

## 使い方

1. 投稿したいMastodonインスタンスの設定→開発からアクセストークンを取得する。
2. `npm run dev`コマンドを実行して、`vite`でPC内にWebサーバを立てる。
3. 端末の画面に表示されているURLをブラウザのアドレスバーに入力してアクセスする。  
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
