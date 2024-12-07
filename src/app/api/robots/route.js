import { generateRobotsTxt } from '@/libs/sitemap';

export async function GET() {
  try {
    const content = generateRobotsTxt();
    
    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error generating robots.txt:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
} 