document.querySelector(".slideFinder").style.display="none";
document.querySelector(".finder").addEventListener("click",function(){
    document.querySelector(".slideFinder").classList.toggle("slidegoFinder")
    document.querySelector(".slideFinder").style.display="inline-block";
})

document.querySelector(".slideFile").style.display="none";
document.querySelector(".file").addEventListener("click",function(){
    document.querySelector(".slideFile").style.display="inline-block";
    document.querySelector(".slideFile").classList.toggle("slidegoFile")
})

document.querySelector(".slideEdit").style.display="none";
document.querySelector(".edit").addEventListener("click",function(){
    document.querySelector(".slideEdit").style.display="inline-block";
    document.querySelector(".slideEdit").classList.toggle("slidegoEdit")
})

document.querySelector(".slideHelp").style.display="none";
document.querySelector(".help").addEventListener("click",function(){
    document.querySelector(".slideHelp").style.display="inline-block";
    document.querySelector(".slideHelp").classList.toggle("slidegoHelp")
})