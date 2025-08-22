import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const logFilePath = join(process.cwd(), 'contact-submissions.json');
    
    if (!existsSync(logFilePath)) {
      return NextResponse.json({ submissions: [] });
    }
    
    const fileContent = readFileSync(logFilePath, 'utf8');
    const submissions = JSON.parse(fileContent);
    
    // Sort by timestamp, newest first
    submissions.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('Error reading submissions:', error);
    return NextResponse.json(
      { error: 'Failed to load submissions' },
      { status: 500 }
    );
  }
}