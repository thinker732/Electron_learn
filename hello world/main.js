/*doc*/

/*
const electron=require("electron")
const app=electron.app
const BrowserWindow=electron.BrowserWindow
const path=require("path")
const url=require("url")
let win

function  createWindow() {
    win=new BrowserWindow({width:800,height:600})
    win.webContents.openDevTools();
    win.loadFile('index.html')
    win.on('closed',()=>{
        win=null;
    });

    app.on('window-all-closed',()=>{
        if(process.platform!=='darwin'){
            app.quit()
        }
    });

}

app.on('ready', createWindow)
*/


/***********************
        CODE STYLE
***********************/

console.log(`it's ok i'm learning electron`)


//inclure les modules
const {app,BrowserWindow}=require('electron')
const path=require('path')
const url=require('url')

let win

//fonction de creation des fenetres
function createWindow(){

win =new BrowserWindow


//chargement du fichier
win.loadURL(url.format({
    pathname:path.join(__dirname,'index.html'),
    protocol:'file',
    slashes:true

}))

//afficher les developpeurs tools du navigateur
win.webContents.openDevTools()

//fermeture de la page 
win.on('closed',()=>{
    win=null
})

}

//se lance quand l'app ellectron est prete
app.on('ready',createWindow)

//sortir quand toutes les fenetres sont fermes1
app.on('window-all-closed',()=>{

    if (process.platform !=='darwin') {
        app.quit()
    }
})


app.on('activate',()=>{
//for macs
    if(win=null)
        createWindow()
})
