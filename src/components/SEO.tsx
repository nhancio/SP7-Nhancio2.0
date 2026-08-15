import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://nhancio.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOProps {
  title: string;
  description: string;
  /** Path only, e.g. "/blogs". Home is "/". */
  path: string;
  image?: string;
  noindex?: boolean;
}

/**
 * Per-page SEO. Sets a unique <title>, description, and canonical for each
 * route so Google no longer treats every page as a duplicate of the homepage.
 */
export default function SEO({ title, description, path, image = DEFAULT_IMAGE, noindex = false }: SEOProps) {
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
