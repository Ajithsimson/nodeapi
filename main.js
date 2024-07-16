import express from 'express'


const app = express();
const PORT = 6969;

app.get("/",(req,res)=>{
    res.json({msg:"Hello Students!"});
});

//crud functionality

//R - reading
app.get("/movies",()=>{

});

//creating movie
app.post("/movies",()=>{

});

//u - updating movie

app.put("/movies/:id",()=>{

});

//delete
app.delete("/movie/:id", ()=>{

});

app.listen(PORT, ()=>{
    console.log(`The server is Running at http://localhost:${PORT}`);
});