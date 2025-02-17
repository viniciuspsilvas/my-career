export async function GET() {
    return new Response(
      JSON.stringify({ message: 'Blog API Route' }),
      { status: 200 }
    );
  }