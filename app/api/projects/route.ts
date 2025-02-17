export async function GET() {
    return new Response(
      JSON.stringify({ message: 'Projects API Route' }),
      { status: 200 }
    );
  }