import { Container } from "react-bootstrap";
import "../proliferacao/Proliferacao.css";
import MosquitoUm from "../../img/mosquitoum.jpg";
function Proliferacao() {
  return (
    <Container className="back">
      <p className="titulopage mt-3">
        Proliferação da Dengue em entulhos e sucatas
      </p>
      <div className="caixa4 ">
        <div className="front">
          <div className="texto">
            <br />
            <br />
            <br />
            <br />
            <h4>habilidades individuais</h4>
          </div>
        </div>
        <div className="back">
          <br />
          <br />
          <h5>-dedicaçao</h5>
          <h5>-saber trabalhar em grupo</h5>
          <h5>-bom em resolver desafios do cotidiano</h5>
          <h5>-responsabilidade alta</h5>
        </div>
      </div>
    </Container>
  );
}

export default Proliferacao;
