const butt=document.querySelector('#open')

const shell=require('electron').shell

butt.addEventListener('click',(event)=>{

	shell.showItemInFolder('X:\\debug.log')
	shell.openItem('X:\\1.jpg')
	shell.openExternal('https:\\electron.io')
})