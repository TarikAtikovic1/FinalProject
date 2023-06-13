import { NextResponse } from 'next/server';

export async function GET() {
    const response = await fetch('https://api.airtable.com/v0/appE0R7Qzmh2Cm88e/movies', {
        headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
        },
        next: {
            revalidate: 10,
        }
    });
    const data = await response.json();

    return NextResponse.json(data.records);
}