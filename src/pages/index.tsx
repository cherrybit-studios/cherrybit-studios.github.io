import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Banner from './components/banner';
import GameList from './components/game-list';


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`The official documentation site for Cherry Bit. ${siteConfig.tagline}.`}>
      <Banner />
      <main>
        <GameList />
      </main>
    </Layout>
  );
}
