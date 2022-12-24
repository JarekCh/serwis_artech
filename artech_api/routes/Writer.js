import express from 'express';

import { getWriter } from '../controllers/Writer.js';

const router = express.Router();

router.get('/:id', getWriter);

export default router;
