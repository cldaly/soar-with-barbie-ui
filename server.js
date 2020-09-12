var express = require('express');
var enforce = require('express-sslify');
var app = express();

app.use(express.static('./dist/SoarWithBarbie'));
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/SoarWithBarbie' });
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);