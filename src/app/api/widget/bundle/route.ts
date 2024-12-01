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
        return true
    } catch (error) {
    }
}

// Reject other HTTP methods
export function GET() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
