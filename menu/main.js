
const electron=require('electron')
const app=electron.app
const BrowserWindow=electron.BrowserWindow
const Menu=electron.Menu
let win

function  createWindow() {
    win=new BrowserWindow({width:800,height:600}) 
   // win.webContents.openDevTools();
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
})