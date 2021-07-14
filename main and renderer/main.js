console.log("From main.js")

//include module
const {app,BrowserWindow}=require('electron')
const url=require('url')
const path=require('path')

BrowserWindow.nodeIntegration=true
BrowserWindow.contextIsolation=false

let win,win1,win2;

//fonction de creation des fenetres
function createWindow(){

        //declaration des fenetres
    //win=new BrowserWindow({width:800,height:600})
    win1=new BrowserWindow({
        width:600,
        height:400,
        webPreferences: {
            nodeIntegration: true
        }
    })
   // win2=new BrowserWindow({width:600,height:400})

    //chargement des fichiers
    win1.loadURL(url.format({
        pathname:path.join(__dirname,'one.html'),
        protocol:'file',
        slashes:true
    }))

/*
    win2.loadURL(url.format({
        pathname:path.join(__dirname,'two.html'),
        slashes:true
    }))
*/
    //afficher developpeurs tools
    win1.webContents.openDevTools()
  //  win2.webContents.openDevTools()
    
    //Quand la fentre est femé
   win1.on('closed',()=>{
    win1=null
        })
/*
   win2.on('closed',()=>{
    win2=null
        })
*/

}


app.on('ready',createWindow)

app.on('window-all-closed',()=>{

    if (process.platform !=='darwin') {
        app.quit()
    }
})

app.on('activate',()=>{

    if(win=null)
        createWindow()
})
