import React from 'react';
import styles from './PrimaryButton.module.css'

function PrimaryButton(props) {
  const {text} = props;
  return (
    <button className={styles.wrapper}>
      <div><a>{text}</a></div>
    </button>
  );
}

export default PrimaryButton;