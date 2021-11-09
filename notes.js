
const fs =require('fs')


const addNote =(title,body)=>{
    const notes = loadNotes()
    const daplicateTitle = notes.filter((note)=>{

        return note.title===title

    })
    console.log(daplicateTitle)
    if(daplicateTitle.length===0){
    notes.push({
        title:title,
        body:body

    })

    saveNotes(notes)
console.log('save sucssefuly')

    }
    else{
        console.log("error exsesting note")
    }
}

const loadNotes = ()=>{
    try{
const dataBuffer = fs.readFileSync('notes.json').toString
return JSON.parse(dataBuffer)
    }

    catch (e){
        return [];

    }

}
const saveNotes = (notes) =>{
    const saveData = JSON.stringify(notes)  // [{"title":'aaa',"body":'aasd'},{"title":'titl2',"body":'body2'}]
    fs.writeFileSync('notes.json',saveData)
}

const removeNote =(title)=>{
    const notes = loadNotes()
    const notesTokeep=notes.filter((note)=>{
        return note.title !=title

    })
    console.log(notesTokeep)
    saveNotes(notesTokeep)
    console.log('removed')
}

const readNote = (title)=>{
    const notes = loadNotes ()
    const note = notes.find((note)=>{
        return note.title===title
    })
    console.log(note)
}

const listNotes = ()=>{
    const notes = loadNotes()
    const note = notes.forEach((note)=>{
        return note.title
    })
    console.log(note)

}

module.exports = {
    addNote,
    removeNote,
    readNote,listNotes
}