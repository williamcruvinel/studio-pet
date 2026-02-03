import Image from 'next/image';
import styles from '../styles/banner.module.css';

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>Todo Cuidado Que Seu Pet Merece</h1>
          <p className={styles.subTitle}>
            Atendimento humanizado e completo com foco no bem-estar do seu pet.
          </p>

          <a className={styles.btnBanner} href="#agendamentoForm">
            Agendar agora
          </a>
        </div>

        <div className={styles.bannerWrapper}>
          <Image
            className={styles.imgBanner}
            src="/banner-01.png"
            alt="Imagem de um cachorro e um gato"
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
