// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello ! I am Dhruvi and this is second version.');
//   });
//   const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(API server listening on port ${port});
// });
var express = require('express');

var app = express();
const port = process.env.PORT || 8000
app.use(express.static(__dirname + '/prarthi'));

app.listen(port,function() {
  //console.log("server starting on " + 8000);
});