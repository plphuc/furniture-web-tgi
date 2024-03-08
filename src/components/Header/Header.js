import classNames from 'classnames';
import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={classNames(styles.wrapper, 'container')}>
      <div>
        <span className={styles.shopNameContainer}>Furniture</span>
      </div>
      <nav className={classNames(styles.navigateWrapper, 'flexWrapper')}>
        <div className={styles.navigateItem}>
          <a href="/">Home</a>
        </div>
        <div className={styles.navigateItem}>
          <a href="/services">Services</a>
        </div>
        <div className={styles.navigateItem}>
          <a href="/doctors">Doctors</a>
        </div>
        <div className={styles.navigateItem}>
          <a href="/products">Products</a>
        </div>
        <div className={styles.navigateItem}>
          <a href="/gallery">Gallery</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
