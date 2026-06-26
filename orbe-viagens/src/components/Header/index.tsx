import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
      <Link href="/" className={styles.header__logo}>
        <h1>Orbe</h1>
      </Link>
  
      <nav className={styles.header__nav}>
        <Link href="/">Início</Link>
        <Link href="/destinos">Destinos</Link>
      </nav>
      </div>
    </header>
  );
};

export default Header;