console.log("From index.js")

let aq=require('animequote');
let quote=document.querySelector('#quote');



setInterval(()=>{
	document.querySelector('#sentence').innerHTML='\"'+aq().quotesentence+'\"';
	document.querySelector('#author').innerHTML= aq().quotecharacter+"-"+aq().quoteanime;
},15000)