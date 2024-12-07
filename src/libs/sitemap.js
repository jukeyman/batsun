import { getAllBlogs } from './getAllBlogs';
import { getAllServices } from './getAllServices';
import { getAllCaseStudies } from './getAllCaseStudies';
import { getAllTeam } from './getAllTeam';

const baseUrl = 'https://rjbusiness.com';

// Static pages that don't change frequently
const staticPages = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: 0.8
  }
];

// Generate sitemap XML
export function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (page) => `
        <url>
          <loc>${baseUrl}${page.url}</loc>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `
        )
        .join('')}
    </urlset>`;

  return sitemap;
}

// Generate robots.txt content
export function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
}