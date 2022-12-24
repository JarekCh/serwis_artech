import express from 'express';
import functions from '../apiCalls.js';

const { getSiteContent } = functions;

const router = express.Router();

export const getSite = async (req, res) => {
  try {
    const site = await getSiteContent();

    res.status(200).json(site);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
