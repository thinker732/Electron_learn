console.log("From main.js")

//include module
const {app,BrowserWindow}=require('electron')
const url=require('url')
const path=require('path')

let win

//fonction de creation des fenetres
function createWindow(){

       
    win=new BrowserWindow({
        width:500,
        height:200,
        frame:false,
        show:false,
         webPreferences: {
            nodeIntegration: true,
            contextIsolaton:false
        }

    })

    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    }))

    win.on('closed',()=>{
            win=null
        })

win.once('ready-to-show',()=>{
    win.show()
})


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
