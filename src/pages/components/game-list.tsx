import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import styles from '../index.module.css';

export default function GameList(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row games">
          {Games.map((props, idx) => (
            <GameInfo key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GameInfo({ title, img, description, link }: Game) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link}>
        <div className="text--center">
          <img src={img} width="200" />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

type Game = {
  title: string;
  img: string;
  link: string;
  description: JSX.Element;
};

const Games: Game[] = [
  {
    title: 'Paint Buddy',
    img: 'img/paint_buddy.png',
    link: 'docs/paint_buddy',
    description: (
      <>
        A mix of a game and pixel art editor, play as Buddy a charming brush
        that likes to paint and create the most amazing pixel sprites. Play to
        relax, to compete and to share your art with the community!
      </>
    ),
  },
];
