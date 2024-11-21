import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

// Handler for GET requests
export async function GET(req: NextRequest) {
    try {
        // Define the path to the 'public/dist' directory
        const distPath = path.resolve('./public/dist');
        
        // Read all files in the 'dist' directory
        const files = fs.readdirSync(distPath);
        
        // Find the file that starts with 'widget-builder'
        const widgetFile = files.find((file) => file.startsWith('widget-builder'));
        
        // If no matching file is found, return an error message
        if (!widgetFile) {
            return NextResponse.json(
                { error: 'Widget file not found' },
                { status: 404 }
            );
        }

        // Read the content of the found file
        const fileContent = fs.readFileSync(path.join(distPath, widgetFile), 'utf-8');

        // Return the file content in the response
        return NextResponse.json({ filename: widgetFile, content: fileContent });
    } catch (error) {
        // Handle any unexpected errors
        console.error(`Error reading widget file: ${(error as Error).message}`);
        return NextResponse.json(
            { error: 'Failed to retrieve widget file' },
            { status: 500 }
        );
    }
}
