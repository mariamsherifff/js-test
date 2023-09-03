

$(document).ready(function(){
    $(".loading").fadeOut(3000)
   })  



   let meallist= []
   let Catlist= []
   let Arealist= []
   let Ingredlist= []
   let Details =[]
   let rep =[]
   let categoryarr=[]
   let areaarr=[]
   let ingarr=[]
   let categoryMealArr=[]
   let areaMeall=[]
   let ingMealll=[]



   let containerr= document.getElementById("dataHome")
   let search= document.getElementById('search')
   let icon = document.getElementById("openn")
   let contac=document.getElementById('contact')
   let searchInputt = document.getElementById('searchInput')
   
   
   
   $(document).ready(function () {
         
       let sideBarInnerWidth = $(".sidebar-Inner").innerWidth();
       $(".sidebar ").css({left:-sideBarInnerWidth})
   
       //  page one
   
   })
   $(document).ready(function (){
   
       async function meal(){
       containerr.innerHTML=" "
       var myHttp= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
         var repo = await myHttp.json()
         rep=repo.meals
        display()
   }
   
   meal()
   
   function display (){
       var  temp = ' '
       for (let i = 0; i < rep.length; i++) {
          temp+= `<div class="col-md-3" onclick="mealinfo(${rep[i].idMeal})">
          <div class="con ">
              <img src="${rep[i].strMealThumb}" alt="" class="w-100">
          <div class="layer">
              <div class="titledis">${rep[i].strMeal}</div>
          </div>
          </div>
          
      </div>`
           
       }
       container.innerHTML= temp
   }
   
   })
   
   
    
   
   
   
       $("#openIcon").click(function () {
           
           let width = $(".sidebar-Inner").outerWidth()
           let left = $(".sidebar ").css("left")
           if (left == "0px") {
               $(".sidebar ").animate({ left: `-${width}px` }, 500  )
               icon.classList.remove("fa-solid", "fa-x")
               icon.classList.add( "fa-solid", "fa-bars")
   
           }
   
           else {
               $(".sidebar").animate({ left: "0px" }, 500)
               icon.classList.remove("fa-solid", "fa-bars")
               icon.classList.add("fa-solid", "fa-x")
   
           }
   
   
   
       })
   
   
//  ----------------------------------------
   // category 
   
   async function category(){
       contac.classList.remove('d-flex')
       contac.classList.add('d-none')
       search.classList.remove('d-flex')
       search.classList.add('d-none')
       containerr.innerHTML=" "
       var myHttpcategory= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
         var categoryRsponse = await myHttpcategory.json()
           categoryarr=categoryRsponse.categories
          
           displayCategory ()
           let sideBarInnerWidth = $(".sidebar-Inner").innerWidth();
           $(".sidebar ").css({left:-sideBarInnerWidth})
   } 
   
   category()
   
   function displayCategory (){
       var  corner = ' ' 
       for (let i = 0;  i < categoryarr.length; i++){
           corner+= `<div class="col-md-3 " >
          <div class="con " onclick="categorymeals('${categoryarr[i].strCategory}')">
              <img src="${categoryarr[i].strCategoryThumb}" alt="category" class="w-100">
          <div class="layer">
              <div class="title">${categoryarr[i].strCategory}</div>
              <p>${categoryarr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")} </p>
          </div>
          </div>
      </div>`
           
       }
       containerr.innerHTML=corner
     
   }
//    --------------------------------
   //  area 
   
   async function area(){
    containerr.innerHTML=" "
    contac.classList.remove('d-flex')
    contac.classList.add('d-none')
    search.classList.remove('d-flex')
    search.classList.add('d-none')
    contac.classList.add('d-none')
    var myHttparea= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      var areaRsponse = await myHttparea.json()
      
      areaarr=areaRsponse.meals
      
      displayarea()
      let sideBarInnerWidth = $(".sidebar-Inner").innerWidth();
        $(".sidebar ").css({left:-sideBarInnerWidth})
}


area()

function displayarea (){
    var  areacorner = ''
    for (let i = 0; i < areaarr.length; i++) {
        areacorner+= `<div class="col-md-3 text-center text-white ing my-3" onclick="areaMeal('${areaarr[i].strArea}')">
        <i class="fa-solid fa-house-laptop "></i>
        <h4 class="fs-4 fw-bold">${areaarr[i].strArea}</h4>
       </div>`
    
    }
    containerr.innerHTML=areacorner
    
}

// ---------------------------------------
   //  ingredients 
   
   async function ingredient(){
    containerr.innerHTML=""
    contac.classList.remove('d-flex')
    contac.classList.add('d-none')
    search.classList.remove('d-flex')
    search.classList.add('d-none')
    var myHttpin= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      var inRsponse = await myHttpin.json()
      ingarr=inRsponse.meals
      console.log(ingarr)
      displayingredient ()
      let sideBarInnerWidth = $(".sidebar-Inner").innerWidth();
        $(".sidebar ").css({left:-sideBarInnerWidth})
}
ingredient()

function displayingredient(){
    var  ingcorner = ''
    for (let i = 0; i < 20; i++) {
        ingcorner+= `<div class="col-md-3 text-center text-white ing" onclick="ingredientMeal('${ingarr[i].strIngredient}')">
        <i class="fa-solid fa-drumstick-bite fs-1"></i>
        <h4 class="fs-3 ">${ingarr[i].strIngredient}</h4>
        <p class="fs-6 text-center">${ingarr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
       </div>`
        
    }
    containerr.innerHTML=ingcorner
   
}

// ----------------------------------------
//  Details 
   
