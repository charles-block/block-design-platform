import express from 'express';

//in node, we have to specify ...js
import { getPosts, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts );
router.post('/', createPost );
router.patch('/:id', updatePost ); //Updating existing documents; dynamic id


export default router;


//http://localhost:5000/posts
