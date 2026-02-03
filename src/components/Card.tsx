import Image from 'next/image';
import Style from '../styles/card.module.css';

type Props = {
  img: string,
  title: string,
  description: string
}


function Card({img, title, description}: Props) {
  return (
    <div className={Style.card}>
      <div>
        <Image 
         className={Style.imgCard}
          src={img}
          alt="Imagem de um cachorro e um gato"
          fill
         
        />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Card
