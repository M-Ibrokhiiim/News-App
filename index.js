const apiKey='81969a18c4464c8ca39bdf8f38bb815d'
const newsContainer=document.getElementById('main-sectionId')
const searchBtn=document.getElementById('seachbtn')
const input=document.getElementById('theme-input')
// let prompt='Daily'

// searchBtn.addEventListener('click',()=>{
//   console.log(1);
  
// })
 

getRequest()
async function getRequest(){
   try{
    let UI=''
    const apiUrl=`https://newsapi.org/v2/everything?q=tesla&from=2025-03-02&sortBy=publishedAt&apiKey=81969a18c4464c8ca39bdf8f38bb815d`
    const response=await fetch(apiUrl)
    const data=await response.json()
    console.log(data);
    
    data.articles.forEach(article => {
        let title
        let description
        if(article.title.trim().length>0 && article.description.trim().length>0){
            title=article.title.slice(0,30) + "..."
            description=article.description.slice(0,60)+"..."
            }
         
        UI+=`
          <div class="main-section-div">
             <img src="${article.urlToImage}" alt="newsPic">
             <h6>${title}</h6>
             <p>${description}</p>
         </div>
        ` 
        newsContainer.innerHTML=UI
    });
   }
   catch(error){
    console.log(error);
   }
}