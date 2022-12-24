
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('60d3cca075f3445c93f289dd4d3ab6c2');
const News = require('../models/news_schema');

var user;

module.exports.home =  function(req,res){
    newsapi.v2.topHeadlines({
        country: 'in',
      }).then(response => {
        const article = response.articles
        const arr = [...article]
        arr.filter( async (article) => {
            News.findOne({title: article.title }, function(err,user){
                if(err) { console.log('err in finding title'); return }
                if(!user){
                    News.create({
                        title: article.title,
                        image: article.urlToImage,
                        content: article.content,
                        url : article.url
                    }, function(err, found){
                        if(err) { console.log('err in finding news'); return }
                        console.log('qqqqq', found)
                        return res.render('Home'); 
                    })
                }

            })
            
        })
        
      });
     
}