import express from 'express'
import { movieCreate, movieIndex, movieUpdate, movieDetail, movieDelete } from '../controller/movie.controller.js';

const router = express.Router();

//crud functionality

//R - reading
router.get("/", movieIndex);

router.get("/:id", movieDetail)

//creating movie
router.post("/", movieCreate);

//u - updating movie

router.put("/:id",movieUpdate);

//delete
router.delete("/:id",movieDelete );

export default router;
