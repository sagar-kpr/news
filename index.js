const express = require('express');
const port = 2000;
const app = express();
const parser = require('body-parser');
const nodeSass = require('node-sass-middleware');
const expressLayout = require('express-ejs-layouts');
const path = require('path');


app.use(nodeSass({
    src : path.join(__dirname, './assets', 'sass'),
    dest : path.join(__dirname, './assets', 'css'),
    outputStyle: 'expanded',
    prefix: '/css'
}));

app.use(parser.urlencoded({extended:false}));
app.use(express.static('./assets'));
app.use(expressLayout);


app.set('view engine', 'ejs');
app.set('views', './views');
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.use('/', require('./routes/index'));

app.listen(port, (err) => {
    if(err) { console.log('err on listening port'); return }
    return console.log('server is runing on port', port)
})


//https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=60d3cca075f3445c93f289dd4d3ab6c2

//http://api.mediastack.com/v1/news?access_key=734e162d5d8de371d445d25caa088ed7&keywords=tennis&countries=in







