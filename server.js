var express = require('express');
const secure = require('express-force-https');
var app = express();

app.use(secure);
app.use(express.static('./dist//soar-with-barbie'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist//soar-with-barbie' });
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);