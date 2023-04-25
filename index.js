import { login } from 'masto';

// 各種フォームを取得する
const accessToken = document.getElementById('accessToken');
const instance = document.getElementById('instance');
const textarea = document.querySelector('textarea');
const loginButton = document.querySelector('header button');
const submitButton = document.querySelector('main button');
const footer = document.querySelector('footer');

// Mastodonクライアント（masto.jsの本体？）を格納する変数
let client;

// テストが面倒なので、デフォルトで入力しておく
instance.value = "https://social.vivaldi.net";

// 投稿ボタンが押されたらtextareaタグ内の文章を公開範囲「公開」で送信し、
// フッター領域に投稿した文章のURLと内容を表示する
submitButton.addEventListener('click', async () => {
    // 投稿する。結果はstatusに格納する
    const status = await client.v1.statuses.create({
        status: textarea.value,
        visibility: 'public',
    });

    // 投稿した結果をフッターに表示する
    footer.innerText += `\n\n${status.url}\n${status.text}`;
});

// ログインボタンが押されたらログイン処理を行う
loginButton.addEventListener('click', async () => {
    // インスタンスとアクセストークンの両方揃ってない場合は
    // アラートを出してログイン処理を中断する
    if (!accessToken.value || !instance.value) {
        alert("ログイン情報を入力して下さい。")
        return;
    }

    // アクセストークンを使ってURLのインスタンスに
    // ログインする。結果はclientに格納する
    client = await login({
        url: instance.value,
        accessToken: accessToken.value,
    });

    if (client) {
      loginButton.disabled = true;
      footer.innerText += `\n\nログインしました。`;      
    } else {
      footer.innerText += `\n\nログインに失敗しました。`;      
    }
});
