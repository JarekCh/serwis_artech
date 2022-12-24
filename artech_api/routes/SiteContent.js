import express from 'express';
import apiCache from 'apicache';
import { getSite } from '../controllers/SiteContent.js';

const router = express.Router();

// Init cache
let cache = apiCache.middleware;

router.get('/', cache('2 minutes'), getSite);

export default router;
