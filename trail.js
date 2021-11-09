

const person = {name:'eyad',age:'3'}
 const personjson = JSON.stringify(person)
 

 const fs =require('fs')
 fs.writeFileSync('trail.json',personjson)
 console.log(fs.readFileSync('trail.json').toString())
 const personobject=JSON.parse(personjson)
 console.log(personobject)
 

