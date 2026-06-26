import Grid from "@/components/Grid";
import { destinos } from "@/lib/destinos";
import styles from "./destinos.module.css";

const MelhoresDestinos = () => {
    return (
        <div>
            <h1 className={styles.titleDestinos}>Melhores Destinos</h1>
            <Grid destinos={destinos} />
        </div>
    )
}

export default MelhoresDestinos;