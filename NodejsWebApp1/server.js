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

// ���[�g�p�X�ɃA�N�Z�X�����Ƃ��̉���
app.get('/', (req, res) => {
    res.send('
        < !DOCTYPE html >
    <html lang="ja">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Node.js �e�X�g�T�C�g</title>
                </head>
                    <body>
                        < h1 > Node.js�e�X�g�T�C�g</h1 ><p>�{�^���������Ă݂Ă��������B</p><button onclick="alert(\'�{�^����������܂����I\')">����</button>
                    </body>
                </html>
                ');
});

// �T�[�o�[�N��
app.listen(port, () => {
    console.log(`�T�[�o�[���N�����܂����Bhttp://localhost:${port}`);
});
*/