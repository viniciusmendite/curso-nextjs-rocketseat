import Head from 'next/head';

interface ISEOProps {
  title: string;
  description?: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
}

export default function SEO({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true
}: ISEOProps) {
  
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '| DevCommerce' : ''}`;
  const pageImage = image ? `${process.env.NEXT_PUBLIC_API_URL}/${image}` : null;

  return (
    <Head>
      <title>{pageTitle}</title>

      { description && <meta name="description" content={description} /> }
      { pageImage && <meta name="image" content={pageImage} /> }

      { !shouldIndexPage && <meta name="robots" content="noindex,nofollow" /> } 
    </Head>
  );
}