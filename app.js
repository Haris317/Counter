let mainTitle=document.querySelector('.display')
let curValue=0


function add(){
    let add=document.querySelector('#increment')
    curValue++
    add=mainTitle.textContent=curValue
}
function dicrement(){
    let dicrement=document.querySelector('#dicrement')
    curValue--
    dicrement=mainTitle.textContent=curValue
}
function reset(){
    let reset=document.querySelector("#reset")
    curValue=0
    reset=mainTitle.textContent=curValue
}
