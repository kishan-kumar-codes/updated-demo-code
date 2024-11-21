import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'GET') {
        const distPath = path.resolve('./public/dist');
        const files = fs.readdirSync(distPath);
        const widgetFile = files.find((file) => file.startsWith('widget-builder'));

        if (!widgetFile) {
            return res.status(500).json({ error: 'Widget file not found' });
        }

        res.status(200).json({ filename: widgetFile });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
