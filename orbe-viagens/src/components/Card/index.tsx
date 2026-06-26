import Link from 'next/link';
import styles from './Card.module.css'; 
import { Destino } from '@/types/types';

type Props = {
    destino: Destino
}

const Card = ({ destino }: Props) => {
    const { id, nome, imagem, descricao } = destino;

    return (
        <Link href={`/destinos/${id}`} className={styles.card}>
            <img
                className={styles.card__poster}
                src={imagem}
                alt={`Poster destino ${nome}`}
                width={300}
                height={200}
            />
            <div className={styles.card__info}>
                <h3 className={styles.card__title}>{nome}</h3>
                <p className={styles.card__description}>{descricao}</p>
            </div>
        </Link>
    );
};

export default Card;