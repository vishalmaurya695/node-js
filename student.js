const fs = require('fs')
console.log('........................student data management system........................')
let option = process.argv
let inputdata = `${option[2]} \t\t\t${option[3]}\n`

if(option[2] != 'display'){
    fs.appendFileSync('student-data.txt',inputdata)
    console.log(`details of ${option[2]} has been saved successfully`)
}

else{
    let data = fs.readFileSync('student-data.txt')
    console.log(''+data)
}
