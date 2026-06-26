import styles from './Link.module.css';
import Link from 'next/link';

const LinkDestinos = () => {
    return (
        <Link href="/destinos" className={styles.linkButton}>
            Confira nossos Destinos
        </Link>
    )
}

export default LinkDestinos;