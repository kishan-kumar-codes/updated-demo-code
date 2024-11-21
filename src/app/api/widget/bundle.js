import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        exec('npx webpack --config webpack.config.js', (error, stdout, stderr) => {
            if (error) {
                console.error(`Bundling error: ${error.message}`);
                return res.status(500).json({ error: 'Bundling failed' });
            }

            // Read the generated filename from the output directory
            const distPath = path.resolve('./public/dist');
            const files = fs.readdirSync(distPath);
            const widgetFile = files.find((file) => file.startsWith('widget-builder'));

            if (!widgetFile) {
                return res.status(500).json({ error: 'Bundling succeeded but no output file found' });
            }

            console.log(`Bundling stdout: ${stdout}`);
            return res.status(200).json({ message: `Bundling completed: ${widgetFile}` });
        });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
