var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
    'articleOne' : {
        title: 'Article One | Indulekha P',
        heading: 'Article 1',
        date: 'Aug 9, 2017',
        content: `
        <h2>This is article one.</h2>
        <h2>This is article one.</h2>`
    },
    'articleTwo' : {
        title: 'Article Two | Indulekha P',
        heading: 'Article 2',
        date: 'Aug 10, 2017',
        content: `
        <h2>This is article two.</h2>
        <h2>This is article two.</h2>`
    },
    'articleThree' : {
        title: 'Article Three | Indulekha P',
        heading: 'Article 3',
        date: 'Aug 11, 2017',
        content: `
        <h2>This is article three.</h2>
        <h2>This is article three.</h2>`
    }
};


function createTemplate(data){
    title = data.title;
    heading = data.heading;
    date = data.date;
    content = data.content;
    var htmlTemplate = `
        <html>
            <head>
                <title>${title}</title>
                <link href="/ui/style.css" rel="stylesheet">
            </head>
            <body>
                <a href="/">Home</a>
                <h4>${heading}</h4>
                <p>${date}</p>
                <div class="container">    
                    ${content}
                </div>
            </body>
        </html>`;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  res.send(createTemplate(articles[articleName]));
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
