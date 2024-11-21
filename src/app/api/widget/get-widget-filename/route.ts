import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

// Handler for GET requests
export async function GET(req: NextRequest) {
    try {
        const distPath = path.resolve('./public/dist');
        const files = fs.readdirSync(distPath);
        const widgetFile = files.find((file) => file.startsWith('widget-builder'));

        if (!widgetFile) {
            return NextResponse.json(
                { error: 'Widget file not found' },
                { status: 500 }
            );
        }

        return NextResponse.json({ filename: widgetFile });
    } catch (error) {
        console.error(`Error reading widget file: ${(error as Error).message}`);
        return NextResponse.json(
            { error: 'Failed to retrieve widget file' },
            { status: 500 }
        );
    }
}

// Reject other HTTP methods
export function POST() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export function PUT() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export function DELETE() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
