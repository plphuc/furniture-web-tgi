import React from 'react';
import { cover } from 'assets/images';
import styles from './Cover.module.css';
import classNames from 'classnames';
import PrimaryButton from 'commonComponents/PrimaryButton/PrimaryButton';

function Cover(props) {
  return (
    <div className={styles.wrapper}>
      <img src={cover} alt="cover" />
      <div
        className={classNames(
          styles.contentWrapper,
          'flexWrapper',
          'flexColumnWrapper'
        )}
      >
        <span className={styles.categoryContainer}>New Arrival</span>
        <div className={styles.titleWrapper}>
          <span className={styles.titleContainer}>Discover Our</span>
          <span className={styles.titleContainer}>New Collection</span>
        </div>
        <span className={styles.descriptionContainer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </span>
        <div className={styles.buyNowButtonContainer}><PrimaryButton text="BUY NOW" /></div>
      </div>
    </div>
  );
}

export default Cover;
