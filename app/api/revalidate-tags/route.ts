import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const tags: string[] = await req.json();

    tags.forEach((t) => {
      revalidateTag(t);
      console.log(`revalidateTag ${t}`);
    });

    return NextResponse.json(
      {
        now: Date.now(),
        revalidated: true,
        tags,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        message: 'Invalid payload',
        now: Date.now(),
        revalidated: false,
      },
      { status: 400 },
    );
  }
}
