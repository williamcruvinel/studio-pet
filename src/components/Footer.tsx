import Image from 'next/image';
import styles from '../styles/footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
                  src="/logo-32x32.png"
                  width={32}
                  height={32}
                  alt="Studio Pet Logo"
                />
      <p className={styles.footerText}>Studio Pet © 2026</p>
    </footer>
  );
}

export default Footer;
