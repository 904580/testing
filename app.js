// const calculateSum =(a,b)=>{
//     return a+b;
// }

// module.exports= calculateSum;

const express = require('express');
const app = express();
app.use(express.json());



app.get('/api',(req,res)=>{
    res.status(200).json({message:"sucess"});

})

app.post("/api",(req,res)=>{

    console.log(req.body);
    const data=[{name:"John"}]

    res.status(200).json({message:"Success",data})
})

module.exports = app;