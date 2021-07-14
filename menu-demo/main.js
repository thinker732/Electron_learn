
//inclure les modules
const {app,BrowserWindow,Menu,MenuItem}=require('electron')
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

//fermeture de la page 
win.on('closed',()=>{
    win=null
})

}


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


app.on('ready', function(){
    createWindow();
    const template=[
        {
            label:'test',
            submenu:[
                {
                    label:'submenu1',
                    click:function(){
                        console.log('effect 1')
                    }
                }
            ]
        },

        {
            label: 'edit',
            submenu: [
                {role:"selectall"},
                {role:"copy"},
                {role:"paste"},
                {role:"cut"},
                {role:"copy"},
                {role:"delete"},
                {role:"undo"}
            ]
        },

        {
            label:'cc',
            submenu:[
         {label: 'a', position: 'endof=letters'},
         {label: '1', position: 'endof=numbers'},
         {label: 'b', position: 'endof=letters'},
         {type: 'separator'},
         {label: '2', position: 'endof=numbers'},
         {label: 'c', position: 'endof=letters'},
         {label: '3', position: 'endof=numbers'}
        ]
        },

        {
            label:'help',
            click:()=>{
                electron.shell.openExternal('https//electron.atom.io')
            }
        }
    ]

    /*Ajouter le template et creer le menu*/
    const menu=Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    const ctxMenu=new Menu()

    ctxMenu.append(new MenuItem({
        label:'hello',
        click:()=>{
            console.log('MenuItem')
        }
        }))
     ctxMenu.append(new MenuItem(
        {role:'selectall'}
     ))

    win.webContents.on('context-menu',(e,params)=>{
        ctxMenu.popup(win,params.x,params.y)
    })
})