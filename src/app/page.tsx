import Banner from '@/components/Banner';
import styles from '../styles/page.module.css';
import Form from '@/components/Form';
import Servicos from '@/components/Servicos';

export default function Home() {
  return (
    <main className={styles.main}>
     <Banner />
     <Servicos />
     <Form />
    </main>
  );
}
