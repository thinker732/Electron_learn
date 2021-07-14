const electron=require('electron')
const app=electron.app
const BrowserWindow=electron.BrowserWindow
const path=require('path')
const url=require('url')
const Menu=electron.Menu
const MenuItem=electron.MenuItem
const globalShortcut=electron.globalShortcut
const Tray=electron.Tray
const iconPath=path.join(__dirname,'logo.jpg')
let win
let tray=null

app.on('ready',()=>{
	
	tray=new Tray(iconPath)
	const template=[
		{
			label:'audio',
			submenu:[
				
			{
				label:'low',
				type:'radio',
				checked:true
			},
			{
				label:'high',
				checked:true
			}
				
				]
		}
		,
		{
			label:'video',
			submenu:[
			{
			  label:'1288x720',
			  type:'radio',
			  checked:true
			},

			{
			  label:'1920x1000',
			  type:'radio',
			}

			]
		}
	]

	const ctxMenu=Menu.buildFromTemplate(template)
	tray.setContextMenu(ctxMenu)
	tray.setToolTip('tray Application')
});

app.on('will-quit',()=>globalShortcut.unregisterAll());

app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit()
    }
});