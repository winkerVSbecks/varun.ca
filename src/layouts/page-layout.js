import React from 'react';
import { Box } from '@ds';
import { Footer } from '@components/footer';
import { GlobalHeader } from '@components/global-header';
import Layout from './layout';

export default function PageLayout({ title, children, ...props }) {
  return (
    <Layout title={title}>
      <Box maxWidth={8} mx="auto" px={[3, 3, 5]} {...props}>
        <GlobalHeader />
        {children}
        <Footer />
      </Box>
    </Layout>
  );
}
