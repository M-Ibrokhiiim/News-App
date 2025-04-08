const apiKey='81969a18c4464c8ca39bdf8f38bb815d'
const newsContainer=document.getElementById('main-sectionId')
const searchBtn=document.getElementById('searchbtn')
const input=document.getElementById('theme-input')
let prompt='Daily'


// // Function for  fetch data when enter on UI
// async function getNews() {
//     try{
//       const url=`https://newsapi.org/v2/top-headlines?country=us&pageSize=60&apiKey=${apiKey}`
//       const response=await fetch(url)
//       const data=await response.json()
//       return data.articles
//     }
//     catch(error){
//         console.log(error='Please research again with other theme...');
//         return []
//     }
    
// }

// // Function for  take input field for fetch data 
// searchBtn.addEventListener('click',async ()=>{

//     let inputField=input.value.trim()

//     try{
//         const articles=await searchedNews(inputField)
//         displayBlocks(articles)
//         query.value=''
//     }
//     catch(error){
//         console.log(error);
//     }
// })

// // Function for searching through inputField
// async function searchedNews(query){

//     try{
//         const url=`https://newsapi.org/v2/everything?q=${query}&pageSize=50&apiKey=${apiKey}`
//         const response=await fetch(url)
//         const data=await response.json()
//         return data.articles
//       }
//       catch(error){
//           console.log(error='Please research again with other theme...');
//           return []
//       }
    
// }

// // Function for display fetched data for UI
// function displayBlocks(articles){
//     newsContainer.innerHTML=""
//     articles.forEach(article =>{
//         const div=document.createElement('div') 
//         div.classList.add('main-section-div')

//         const img=document.createElement('img')
//         img.src=article.urlToImage
//         img.alt=article.title
        
//         let title
//         if(article.title.length>30){
//         title=article.title.slice(0,40)
//         }
//         const h6=document.createElement('h6')
//         h6.textContent=title+'...'
        
//         let description
//         if(article.description.length>0){
//         description=article.description.slice(0,120)
//         }

//         const p=document.createElement('p')
//         p.textContent=description+'...'

        
//         div.appendChild(img)
//         div.appendChild(h6)
//         div.appendChild(p)

//         div.addEventListener('click',()=>{
//             window.open(article.url,"_blank")
//         })
      
//         newsContainer.appendChild(div)

//     });
// }

// // Function for run all function 
// (async()=>{
//     try{
//         const articles=await getNews()
//         displayBlocks(articles)
//     } 
//     catch(error){
//         console.log(error);
//     }
// })()

 
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
    articles.forEach((article)=>{
        const div=document.createElement('div')
        div.classList.add('main-section-div')

        const img=document.createElement('img')
        img.src=article.urlToImage

        const title=article.content>0 ? article.content.slice(0,4)+'...' :article.title
        const h6=document.createElement('h6') 
        h6.textContent=title
        const p=document.createElement('p')
        p.textContent=title

        div.appendChild(img)
        div.appendChild(h6)
        div.appendChild(p)

        newsContainer.appendChild(div)
    })
}
