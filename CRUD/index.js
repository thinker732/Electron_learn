const fs=require('fs')
const path=require('path')

btnCreate=document.querySelector('#btnCreate')
btnRead=document.querySelector('#btnRead')
btnDelete=document.querySelector('#btnDelete')
fileName=document.querySelector('#fileName')
fileContents=document.querySelector('#fileContents')

 let pathName=path.join(__dirname,'Files')

 btnCreate.addEventListener('click',()=>{

 	let file=path.join(pathName,fileName.value)
 	let contents=fileContents.value

 	fs.writeFile(file,contents,(err)=>{

 		if(err){
 			return console.log(err)
 		}

 		console.log('file was create')
 	})

 	btnRead.addEventListener('click',()=>{
 		file=path.join(pathName,fileName.value)

 		fs.readFile(file,(err,data)=>{
 			if(err){
 			return console.log(err)
 			}

 		fileContents.value=data
 		console.log('file was read')

 		})
 	})

 		btnDelete.addEventListener('click',()=>{
 		file=path.join(pathName,fileName.value)

 		fs.unlink(file,(err)=>{
 			if(err){
 			return console.log(err)
 			}

 		fileContents.value=''
 		fileName.value=''
 		console.log('file was delete')

 		})
 	})
 })