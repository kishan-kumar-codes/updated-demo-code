import axios from 'axios';
export default async function handler(req, res) {
    try {
        const response = await axios.get('https://staging-api.ldex.co/listings-management/healthz/api',
               {
                 headers: {
                  'apikey': 'vxNnXRtLgETFV6VJiUQN30jWIVldiOZd',
                  'Content-type': 'application/json',
                  'Accept': 'application/json'
                  }
              });
        res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error });
    }
}