// let myImage = document.querySelector('img');
// myImage.onclick = function(){
//   let mySrc = myImage.getAttribute('src');
//   if(mySrc == 'https://i1-vnexpress.vnecdn.net/2021/01/17/bac1773-1610850131-2324-1610850139.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=UUvwUGkTQJtjxMKMcqKqUQ') {
//     myImage.setAttribute('src','https://i1-kinhdoanh.vnecdn.net/2021/01/17/goldpriceindiareuters324-16108-8648-8461-1610833999.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=cKzJzRzJt6mHwiN_OFdFNA')
//   } else {
//     myImage.setAttribute('src','https://i1-vnexpress.vnecdn.net/2021/01/17/bac1773-1610850131-2324-1610850139.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=UUvwUGkTQJtjxMKMcqKqUQ')
//   }
// }

let myButton = document.querySelector('button');
let myTitle = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myTitle.textContent = 'Yes hi' + myName;
  }
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myTitle.textContent = 'HI Hi' + storedName;
}

myButton.onclick = function() {
  setUserName();
}