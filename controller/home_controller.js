
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('60d3cca075f3445c93f289dd4d3ab6c2');
const News = require('../models/news_schema');


module.exports.home = async function (req, res) {
    await newsapi.v2.topHeadlines({
        country: 'in'
    }).then(async response => {
       
        let article = response.articles;
        
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
            console.log('66660',article[i])
            if(!test){
                const newData =  new News(data);
                newData.save();
                console.log('888888',newData)
            }
            

        }
       
    });
    console.log('11111')
    let news = await News.find();
    
    return res.render('Home',{
        data:news
    });

}





