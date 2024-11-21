import axios from 'axios';

export default async function handler(req, res) {
    try {
        const response = await axios.post('https://local-listings-premium.sandbox.data-axle.com/api/1/submissions',
            {
            submissions: [
                {
                'Submission Type': 'A',
                'Company Name': 'Roadhouse Diner',
                'Location Address': '405 Memorial Drive',
                'Location City': 'Plano',
                'Location State/Province': 'TX',
                'Location Zip/Postal Code': '75074',
                'Location Phone': '206-405-9181',
                'Country': 'US'
                }
            ]
            },
            {
            headers: {
                'X-AUTH-TOKEN': '9b6b86fd53dcce77b7fa5c6e',
                'Content-type': 'application/json'
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error });
    }
}
