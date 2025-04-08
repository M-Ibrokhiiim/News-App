const apiKey='81969a18c4464c8ca39bdf8f38bb815d'
const newsContainer=document.getElementById('main-sectionId')
const searchBtn=document.getElementById('searchbtn')
const input=document.getElementById('theme-input')

 
// Function for  catch articles from API 
async function persistDataForEntranceUi(){
    try{
       const URL=`https://newsapi.org/v2/everything?q=news&pageSize=20&apiKey=${apiKey}`
       const response=await fetch (URL)
       const data=await response.json()
       const articles= await data.articles
       return articles
    }
    catch(error){
    console.log(error);
    }
}

// Calling on API data through IIF
(async()=>{
    try{
        const articles=await persistDataForEntranceUi()
        UIspreadshit(articles)
    }
    catch(error){
        console.log(error);
    }
})()


// Spreading API data on UI
function UIspreadshit(articles){ 

    newsContainer.innerHTML=""
    articles.forEach((article)=>{
        const div=document.createElement('div')
        div.classList.add('main-section-div')

        const img=document.createElement('img')
        img.src=article.urlToImage

        const title=article.title.length>0 ? article.title.slice(0,25)+'...' :article.title
        const h6=document.createElement('h6') 
        h6.textContent=title

        const content=article.content.length>0 ? article.content.slice(0,120) +"...":article.content
        const p=document.createElement('p')
        p.textContent=content

        div.appendChild(img)
        div.appendChild(h6)
        div.appendChild(p)
        
        div.addEventListener("click",()=>{
            window.open(article.url)
        })
        newsContainer.appendChild(div)
    })
}


searchBtn.addEventListener('click',async ()=>{
    let inputField=input.value.trim()
    try{
        const queryData=await searchByQuery(inputField)
        UIspreadshit(queryData)
    }catch(error){
        console.log(error);
    }
})


async function searchByQuery(query){
    try{
        const URL=`https://newsapi.org/v2/everything?q=${query}&pageSize=20&apiKey=${apiKey}`
        const response=await fetch(URL)
        const data=await response.json()
        const articles=await data.articles
        return articles
    }
    catch(error){
        console.log(error);
    }
}