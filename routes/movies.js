import express from 'express'
import { movieCreate, movieIndex, movieUpdate } from '../controller/movie.controller.js';

const router = express.Router();

//crud functionality

//R - reading
router.get("/", movieIndex);

//creating movie
router.post("/", movieCreate);

//u - updating movie

router.put("/:id",movieUpdate);

//delete
router.delete("/:id",movieUpdate );

export default router;
