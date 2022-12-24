import express from 'express';
import functions from '../apiCalls.js';

const { getShopContent } = functions;

const router = express.Router();

export const getShop = async (req, res) => {
  try {
    const shop = await getShopContent();

    res.status(200).json(shop);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
