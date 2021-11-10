var express = require('express');
const secure = require('express-force-https');
var app = express();

app.use(secure);
app.use(express.static('./dist/SoarWithBarbie'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/SoarWithBarbie' });
});

app.listen(process.env.PORT || 4200);

console.log(`Running on port ${process.env.PORT || 4200}`);