const express = require("express")
const server = express()
server.use(express.static(__dirname+'/public'))

server.listen(3030, ()=> {
    console.log('servidor corriendo')
})