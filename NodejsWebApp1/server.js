'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);


/*'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

// ルートパスにアクセスしたときの応答
app.get('/', (req, res) => {
    res.send('
        < !DOCTYPE html >
    <html lang="ja">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Node.js テストサイト</title>
                </head>
                    <body>
                        < h1 > Node.jsテストサイト</h1 ><p>ボタンを押してみてください。</p><button onclick="alert(\'ボタンが押されました！\')">押す</button>
                    </body>
                </html>
                ');
});

// サーバー起動
app.listen(port, () => {
    console.log(`サーバーが起動しました。http://localhost:${port}`);
});
*/