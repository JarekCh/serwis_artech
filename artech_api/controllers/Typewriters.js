import express from 'express';
import functions from '../apiCalls.js';

const { getTypewritersContent } = functions;

const router = express.Router();

export const getTypeWriters = async (req, res) => {
  let low = req.query.lowRangeFilter;
  let high = req.query.highRangeFilter;
  try {
    const writers = await getTypewritersContent(low, high);

    res.status(200).json(writers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
