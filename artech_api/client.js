import sanityClient from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config();

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: 'v1',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});
