import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest): Promise<NextResponse> {
    const response = NextResponse.redirect('https://partners.nubestaging.com/applications/authentication/9866', {
        status: 302,
    });

    response.headers.set('Location', 'https://partners.nubestaging.com/applications/authentication/9866');

    return response;
}
