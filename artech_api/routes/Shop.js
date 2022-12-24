import express from 'express';
import apiCache from 'apicache';
import { getShop } from '../controllers/Shop.js';

const router = express.Router();

// Init cache
let cache = apiCache.middleware;

router.get('/', cache('5 minutes'), getShop);

export default router;
