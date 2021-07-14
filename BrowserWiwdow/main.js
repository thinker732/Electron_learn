const electron=require("electron")
const app=electron.app
const BrowserWindow=electron.BrowserWindow

let win,dimwin,colorwin,frameless,parent,child

/*let param={
    "width": 600,
    "height": 400,
    "maxWidth": 500,
    "maxHeight": 500
}*/

function createwindow(){
   // win=new BrowserWindow(param)
   // dimwin=new BrowserWindow({width:600,height:400,maxWidth:500,maxHeight:500})
   // colorwin=new BrowserWindow({backgroundColor:'#7899e0'})
   // frameless=new BrowserWindow({backgroundColor:'#a099e0',frame:false})
    parent=new BrowserWindow({title:"parent"})
    child=new BrowserWindow({show:false,parent:parent,title:"child",modal:true})
    child.loadURL('https://github.com/electron/electron/issues/18397')
    child.once('ready-to-show',()=>{
        child.show(  )
    })
}

app.on('ready',createwindow);
app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit()
    }
});
