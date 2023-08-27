const getcolor = () => {
    //Hex code
    const randomNumber = Math.floor(Math.random() * 16777215)
    const rndmclr = "#"+randomNumber.toString(16)
    document.body.style.backgroundColor=rndmclr
    document.getElementById("btn").style.color=rndmclr
    document.getElementById("clr-code").innerText = rndmclr
    //copythe#val
    navigator.clipboard.writeText(rndmclr)
}
//entcall
document.getElementById("btn").addEventListener("click",getcolor)
//initcall
getcolor()