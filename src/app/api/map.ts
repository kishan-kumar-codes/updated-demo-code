// pages/api/map.ts
import { NextApiRequest, NextApiResponse } from 'next';
import * as Dotenv from 'dotenv';
import { config, getJson } from 'serpapi';

Dotenv.config();
const apiKey = "1d2b448fc011d8ac31a880e4652c51c9b91cba2a139b11d69f375e08da7b28d5";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { latitude, longitude } = req.query;

  const params = {
    engine: "google_maps",
    q: `${latitude},${longitude}`,
    api_key: apiKey,
  };

  try {
    const response = await getJson(params);
    const mapUrl = response.map_url; // Adjust based on actual response structure
    res.status(200).json({ mapUrl });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching map data' });
  }
}
