export const movieIndex = (req,res)=>{
    res.send("get all movie list");
    };

    export const movieCreate = (req,res)=>{
        // res.send("create a movie");
        console.log(req.body);

        return res.json(req.body);
        
    
    };

    export const movieUpdate = (req,res)=>{
        res.send("update a movie");
    };

    export const movieDelete = (req,res)=>{
        res.send("delete a movie");
    
    };