async function mealinfo(mealDetails){
    containerr.innerHTML=" "
    var myHttpMealInfo= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetails}`)
    var mealInfoRsponse = await myHttpMealInfo.json()
    details = mealInfoRsponse.meals[0]
    mealInfoDisplay()
}
function mealInfoDisplay(){
    let recipes = ``
    for (let i = 1; i <= 20; i++) {
        if (details[`strIngredient${i}`]) {
            recipes +=   `<span class="  rounded-2 mx-1 my-2  d-flex   p-1 flex-wrap"id="blue">${details[`strMeasure${i}`]} ${details[`strIngredient${i}`]}</span>`  
        }

    }
    
    let tags = details.strTags?.split(",")
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `<span class="   rounded-2 mx-1 my-2 p-1 d-flex   flex-wrap" id="pink">${tags[i]}</span>`
    }
    
        info=`<div class="col-md-4 my-5 mx-1 text-white">
        <img src="${details.strMealThumb}" alt="" class="w-100 rounded-3">
        <h2 class="my-2">${details.strMeal}</h2>
        <h2></h2>
     </div>
     <div class="col-md-7 my-5 mx-1 text-white">
      <h2>Instructions</h2>
      <p>${details.strInstructions}</p>
      <h2>Area : ${details.strArea}</h2>
      <h2>Category :${details.strCategory}</h2>
      <h2>Recipes :</h2>
      <p class="my-4 g-2 d-flex flex-wrap g-5 ">
      ${recipes}
     </p>
      <h2>Tags :</h2>
      <p class="my-4 g-2 d-flex  flex-wrap g-4"> ${tagsStr} </p>
      <p>
      <a href="${details.strSource}"><button class="btn btn-success">Source</button></a>
    <a href="${details.strYoutube}"><button class="btn btn-danger">Youtube</button></a>
     </p>
     
     </div>`

    containerr.innerHTML= info
}
// ---------------------------------------------------
//  search 

function displaySaerch(){
    containerr.innerHTML=" "
   contac.classList.remove('d-flex')
   contac.classList.add('d-none')
    
    search.classList.remove('d-none')
    search.classList.add('d-flex')
    
    let sideBarInnerWidth = $(".sidebar-Inner").innerWidth();
        $(".sidebar ").css({left:-sideBarInnerWidth})
}

// ---------------------------------------------------------
//  contactUs

function contactUs(){
    containerr.innerHTML=" "
    contac.classList.remove('d-none')
    contac.classList.add('d-flex')
    
    search.classList.remove('d-flex')
    search.classList.add('d-none')
    
   
    let sideBarInnerWidth = $(".sidebar-Inner").innerWidth();
        $(".sidebar ").css({left:-sideBarInnerWidth})
       
}

// --------------------------------------------
// categorymeals

   async function categorymeals(meal){
       containerr.innerHTML=" "
       var myHttpcategorymeal= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`)
         var categorymaelRsponse = await myHttpcategorymeal.json()
         categoryMealArr=categorymaelRsponse.meals
         
         displaycatecoryMeal()
         
   }
   
   function displaycatecoryMeal(){
       var  cornermael = ' ' 
       for (let i = 0; i < categoryMealArr.length; i++){
           cornermael+= `<div class="col-md-3" onclick="mealinfo(${categoryMealArr[i].idMeal})">
          <div class="con ">
              <img src="${categoryMealArr[i].strMealThumb}" alt="" class="w-100">
          <div class="layer">
              <div class="title">${categoryMealArr[i].strMeal}</div>
          </div>
          </div>
      </div>`
           
       }
       containerr.innerHTML= cornermael
   }
//    --------------------------------------------
//    AreaaMeal
   
   async function areaMeal(AreaaMeal){
       containerr.innerHTML=" "
       
       var myHttpareaMealL= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${AreaaMeal}`)
       var areaRsponse = await myHttpareaMealL.json()
       areaMeall=areaRsponse.meals
       displayAreaMeal()
       let sideBarInnerWidth = $(".sidebar-Inner").innerWidth();
           $(".sidebar ").css({left:-sideBarInnerWidth})
   }
   
   function displayAreaMeal(){
       var  cornermaelArea = ' ';
       for (let i = 0;  i < areaMeall.length; i++) {
           cornermaelArea+= `<div class="col-md-3"onclick="mealinfo(${areaMeall[i].idMeal})">
          <div class="con ">
              <img src="${areaMeall[i].strMealThumb}" alt="" class="w-100">
          <div class="layer">
              <div class="title">${areaMeall[i].strMeal}</div>
          </div>
          </div>
      </div>`
           
       }
       containerr.innerHTML= cornermaelArea
   }
   
//    ------------------------------------------------
// ingredientMeal
   async function ingredientMeal(ingaMeal){
       containerr.innerHTML=" "
       
       var myHttpIngMealL= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingaMeal}`)
       var ingRsponse = await myHttpIngMealL.json()
       ingMealll=ingRsponse.meals
       displayingMeal()
       let sideBarInnerWidth = $(".sidebar-Inner").innerWidth();
           $(".sidebar ").css({left:-sideBarInnerWidth})
   }
   
   
   function displayingMeal(){
       var  cornermaelIng = ' ';
       for (let i = 0;  i<ingMealll.length; i++) {
           cornermaelIng+= `<div class="col-md-3" onclick="mealinfo(${ingMealll[i].idMeal})">
          <div class="con ">
              <img src="${ingMealll[i].strMealThumb}" alt="" class="w-100">
          <div class="layer">
              <div class="title">${ingMealll[i].strMeal}</div>
          </div>
          </div>
      </div>`
           
       }
       containerr.innerHTML= cornermaelIng
   }
   
   
