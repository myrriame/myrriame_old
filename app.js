const express=require("express")
const app=express()


app.use(express.static("public"))


app.get("/", function (req, res) {
    res.sendFile('index.html', { root: __dirname })
})


app.listen(process.env.PORT||8000,
    () => console.log("Server is running..."));