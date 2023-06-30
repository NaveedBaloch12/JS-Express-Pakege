const express = require('express');
 
const app = express();
port = 80;

app.get("/", (request ,responce) =>{
    responce.send('This is home page of my website.');
} )
app.post("/", (request ,responce) =>{
    responce.send('This is home page of my website. By post Requset');
} )
app.get("/about", (request ,responce) =>{
    responce.send('This is about my home page of my website.');
} )
app.get("/contact", (request ,responce) =>{
    responce.send('This is contact page of my website.');
} )
app.get("/project", (request ,responce) =>{
    responce.send('This is  my project page of my website.');
} )
app.get("/any", (request ,responce) =>{
    responce.status(404).send('This is not found.');
} )

app.listen(port, ()=>{
    console.log(`App is running om ths port ${port}`)
})