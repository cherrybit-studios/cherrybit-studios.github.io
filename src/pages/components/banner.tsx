import { useColorMode } from '@docusaurus/theme-common';
import React from 'react';
import styles from '../index.module.css';

export default function Banner() {
    const { colorMode } = useColorMode();

    return (
        <div className={colorMode == 'dark' ? '' : styles.bannerLightMode}>
            <img
                src="img/banner.png"
                alt="Cherry bit"
            />
        </div>
    );
}