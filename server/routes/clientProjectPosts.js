import express from 'express';

import { getClientProjectPosts, createClientProjectPosts, updateClientProjectPosts, deleteClientProjectPosts } from '../controllers/clientProjectPosts.js';


const router = express.Router();

router.get('/', getClientProjectPosts );
router.post('/', createClientProjectPosts );
router.patch('/:id', updateClientProjectPosts );
router.delete('/:id', deleteClientProjectPosts );

export default router;



