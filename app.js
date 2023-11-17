const Express=require("express");

const path=require("path")
const app=Express();

const port=80

app.use('/static', Express.static('static'))

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'template_lolo'))

app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello Ashish!!  there and thanks for telling me how to use pubG!' })
});

app.get('/',(req,res)=>{
    res.send("Hello, this is the homepage of my website ")
})

app.get('/aboutus',(req,res)=>{
    res.send("This is the page which contains About us ")
})

app.post('/aboutus',(req,res)=>{
    res.status(400).send("I am trying postman using About us ")
})

app.listen(port,()=>{
    console.log("We are listening to the era of this world")
})
