
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('60d3cca075f3445c93f289dd4d3ab6c2');





module.exports.home =  function(req,res){
    newsapi.v2.topHeadlines({
        country: 'in',
      }).then(response => {
        console.log(response.articles);
        return res.render('Home',{
            data : response.articles
        }); 
      });
    
   
    
     
}