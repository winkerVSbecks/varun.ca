import React from 'react';
import { graphql } from 'gatsby';
import { PageHeader } from '@ds';
import PageLayout from '@layouts/page-layout';
import { TalkList } from '@components/talk-list';

const Speaking = ({
  data: {
    speaking: { talks },
  },
}) => (
  <PageLayout title="Speaking" pathname="/speaking" maxWidth={7} px={3}>
    <PageHeader title="Speaking" />

    <main>
      <TalkList talks={talks} />
    </main>
  </PageLayout>
);

export const pageQuery = graphql`
  query Speaking {
    speaking: allSpeakingJson {
      talks: nodes {
        id
        link
        title
        conference
        featured
        slides
      }
    }
  }
`;

export default Speaking;
