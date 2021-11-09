// const fs = require('fs')
// fs.writeFileSync('notes.txt','hello')

// console.log(fs.readFileSync('notes.txt').toString())
// fs.appendFileSync('notes.txt', 'data to append')
// const x=require('./data')
// console.log(x.add(5,5))
// console.log(x.name)

// const validator = require('validator')
// console.log(validator.isEmal('tharaa'))
const yargs =require('yargs')
const notes=require('./notes')
yargs.command({
         command:'add',
         describe:'add node',
         bilder:{
             title:{
                 describe:'this is title of note to be added',
                 type:'strind',
                 demandoption:true
             },
             
         },
         handler:(argv)=>{
            notes.addNote(argv.title,argv.body)
         }

})

yargs.command({
      command:'delete',
      describe:'delete node',
      bilder:{
        title:{
            describe:'this is title of note to be deleted',
            type:'strind',
            demandoption:true
        },
        body:{
           describe:'this is body of note to be deleted',
           type:'strind',
           demandoption:true
        }
    },
      handler:(argv)=>{
          notes.removeNote(argv.title)

      }
})




yargs.command({
    command:'read',
    describe:'read node',
    bilder:{
        title:{
            describe:'this is title of note to be readed',
            type:'strind',
            demandoption:true
        },
       
    },
    handler:(argv)=>{
        notes.readNote(argv.body)
    }
})

yargs.command({
    command:'list',
    describe:'list node',
    handler:(argv)=>{
        console.log(argv.title)
    }
})
console.log(yargs.argv)