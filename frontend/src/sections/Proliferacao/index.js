import { Container, Row, Col } from "react-bootstrap";
import "./Proliferacao.css";
function Proliferacao() {
  return (
    <>
      <div className="body">
        <p className="titulopage mt-3">Proliferação da Dengue</p>
        <Container>
          <Row className="text center">
            <Col className="boxapresentacao">
              A proliferação do mosquito Aedes aegypti, responsável pela
              transmissão de doenças como dengue, zika e chikungunya, em locais
              com sucata e entulho, se deve às condições ideais que esses
              ambientes proporcionam para o ciclo de vida do inseto. Vamos
              explorar de forma dinâmica como esse processo ocorre:
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Proliferacao;
