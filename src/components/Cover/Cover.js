import React from 'react';
import { cover } from 'assets/images';
import styles from './Cover.module.css';

function Cover(props) {
  return (
    <div className={styles.wrapper}>
      <img src={cover} alt="cover" />
    </div>
  );
}

export default Cover;
