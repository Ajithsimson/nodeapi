import express from 'express'
import movieRoutes from './routes/movies.js'


const app = express();
const PORT = 6969;

app.get("/",(req,res)=>{
    res.json({msg:"Hello Students!!"});
});

app.use("/movies",movieRoutes);

app.listen(PORT, ()=>{
    console.log(`The server is Running at http://localhost:${PORT}`);
});