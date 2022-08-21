import express from 'express';

import { getClientProjectPosts, createClientProjectPosts } from '../controllers/clientProjectPosts.js';


const router = express.Router();

router.get('/', getClientProjectPosts );
router.post('/', createClientProjectPosts );

export default router;



