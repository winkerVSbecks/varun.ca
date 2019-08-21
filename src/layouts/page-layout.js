import React from 'react';
import { Box, GlobalHeader } from '@ds';
import SEO from '@components/seo';
import { Footer } from '@components/footer';
import Layout from './layout';

export default function PageLayout({ title, children, ...props }) {
  return (
    <Layout>
      <SEO title={title} />

      <Box maxWidth={8} mx="auto" px={[3, 3, 5]} {...props}>
        <GlobalHeader />
        {children}
        <Footer />
      </Box>
    </Layout>
  );
}
