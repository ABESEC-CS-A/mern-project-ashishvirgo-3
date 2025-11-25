import express from "express";
const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
 res.send("Home Page")
})

app.get("/:id",(req,res)=>{
    const id=req.params.id;
 res.status(200).json({message: "find id",data: id})
})

app.post("/add",(req,res)=>{
    const name=req.body.name;
    const age=req.body.age;
    const obj={name,age};
     res.status(200).json({message: "user added",data: obj})
})
const port=4001;
app.listen(port,()=>{
    console.log(`Server is working on port ${port}`)
})