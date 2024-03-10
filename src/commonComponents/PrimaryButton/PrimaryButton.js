import React from 'react';
import styles from './PrimaryButton.module.scss'

function PrimaryButton(props) {
  const {text, link} = props;
  return (
    <button className={styles.wrapper}>
      <div><a href={link}>{text}</a></div>
    </button>
  );
}

export default PrimaryButton;