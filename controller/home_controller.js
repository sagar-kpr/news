
const NewsAPI = require('newsapi');
const { castObject } = require('../models/news_schema');
const newsapi = new NewsAPI('60d3cca075f3445c93f289dd4d3ab6c2');
const News = require('../models/news_schema');
var article;

module.exports.home = async function (req, res) {
    await newsapi.v2.topHeadlines({
        country: 'in'
    }).then(async response => {
       
         article = response.articles;
        
        for(let i=0; i< article.length; i++){
            const data = {
                title: article[i].title,
                image : article[i].urlToImage,
                content: article[i].content,
                url : article[i].url
            }
            if(!data.image){
                data.image = 'not avail'
            }else if(!data.content){
                data.content = 'not avail'
            }else if(!data.url){
                data.url = 'not avail'
            }
            const test =  await News.findOne({title:data.title})
            
            if(!test){
                const newData =  new News(data);
                newData.save();
                
            }
            

        }
       
    });
    
    let news = await News.find();
    
    return res.render('Home',{
        data:article,
        dbData:news
    });

}



module.exports.search = async function(req,res){
    
     function find(news, key , value){
        value = value.toLowerCase();
        return  news.filter( (item) => item[key].toLowerCase().includes(value) )
    }
    var news = await News.find();
    let filtered = find(news, 'content', req.body.search);
    if(req.xhr){
        return res.status(200).json({
            data : filtered
        })
    }
    
}





