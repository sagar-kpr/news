/*var sports = document.getElementById('Sports')
var general = document.getElementById('General')
var entertainment = document.getElementById('Entertainment')

function checkButton() {  
    if(sports.checked) { 
        
    } 
    else if(general.checked) { 
        console.log('geb check')
    } 
    else if(entertainment.checked) { 
        console.log('enter check',entertainment.getAttribute('value'))
    }
    
} */
$('#button').click(function(){
    let sport = $('#Sports')
    let general = $('#General')
    let entertainment = $('#Entertainment')

    if(sport.prop('checked')){
        $.get(` https://newsapi.org/v2/top-headlines?country=in&category=${sport.val()}&apiKey=60d3cca075f3445c93f289dd4d3ab6c2`, async function(data){
        let fetch = await data.articles
        $('#news-container').empty()
        for (let i=0; i< fetch.length; i++){

            let news = createDom(fetch[i])
            
            $('#news-container').prepend(news)
        }
        

        })

        let createDom = function(data){
            return $(`
                <div id="news">
                    <h3>${data.title}</h3>
                    <img src="${data.urlToImage}"/>
                    <div id="description">
                        <p>${data.description} &nbsp<a href="${data.url}" target="_blank">Read more...</a></p>
                    </div>
                </div>
            `)
        }
    }else if(general.prop('checked')){
        $.get(` https://newsapi.org/v2/top-headlines?country=in&category=${general.val()}&apiKey=60d3cca075f3445c93f289dd4d3ab6c2`, async function(data){
        let fetch = await data.articles
        $('#news-container').empty()
        for (let i=0; i< fetch.length; i++){

            let news = createDom(fetch[i])
            
            $('#news-container').prepend(news)
        }
        

        })

        let createDom = function(data){
            return $(`
                <div id="news">
                    <h3>${data.title}</h3>
                    <img src="${data.urlToImage}"/>
                    <div id="description">
                        <p>${data.description} &nbsp<a href="${data.url}" target="_blank">Read more...</a></p>
                    </div>
                </div>
            `)
        }

    }else if(entertainment.prop('checked')){
        $.get(` https://newsapi.org/v2/top-headlines?country=in&category=${entertainment.val()}&apiKey=60d3cca075f3445c93f289dd4d3ab6c2`, async function(data){
        let fetch = await data.articles
        $('#news-container').empty()
        for (let i=0; i< fetch.length; i++){

            let news = createDom(fetch[i])
            
            $('#news-container').prepend(news)
        }
        

        })

        let createDom = function(data){
            return $(`
                <div id="news">
                    <h3>${data.title}</h3>
                    <img src="${data.urlToImage}"/>
                    <div id="description">
                        <p>${data.description} &nbsp<a href="${data.url}" target="_blank">Read more...</a></p>
                    </div>
                </div>
            `)
        }
        
    }
})
