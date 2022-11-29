import React from 'react';
import styles from '../index.module.css';

export default function Banner(props: { darkMode?: boolean }) {
  return (
    <div
      className={
        props.darkMode ? styles.bannerDarkMode : styles.bannerLightMode
      }
    >
      <img src="img/banner.png" alt="Cherry bit" />
    </div>
  );
}
