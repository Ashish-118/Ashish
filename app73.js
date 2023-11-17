const Express=require("express");

const path=require("path")
const app=Express();

const port=80

app.use('/static', Express.static('static'))

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'template_lolo'))
app.get('/',(req,res)=>{
    res.status(200).render('index.pug')
})

app.listen(port,()=>{
    console.log("we listening to the music")
})