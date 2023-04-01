import express from "express";
const app = express()

app.get('/', (req, res) => {
    res.status(200).json({msg: "OK"})
})

import "./database.js"

app.listen(3000, () => {
    console.log("App in port 3000")
})