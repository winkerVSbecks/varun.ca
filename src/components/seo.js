/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export function SEO({
  description,
  lang,
  meta,
  title,
  image,
  pathname = '/',
  article = false,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            siteTitle: title
            author
          }
        }
      }
    `
  );

  const { siteTitle, siteUrl, author } = site.siteMetadata;
  const defaultImage = '/triangle.png';

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${siteTitle}`}
        link={[
          {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://rsms.me/inter/inter.css',
          },
          {
            rel: 'webmention',
            href: 'https://webmention.io/varun.ca/webmention',
          },
          {
            rel: 'pingback',
            href: 'https://webmention.io/varun.ca/xmlrpc',
          },
        ]}
        meta={[
          {
            name: `description`,
            content: description,
          },
        ].concat(meta)}
      />
      <Facebook
        description={description}
        image={`${siteUrl}${image || defaultImage}`}
        title={title}
        type={article ? 'article' : 'website'}
        url={`${siteUrl}${pathname}`}
        locale="en_CA"
        name={siteTitle}
      />
      <Twitter
        title={title}
        image={`${siteUrl}${image || defaultImage}`}
        description={description}
        username={author}
      />
    </>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

const Facebook = ({
  url,
  name,
  type = 'website',
  title,
  description,
  image,
  locale,
}) => (
  <Helmet>
    {name && <meta property="og:site_name" content={name} />}
    <meta property="og:locale" content={locale} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={description} />
  </Helmet>
);

const Twitter = ({
  type = 'summary_large_image',
  username,
  title,
  description,
  image,
}) => (
  <Helmet>
    {username && <meta name="twitter:creator" content={username} />}
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={description} />
  </Helmet>
);
