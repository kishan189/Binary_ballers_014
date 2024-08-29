document.querySelector(".slideFinder").style.display="none";
document.querySelector(".btn").addEventListener("click",function(){
    document.querySelector(".slideFinder").style.display="inline-block";
    document.querySelector(".slideFinder").classList.toggle("slidegoFinder")
})