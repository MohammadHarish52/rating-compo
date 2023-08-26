const starsContainer = document.getElementById("stars");
const star = document.querySelectorAll(".star");
const Counter = document.getElementById("count");

let count = 0;

starsContainer.addEventListener("click",(e)=>{

    let currentClicked = e.target.dataset.index;
    console.log(currentClicked);

    for(let i=0;i<count ; i++){
        star[i].classList.remove("star-filled");

    }
    for(let i=0 ;i < currentClicked ; i++)
{
    star[i].classList.add("star-filled");
   
}
Counter.innerText = ` Rating space : ${currentClicked}`
count = currentClicked;
});


starsContainer.addEventListener("mouseover",(e)=>{

    let currentClicked = e.target.dataset.index;
    console.log(currentClicked);

    for(let i=0;i<5 ; i++){
        star[i].classList.remove("star-filled");

    }
    for(let i=0 ;i < currentClicked ; i++)
{
    star[i].classList.add("star-filled");
   
}

});
starsContainer.addEventListener("mouseleave",(e)=>{

    for(let i=0;i<5 ; i++){
        star[i].classList.remove("star-filled");

    }
    for(let i=0 ;i < count ; i++)
{
    star[i].classList.add("star-filled");
   
}
});


  

