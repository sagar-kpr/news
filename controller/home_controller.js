
const NewsAPI = require('newsapi');
const { castObject } = require('../models/news_schema');
const newsapi = new NewsAPI('60d3cca075f3445c93f289dd4d3ab6c2');
const News = require('../models/news_schema');
var article;

module.exports.home = async function (req, res) {
    await newsapi.v2.topHeadlines({
        country: 'in'
    }).then(async response => {
       // console.log('ewewewe',response.articles[0].source['name'])
        article = response.articles;
        console.log(article)
        for(let i=0; i< article.length; i++){
            const data = {
                title: article[i].title,
                image : article[i].urlToImage,
                content: article[i].content,
                url : article[i].url,
                category : article[i].source['name']
            }
            if(!data.content || !data.image || !data.url|| !data.category){
                if(!data.content){
                    data.content = 'not avail'
                }
                if(!data.image){
                    data.image = 'not avail'
                }
                if(!data.url){
                    data.url = 'not avail'
                }
                if(!data.category){
                    data.category= 'not avail'
                }
            }
            /*if(!data.content){
                data.content = 'not avail'
            }else if(!data.image){
                data.image = 'not avail'
            }else if(!data.url){
                data.url = 'not avail'
            }else if(!data.category){
                data.category= 'not avail'
            }*/
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
    //return res.render('Home');

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
            data : filtered,
            name:req.body.search
        })
    }
    
}




module.exports.filter = async function(req,res){
    function find(filterNews, key , value){
       // value = value.toLowerCase();
        return  filterNews.filter( (item) => item[key].includes(value) )
    }
    var filterNews = await News.find();
    let filtered = find(filterNews, 'category', req.body.common);
    if(req.xhr){
        return res.status(200).json({
            data : filtered
        })
    }
}













