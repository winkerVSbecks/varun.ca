import React from 'react';
import { Box } from 'ds';
import SEO from 'components/seo';
import { Footer } from 'components/footer';
import { PageHeader } from 'components/page-header';
import Layout from './layout';

export default function PageTemplate({ title, children, ...props }) {
  return (
    <Layout>
      <SEO title={title} />

      <Box maxWidth={7} mx="auto" px={[3, 3, 3]} {...props}>
        <PageHeader />
        {children}
        <Footer px={3} />
      </Box>
    </Layout>
  );
}
