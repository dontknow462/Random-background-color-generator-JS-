const colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn=document.querySelector(".btn")
const title=document.querySelector(".title")
const body=document.querySelector("body")


btn.addEventListener("click",()=>{
    let hex="#"
    for( let i=0;i<6;i++){
       let random=Math.floor(Math.random()*colors.length) 
        
     hex+=colors[random]
    }
     body.style.backgroundColor=hex
     title.innerHTML=hex
})



