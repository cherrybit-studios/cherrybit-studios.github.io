import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import GameList from './components/game-list';
import { useColorMode } from '@docusaurus/theme-common';
import Banner from './components/banner';


function BannerWrapper() {
  const { colorMode } = useColorMode();

  return (
    <Banner darkMode={colorMode == 'dark'} />
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      description={`Cherry Bit. ${siteConfig.tagline}.`}
    >
      <BannerWrapper />
      <main>
        <GameList />
      </main>
    </Layout>
  );
}
