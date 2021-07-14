const electron=require('electron')
const app=electron.app
const BrowserWindow=electron.BrowserWindow
const path=require('path')
const url=require('url')
const Menu=electron.Menu
const MenuItem=electron.MenuItem
const globalShortcut=electron.globalShortcut

let win
 function createwindow(){

win=new BrowserWindow({width:800,height:800,
	webPreferences:{
		nodeIntegration: true,
		contextIsolation:false,
	}
})

win.webContents.openDevTools()
win.loadURL(url.format({
	pathname:path.join(__dirname,'index.html'),
	protocol:'file',
	slashes:true
}))

 win.on('closed',()=>{
        win=null;
    });
}

app.on('ready',()=>{
	createwindow()
	const template=[
		{
			label:'edit',
			submenu:
			[
				{role:'copy'},
				{role:'cut'},
				{role:'paste'},
				{role:'undo'},
				{role:'redo'},
				{role:'delete'}
			]
		},
		{
			label:'help',
			submenu:[
				{
				label:'about',
				click:()=>{
					electron.shell.openExternal('https://electron.atom.io')
				},
				accelerator:'shift+H'
				}
			]
		}	
	]

	const menu=Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    const ctxMenu=new Menu()

    ctxMenu.append(new MenuItem({
        label:'hello',
        click:()=>{
            console.log('MenuItem')
        }
        }))

    win.webContents.on('context-menu',(e,params)=>{
        ctxMenu.popup(win,params.x,params.y)
    })

globalShortcut.register('1',function(){
	win.show()
})
});

app.on('will-quit',()=>globalShortcut.unregisterAll());

app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit()
    }
});