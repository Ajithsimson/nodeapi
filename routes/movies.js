import express from 'express'

const router = express.Router();

//crud functionality

//R - reading
router.get("/",(req,res)=>{
res.send("get all movie list");
});

//creating movie
router.post("/",(req,res)=>{
    res.send("create a movie");

});

//u - updating movie

router.put("/:id",(req,res)=>{
    res.send("update a movie");
});

//delete
router.delete("/:id", (req,res)=>{
    res.send("delete a movie");

});

export default router;
