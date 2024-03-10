import React from 'react';
import styles from './PrimaryMenu.module.css';

function PrimaryMenu(props) {
  const { listContent } = props;
  return (
    <div className={styles.wrapper}>
        {listContent.map((item, index) => (
          <div className={styles.contentContainer} key={index}>
            <a href={`/${item.link}`}>{item.title}</a>
          </div>
        ))}
    </div>
  );
}

export default PrimaryMenu;
