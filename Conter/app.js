//Set initial count
let count=0;

//select items
const value=document.querySelector(".value")
const btns=document.querySelectorAll(".btn")

btns.forEach((btn)=>{
 btn.addEventListener('click',(e)=>{
  //console.log(e.currentTarget.classList)
  const current=e.currentTarget.classList 
  if(current.contains('decrease')){
   count--;
}
else if(current.contains('increase')){
 count++;
}
else{
 count=0
}
value.textContent=count
 })
})