const Button=document.getElementsByClassName("navbar")[0]
const nan=document.getElementsByClassName("navbar-links")[0]
Button.addEventListener('click',()=>{
    nan.classList.toggle('active')
})
nan.addEventListener('click',()=>{
    nan.classList.remove('active')
})
// local time
var x= setInterval(function(){ const d = new Date();
    let h = d.getHours(); 
    let m = d.getMinutes(); 
    let  s = d.getSeconds(); 
    document.getElementById("time").innerHTML = `${h}:${m}:${s}`; },1000);



onclick=()=>{
    document.getElementById('backend').innerHTML="every thing with JavaScript"
}


// select all elements with the class name "img-hover"
let images = document.getElementsByClassName("pic");
  for (let i = 0; i < images.length; i++) {
    images[0].onmouseover = function() {
      this.src = "https://liveimages.algoworks.com/new-algoworks/wp-content/uploads/2016/03/05134032/Why-use-ExpressJS-over-NodeJS.jpeg";
    }
    images[1].onmouseout = function() {
      this.src = "https://miro.medium.com/v2/resize:fit:2000/1*y6C4nSvy2Woe0m7bWEn4BA.png";
    }
  }

// add an element
let btn = document.createElement("button");
btn.textContent = "button added by JS.";
document.getElementsByClassName('box 2')[0].appendChild(btn);

//add css to button  using js
btn.style.backgroundColor="#ff5722";
btn.style.color="white";
btn.style.borderRadius="8px";


//add elements in to lis in generanl way
addlanguage=(language_name)=>{
  const li=document.createElement('li')
  li.innerHTML=`${language_name}`
  document.querySelector('.language').appendChild(li)
}

addlanguage("python");
addlanguage("java");

//add element in optimized way
const optiaddlang = (lang_name) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(lang_name));
  document.querySelector('.language').appendChild(li);
}

optiaddlang("typescript");

//edit

let sec=document.querySelector('.language li:nth-child(3)')
//console.log(sec);//java
const newli=document.createElement('li')
newli.textContent= 'Kotlin'
sec.replaceWith(newli) //java will replace with kotlin

//edit can also dun by using innerHTML / outerHTML
const last=document.querySelector(".language li:nth-child(4)")
//console.log(last);typescript
last.outerHTML= '<li>react-Native</li>'

// removeing an element from the the list of  languages
const rem=document.querySelector(".language li:last-child")
console.log(rem);
rem.remove()

//event
//type, timestamp, defaultPrevenction
//target, toElement. srcElement,currentTarget
//clientX,clientY,screenX,screenY
//altkey, ctrlkey, shiftkey, keyCode

document.getElementById('bulb').addEventListener( "click", function(){
  // change src
  alert('the bulb will on now')
  this.src="https://www.shutterstock.com/shutterstock/videos/1061184097/thumb/2.jpg?ip=x480";
  
})

document.getElementById('dog').addEventListener('click', ()=>{
  alert( "This is a dog" )
})