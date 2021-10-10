import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
};

export const Seo: React.FC<Props> = ({ title, description }) => {
  const TITLE = 'Koky Tech';
  const DEFAULT_DESCRIPTION = 'mainly write about frontend dev matters';

  return (
    <Head>
      <title>{title || TITLE}</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <meta property="og:title" content={title || TITLE} />
      <meta property="og:site_name" content={title || TITLE} />
      <meta
        property="og:description"
        content={description || DEFAULT_DESCRIPTION}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
    </Head>
  );
};
