import { destinos } from "@/lib/destinos";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./detalheFilme.module.css";

type Props = {
  params: Promise<{
    id: number;
  }>;
};

const DestinoDetalhes = async ({ params }: Props) => {
  const { id } = await params;

  const details = destinos.find((destino) => destino.id == id);

  if(!details)
    return notFound();

  const {nome, descricao, imagem} = details;

  return (
    <>
      <div className={styles.detalhes}>
        <div className={styles.detalhes__container}>
        <Link className={styles.detalhes__voltar} href="/destinos/">voltar</Link>
        <section>
          <figure>
            <img className={styles.detalhes__image} src={imagem} alt={`poster destino: ${nome}`}/>
          </figure>
          <article className={styles.detalhes__info}>
            <h2>{nome}</h2>
            <p>{descricao}</p>
          </article>
        </section>
        </div>
      </div>
    </>
  );
};

export default DestinoDetalhes;