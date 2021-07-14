console.log('from one .js')

const electron=require("electron")
const app=electron.app
const BrowserWindow=electron.remote.BrowserWindow
const url=require('url')
const path=require('path')

const nw=document.getElementById('newwin')

nw.addEventListener('click',function(event){

	let win3=new BrowserWindow({width:400,height:400})

    //chargement des fichiers
    win3.loadURL(url.format({
        pathname:path.join(__dirname,'three.html'),
        slashes:true
    }))

    win3.webContents.openDevTools()
})