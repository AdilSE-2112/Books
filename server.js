const express = require("express");
const app = express();
const bodyParser= require("body-parser");
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))
app.use("/sign_up", (req,res)=>{
    let register = req.body.register
    let sign_in = req.body.signin

    res.send("");
})

app.get('/register',((req, res) => {
    res.sendFile(__dirname+'/register.html')
}))
app.post('/register',((req, res) => {
    res.sendFile(__dirname+'/register.html')
}))
app.get('/api',((req, res) => {
    res.sendFile(__dirname+'/api.html')
}))
app.post('/api',((req, res) => {
    res.sendFile(__dirname+'/api.html')
}))
app.get('/index',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))
app.post('/index',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))
app.get('/sign_in',((req, res) => {
    res.sendFile(__dirname+'/sign_in.html')
}))
app.post('/sign_in',((req, res) => {
    res.sendFile(__dirname+'/sign_in.html')
}))
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
/*
 * in order to fix errors:
 * 1) add a route '/home' with get method which will send 'sign_in.html' as a response
 * 2) go to the file "index.html" and change <a href="sign_in.html"> to <a href="sign_in.html">
 */