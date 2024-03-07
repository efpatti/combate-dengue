import { Container, Row, Col } from "react-bootstrap";
import "./Proliferacao.css";
import "./Proliferacao.css";
function Proliferacao() {
  return (
    <div className="body" id="proli">
      {" "}
      <p className="titulopage ">
        Proliferação da Dengue em entulhos e sucatas
      </p>
      <Container>
        <Row>
          <Col className="linhaslaterais mt-3">
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
            <div className="caixa1 mt-4">
              <div className="front">
                <div className="texto1">
                  <p>Acúmulo de água</p>
                </div>
              </div>
              <div className="back">
                <p>
                  Reprodução em locais
                  <br /> de água parada, ambientes <br />
                  com sucata acumulada, como <br /> pneus e latas.
                </p>
              </div>
            </div>
          </Col>
          <Col className="caixaDois">
            <div className="caixa2 mt-4">
              <div className="front">
                <div className="texto2">
                  <p>Ciclo Reprodutivo rápido</p>
                </div>
              </div>
              <div className="back">
                <p>
                  O ciclo de vida curto do Aedes aegypti permite rápida
                  multiplicação, resultando em proliferação de um dia para o
                  outro.
                </p>
              </div>
            </div>
          </Col>
          <Col className="caixaTres">
            <div className="caixa3 mt-4">
              <div className="front">
                <div className="texto3">
                  <p>Ambiente protegido</p>
                </div>
              </div>
              <div className="back color">
                <p>
                  Áreas sombreadas e protegidas <br /> do vento mantêm condições
                  úmidas essenciais para o desenvolvimento de <br /> ovos,
                  larvas e pupas.
                </p>
              </div>
            </div>
          </Col>
          <Col className="caixaQuatro">
            <div className="caixa4 mt-4">
              <div className="front">
                <div className="texto4">
                  <p>Falta de concientização</p>
                </div>
              </div>
              <div className="back">
                <p>
                  É crucial educar a população <br />
                  sobre os riscos associados ao descarte incorreto de materiais,
                  incentivando <br />
                  atitudes responsáveis.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Proliferacao;
