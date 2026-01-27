import Link from 'next/link';
import styles from '../styles/header.module.css';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src="/logo-grande.png"
            width={60}
            height={60}
            alt="Studio Pet Logo"
          />
        </Link>

        <ul className={styles.nav}>
          <li>
            <Link className={styles.link} href="/dashboard">
              Ver agenda
            </Link>
          </li>
          <li>
            <Link className={styles.btn} href="">
              Agendar agora
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
