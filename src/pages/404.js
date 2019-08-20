import React from 'react';
import Layout from '@layouts/layout';
import SEO from '@components/seo';
import { Skeletor } from '@ds';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page not found" />

    <div className="vh-100 bg-near-white flex items-center">
      <section className="measure-narrow measure-ns center gray">
        <header className="flex items-end justify-center">
          <Skeletor
            className="mr3 f1 f-headline-ns"
            width="1.6em"
            height="1.6em"
          />
          <h1 className="f1 f-headline-ns lh-solid ma0 mb1 mb3-ns">404</h1>
        </header>

        <p className="f5 f4-ns lh-copy mb0 mt3 mt4-ns tc">
          Sorry, we have misplaced that URL or it is pointing to something that
          doesn't exist. Head{' '}
          <a className="link dim gray fw6" href="{{ '/' | absolute_url }}">
            back home
          </a>{' '}
          to try finding it again.
        </p>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
