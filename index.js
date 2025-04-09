const apiKey='81969a18c4464c8ca39bdf8f38bb815d'
const newsContainer=document.getElementById('main-sectionId')
const searchBtn=document.getElementById('searchbtn')
const input=document.getElementById('theme-input')

// Function for intrance of UI
async function newsForIntrance(){
    const URL=`https://newsapi.org/v2/everything?q=news&apiKey=${apiKey}`
    try{
        const response=await fetch(URL)
        const data= await response.json()
        const articles= await data.articles
        return articles
    }
    catch(error){  
        console.log(error);
    }
}

// Connecter function UI entrance data with UI spread data function
(async()=>{
    try{
     const articles=await newsForIntrance()
     showNewsToUI(articles)
    }
    catch(error){
        console.log(error);    
    }
})()


// Function for spread data for UI
function showNewsToUI(articles){
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

// Funtion for find searched theme from API
async function searchedNews(query){
    
    try{
        const URL=`https://newsapi.org/v2/everything?q=${query}&pageSize=40&apiKey=${apiKey}`
        const response=await fetch(URL)
        const data=await response.json()
        const articles=await data.articles
        return articles
    }
    catch(error){
        console.log(error);
    }
}

// Function for take input field and transit data on UI spreader function
searchBtn.addEventListener('click',async()=>{
    const inputField=input.value
    try{
       const articles= await searchedNews(inputField)
       showNewsToUI(articles)
    }catch(error){
        console.log(error);
    }
})


document.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        async function a(){
            const inputField=input.value
            try{
               const articles= await searchedNews(inputField)
               showNewsToUI(articles)
            }catch(error){
                console.log(error);
            }
        }
        a()
    }
})