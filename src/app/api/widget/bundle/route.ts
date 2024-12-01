import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

// Helper function to run commands
const runCommand = (command: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                return reject(new Error(stderr || error.message));
            }
            resolve(stdout);
        });
    });
};

// Helper function to read directory files
const readDirectory = (directoryPath: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                return reject(err);
            }
            resolve(files);
        });
    });
};

export const config = {
    runtime: 'edge',
    regions: ['iad1'],
    maxDuration: 60,
};
// Handler for POST requests
export async function POST(req: NextRequest) {
    try {
        // Run the Webpack bundling command
        await runCommand('node ./node_modules/webpack/bin/webpack.js --config webpack.config.js');
        // Locate the generated file in the public/dist folder
        const distPath = path.resolve('./public/dist');
        const files = await readDirectory(distPath);
        const widgetFile = files.find((file) => file.startsWith('widget-builder'));

        if (!widgetFile) {
            return NextResponse.json(
                { error: 'Bundling succeeded but no output file found' },
                { status: 500 }
            );
        }

        console.log('Current working directory:', process.cwd());
        console.log('Files in current directory:', await readDirectory(process.cwd()));
        console.log('Environment variables:', process.env);

        return NextResponse.json({
            message: `Bundling completed: ${widgetFile}`,
        });
    } catch (error) {
        console.error(`Bundling error: ${error}`);
        return NextResponse.json(
            { error: 'Bundling failed', details: (error as Error).message },
            { status: 500 }
        );
    }
}

// Reject other HTTP methods
export function GET() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
