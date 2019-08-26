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
            title
            author
          }
        }
      }
    `
  );

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: description,
          },
          // {
          //   property: `og:title`,
          //   content: title,
          // },
          // {
          //   property: `og:description`,
          //   content: description,
          // },
          // {
          //   property: `og:type`,
          //   content: `website`,
          // },
          // {
          //   name: `twitter:card`,
          //   content: `summary`,
          // },
          // {
          //   name: `twitter:creator`,
          //   content: site.siteMetadata.author,
          // },
          // {
          //   name: `twitter:title`,
          //   content: title,
          // },
          // {
          //   name: `twitter:description`,
          //   content: description,
          // },
        ].concat(meta)}
      />
      <Facebook
        desc={description}
        image={image}
        title={title}
        type={article ? 'article' : 'website'}
        url={`${site.siteMetadata.siteUrl}${pathname}`}
        locale="en_CA"
        name={site.siteMetadata.title}
      />
      <Twitter
        title={title}
        image={image}
        desc={description}
        username={site.siteMetadata.author}
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
  desc,
  image,
  locale,
}) => (
  <Helmet>
    {name && <meta property="og:site_name" content={name} />}
    <meta property="og:locale" content={locale} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={desc} />
  </Helmet>
);

const Twitter = ({
  type = 'summary_large_image',
  username,
  title,
  desc,
  image,
}) => (
  <Helmet>
    {username && <meta name="twitter:creator" content={username} />}
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={desc} />
  </Helmet>
);
