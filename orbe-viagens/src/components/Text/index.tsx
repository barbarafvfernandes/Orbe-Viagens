import styles from './Text.module.css';

type Props = {
    children: React.ReactNode;
};

const Text = ({children} : Props) => {
    return(
        <p className={styles.text}>{children}</p>
    )
};

export default Text;