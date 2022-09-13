import express from 'express';

//in node, we have to specify ...js
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts );
router.post('/', createPost );
router.patch('/:id', updatePost ); //Updating existing documents; dynamic id
router.delete('/:id', deletePost);

export default router;


//http://localhost:5000/posts
