import React from 'react';
import cover from 'assets/cover.jpg';
import styles from './Cover.module.css'

function Cover(props) {
  return (
    <div className={styles.wrapper}>
      <img src={cover} />
    </div>
  );
}

export default Cover;
