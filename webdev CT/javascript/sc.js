// **********DOM  html ke pure file ko object me convert kar deta he and finally model bana ke de deta he 

//1.class same ho sakti hen isliye array me value return karega
let h = document.getElementsByClassName('one')

//2. id se select karo
let h2 = document.getElementById('one')
        h2.innerText='hello bacchon!!!'
        console.log(h2)

        h2.style.color='blue'
        console.log(h2)

//3. quriselector se select karo
// let q = document.querySelector('h2')   //ye same bale 
let q = document.querySelectorAll('h2')
console.log(q)

//
for(let item of q){
    item.style.color='yellow'
}