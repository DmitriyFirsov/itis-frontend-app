const express = require('express');
const { createReadStream } = require('fs');
const { normalize } = require('path');

const app = express();

app.use('/', express.static(normalize(__dirname + '/../build')));
app.use((req, res) => {
	res.setHeader('content-type', 'text/html');
	createReadStream(normalize(__dirname + '/../build/index.html')).pipe(res);
});

app.listen(3000);
