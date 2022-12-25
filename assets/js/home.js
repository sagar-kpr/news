/*{
    $.get(' https://newsapi.org/v2/top-headlines?country=in&apiKey=60d3cca075f3445c93f289dd4d3ab6c2', async function(data){
        let fetch = await data.articles
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

}*/

{
  let searchFilter = function(){
    let searchform = $('#searchForm');
    searchform.submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/search',
            data: searchform.serialize(),
            success : function(data){
                let filter = data.data;
                $('#inp').val('');
                $('#news-container').empty()
                for(let i=0; i< filter.length; i++){
                    let newDom = createnewDom(filter[i])
                    $('#news-container').prepend(newDom)
                }
                

            },
            error : function(error){
                console.log(error.responseText)
            }
        })

    })
  }   

  let createnewDom = function(data){
    return $(`
    <div id="news">
        <h3>${data.title}</h3>
        <img src="${data.image}"/>
        <div id="description">
            <p>${data.content} &nbsp<a href="${data.url}" target="_blank">Read more...</a></p>
        </div>
    </div>
`)
  }

  searchFilter();
}