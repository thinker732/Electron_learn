const electron=require('electron')
const app=electron.app
const BrowserWindow=electron.BrowserWindow
const ipc=electron.ipcMain
const dialog=electron.dialog
let win

function  createWindow() {
    win=new BrowserWindow({
        width:800,
        height:600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }

    })

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

ipc.on('open-error-dialog',function(event){
    dialog.showErrorBox('titre','message')
    event.sender.send('open-error-dialog','main open it')
});

ipc.on('async-message',function(event){
    event.sender.send('async-reply','main open async')
});

ipc.on('sync-message',function(event){
    event.returnValue='synch reply'
});

app.on('ready', createWindow);