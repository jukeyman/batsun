import { generateSitemap } from '@/libs/sitemap';

export async function GET() {
  try {
    const sitemap = await generateSitemap();
    
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
} 