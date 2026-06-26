import Title from "@/components/Title";
import Text from "@/components/Text";
import LinkDestinos from "@/components/Link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <Text>Na Orbe, nós não vendemos apenas passagens; nós realizamos <strong>sonhos</strong>!🌍 <br/> <br/>
        Somos uma agência de viagens completa, especializada em transformar o seu desejo de explorar o mundo em uma experiência inesquecível. Cuidamos de absolutamente tudo para você viajar com total tranquilidade, seja para um destino nacional ou internacional.
        <br/> <br/>
        <strong>O Que Fazemos Por Você</strong>
        <br/> 
          <strong>🗺️ Roteiros Personalizados:</strong> Desenhamos cada dia da sua viagem sob medida. <br/>
          <strong>✈️ Passagens Aéreas:</strong> Buscamos as melhores rotas, conexões e tarifas.<br/>
          <strong>🏨 Hospedagem Selecionada:</strong> Reservamos acomodações que combinam com o seu estilo.<br/>
          <strong>👤 Consultoria Especializada:</strong> Indicamos os melhores passeios, documentos e dicas locais.<br/>
        <br/> <br/>
        <strong>Por Que Escolher a Nossa Agência?</strong><br/>
        Nossa missão é tirar a burocracia do caminho para que você foque apenas em viver o momento. Do planejamento ao seu retorno para casa, oferecemos suporte próximo e especializado. Acreditamos que viajar é colecionar memórias colecionáveis e realizar os maiores sonhos da sua vida.</Text>
        <LinkDestinos />
    </main>
  
  );
  
};
