
console.log("in")


var movieArr=[
    { name:"Spider-Man: No Way Home", release_date:"22-jan-2021",poster:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", IMDB_rating : 5},
    { name:"No Time To Die", release_date:"10-02-2021",poster:"https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", IMDB_rating : 3},
    { name:"Shang-Chi ", release_date:"10-3-2021",poster:"https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", IMDB_rating :3},
    { name:"The Father ", release_date:"12-04-2021",poster:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", IMDB_rating : 4.5},
    { name:"Encanto", release_date:"15-05-2021",poster:"https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", IMDB_rating : 3.2},
    { name:"Dune", release_date:"01-06/2021",poster:"https://images.unsplash.com/photo-1649677300849-8d71b2fa9a1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", IMDB_rating : 3.8},
    { name:"A Quiet Place", release_date:"07-07-2021",poster:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", IMDB_rating : 4.3},
    { name:"The Suicide Squad", release_date:"08-09-2021",poster:"https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", IMDB_rating : 4.7},
    { name:"Pam string", release_date:"15-10-2021",poster:"https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", IMDB_rating : 3.9},
]

window.addEventListener("load",function(){
    displayData(movieArr);
})



// localStorage.setItem("movieData",JSON.stringify(movieArr))
document.querySelector("#sort-lh").addEventListener("click",lth)
function lth()
{
   
    movieArr.sort(function(a,b)
    {
        return b.IMDB_rating-a.IMDB_rating
    })
    // console.log(movieArr)
    displayData(movieArr)
}

document.querySelector("#sort-hl").addEventListener("click",htl)
function htl()
{
   
    // var movieArr = JSON.parse(localStorage.getItem("movieData")) || []
    // console.log(movieArr)
    movieArr.sort(function(a,b)
    {
        return a.IMDB_rating-b.IMDB_rating
    })
    console.log(movieArr)
    displayData(movieArr)
}

function displayData(movieArr)
{
    document.querySelector("#container").innerHTML = "";
    movieArr.map(function(ele,i)
    {
        let Div = document.createElement("div")
    
        let Name = document.createElement("p")
        Name.innerText= "Name of Movie: "+" "+ele.name
    
        let Date= document.createElement("p")
        Date.innerText= "Released Date: "+" "+ele.release_date
    
        let Poster = document.createElement("img")
        Poster.src = ele.poster
    
        let Rating= document.createElement("p")
        Rating.innerText= "IMDB Rating:  "+" "+ele.IMDB_rating
    
        Div.append(Poster,Name,Date,Rating)
    
        document.querySelector("#container").append(Div)
    })
}






