const a=require("express");
const path=require("path");
const app=a();

const port=3000;


app.get("/register",(req,res)=>{
res.sendFile(path.join(__dirname,'reg.htm'))
});

app.listen(port,()=>{
    console.log(`we are listening at the http:://localhost:${port}`)
})


// function register(){
// let variable=document.getElementById("user").value;


// }
