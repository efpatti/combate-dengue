import { Container, Row, Col } from "react-bootstrap";
import "./Proliferacao.css";
import MosquitoUm from "../../img/mosquitoum.jpg";
import "./Proliferacao.css";
function Proliferacao() {
  return (
    <div className="body">
      {" "}
      <p className="titulopage mt-3">
        Proliferação da Dengue em entulhos e sucatas
      </p>
      <Container>
        <Row>
          <Col className="linhaslaterais">
            <p className="introduction">
              A proliferação do mosquito Aedes aegypti, responsável pela
              transmissão de doenças como dengue, zika e chikungunya, em locais
              com sucata e entulho, se deve às condições ideais que esses
              ambientes proporcionam para o ciclo de vida do inseto. Vamos
              explorar de forma dinâmica como esse processo ocorre:
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col className="caixaUm">
            {" "}
            <div className="caixa4 mt-4">
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
          </Col>
          <Col className="caixaDois">
            <div className="caixa4 mt-4">
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
          </Col>
          <Col className="caixaTres">
            <div className="caixa4 mt-4">
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
          </Col>
          <Col className="caixaQuatro">
            <div className="caixa4 mt-4">
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
          </Col>
          <Col className="caixaCinco">
            <div className="caixa4 mt-4">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Proliferacao;
