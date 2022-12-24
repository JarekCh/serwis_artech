import express from 'express';

import { getTypeWriters } from '../controllers/Typewriters.js';

const router = express.Router();

router.get('/', getTypeWriters);

export default router;
