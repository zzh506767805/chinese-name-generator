interface BlogSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
  image?: string;
}

export default function BlogSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  url,
  image = 'https://yoursite.com/default-blog-image.jpg',
}: BlogSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished: datePublished,
    dateModified: dateModified,
    image: image,
    url: url,
    publisher: {
      '@type': 'Organization',
      name: 'Chinese Name Assistant',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yoursite.com/logo.png',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 