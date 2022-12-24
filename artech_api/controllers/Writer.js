import express from 'express';
import functions from '../apiCalls.js';

const { getSingleWritersContent } = functions;

const router = express.Router();

export const getWriter = async (req, res) => {
  const { id } = req.params;

  try {
    const writer = await getSingleWritersContent(id);
    console.log('🚀 ~ file: Writer.js ~ line 12 ~ getWriter ~ writer', writer);

    res.status(200).json(writer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
