import { destinos } from "@/lib/destinos";
import Link from "next/link";
import { notFound } from "next/navigation";

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
      <div>
        <Link href="/destinos/">voltar</Link>
        <section>
          <figure>
            <img src={imagem} alt={`poster destino: ${nome}`}/>
          </figure>
          <article>
            <h2>{nome}</h2>
            <p>{descricao}</p>
          </article>
        </section>
      </div>
    </>
  );
};

export default DestinoDetalhes;