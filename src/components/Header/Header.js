import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={styles.wrapper}>
      <div>
        <span>Furniture</span>
      </div>
      <div className={styles.navigateWrapper}>
        <nav className={styles.navigateContainer}>
          <div className={styles.navigateItem}><a href="/">Home</a></div>
          <div className={styles.navigateItem}><a href="/services">Services</a></div>
          <div className={styles.navigateItem}><a href="/doctors">Doctors</a></div>
          <div className={styles.navigateItem}><a href="/products">Products</a></div>
          <div className={styles.navigateItem}><a href="/gallery">Gallery</a></div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
