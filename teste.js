const express = require('express')
const app = express()
const ytdl = require('ytdl-core')

app.get("/query", (req, res) => {
    let url = req.query["teste"]
    if(url){
        res.send(`url: ${url}`)
    }else{
        res.send("Nenhuma url foi passada")
    }
    res.send(`url: ${url}`)
})

app.listen(8585, () => {console.log("Ok")})