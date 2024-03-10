import classNames from 'classnames';
import styles from './Header.module.scss';
import { menuIcon } from 'assets/images';
import { useState } from 'react';
import PrimaryMenu from 'commonComponents/PrimaryMenu/PrimaryMenu';

const menuItem = [
  { title: 'Home', link: '' },
  { title: 'Services', link: 'services' },
  { title: 'Doctors', link: 'doctors' },
  { title: 'Products', link: 'products' },
  { title: 'Gallery', link: 'gallery' },
];

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);

    const handleClickOutside = (e) => {
      setMenuOpen(false);
      document.removeEventListener('click', handleClickOutside);
    };

    if (!menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
  };

  return (
    <div className={classNames(styles.wrapper, 'container')}>
      <div>
        <a href="/" className={styles.shopNameContainer}>
          Furniture
        </a>
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

      <div className={styles.menuModalWrapper}>
        <div className={styles.menuIconContainer} onClick={handleClickMenu}>
          <img src={menuIcon} alt='menu icon'/>
        </div>
        {menuOpen && <PrimaryMenu listContent={menuItem} />}
      </div>
    </div>
  );
}

export default Header;
