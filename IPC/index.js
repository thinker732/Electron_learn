const electron=require('electron');
const ipc=electron.ipcRenderer

const but=document.getElementById("but");

but.addEventListener('click',function () {
    ipc.send('open-error-dialog');
});

butasynch.addEventListener('click',function () {
	console.log('async-message1')
    ipc.send('async-message')
 	console.log('async-message2')
});

butsynch.addEventListener('click',function () {
	console.log('sync-message1')
    const reply=ipc.sendSync('sync-message')
 	console.log(reply)
 	console.log('sync-message2')
});


ipc.on('open-error-dialog',function(event,arg){
   	console.log(arg)
   });

ipc.on('async-reply',(event,arg)=>{
   	console.log(arg)
   });