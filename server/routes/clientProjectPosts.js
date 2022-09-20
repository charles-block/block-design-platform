import express from 'express';

import { getClientProjectPosts, createClientProjectPosts, updateClientProjectPosts } from '../controllers/clientProjectPosts.js';


const router = express.Router();

router.get('/', getClientProjectPosts );
router.post('/', createClientProjectPosts );
router.patch('/:id', updateClientProjectPosts );

export default router;



