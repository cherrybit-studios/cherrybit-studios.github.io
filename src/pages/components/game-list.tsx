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

        <div className="game-logo-container">
        <div className="game-logo">
          <img src={img} />
        </div>
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
  {
    title: 'Retro Game Journal',
    img: 'img/retro_game_journal.png',
    link: 'docs/retro_game_journal',
    description: (
      <>
        Not a game, but rather a writting project.
        A journal where a brief summary and the highlights of a retro
        game is written down, it is a record of the games that I played and found out
        interesting, to a point where I want to remember it, and hopefully
        it can also be a call up to other people to play it too.
      </>
    ),
  },
];
