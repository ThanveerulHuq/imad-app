var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title:'Article One',
    date:'August 9 2017',
    content:'<p>this is article one created from server.js</p>'
}


function CreateTemplate(data){
    var title=data.title;
    var date= data.date;
    var content=data.content;
    var htmltemplate=`
    <html>
<head>
    <title>
    ${date}
    </title>
</head>
<body>
<div class="container">
    <div class="header fixed-top">
        <div class="logo">
            ${date}        </div>
        <div class="title">
            Sanmina Partner Connect
        </div>
    </div>
    <div class="main-wrapper">
        <main>${content}</main>
    </div>
    <div class="fixed-bottom footer">
        <div class="copyright">
            <span class="copyright">©</span>Copyright 2017 Sanmina Corporation. All rights reserved.
        </div>
    </div>
</div>
</body>
</html>`
   return htmltemplate; 
}





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/article-one', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});

app.get('/counter', function (req, res) {
  res.send(CreateTemplate(articleOne));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
