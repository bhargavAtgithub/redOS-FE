import Head from 'next/head';

const Meta = ({ meta_title, meta_description, meta_logo }) => {
    const title = meta_title || 'Bhargav Reddy';
    const description =
        meta_description ||
        'This is my playground, experiments lab and portfolio.';
    const logo = meta_logo || '/favicons/favicon.ico';

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href={logo} />
            <link rel="shortcut icon" type="image/x-icon" href={logo} />
            <link rel="apple-touch-icon" sizes="180x180" href={logo} />
            <meta name="theme-color" content="#FF3737" />

            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={logo} />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={'/assets/b-red-lg-light.png'} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@hidden_stack" />
            <meta name="twitter:creator" content="@hidden_stack" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={'/assets/b-red-lg-light.png'} />
        </Head>
    );
};

export default Meta;
