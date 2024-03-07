import React from "react";
import "../Sucata/Sucata.css";
import { Container, Row, Col } from "react-bootstrap";
import cacamba from "../../img/cacambalixo.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import sucata from "../../img/cacamba-de-entulho.webp";
import entulho from "../../img/entulho.jpg";
import reciclagem from "../../img/reciclagem.jpg";
function Sucata() {
  return (
    <div className="body-dina">
      {" "}
      <br></br>
      <Container>
        <Row>
          <Col>
            <div className="caixaMedina">
              <img className="imgSucata" src={sucata}></img>
              <b className="textoSucato">Separar e Classificar</b>
              <p className="textoSucata">
                Separe os materiais em diferentes categorias, como metal,
                plástico, madeira e papelão. Isso facilitará o processo de
                reciclagem e reutilização.
              </p>
            </div>
          </Col>

          <Col>
            <div className="caixaMedina">
              <img className="imgSucata" src={entulho}></img>
              <b className="textoSucato">Comprimir e Compactar</b>
              <p className="textoSucata">
                Comprimir e compactar os materiais sempre que possível para
                reduzir o espaço de armazenamento e facilitar o transporte para
                instalações de reciclagem. Cubra os materiais armazenados.
              </p>
            </div>
          </Col>
          <Col>
            <div className="caixaMedina">
              <img className="imgSucata" src={reciclagem}></img>
              <b className="textoSucato">Compostagem</b>
              <p className="textoSucata">
                Se houver materiais orgânicos entre os resíduos, considere
                compostá-los em vez de descartá-los. Isso pode ser feito em casa
                ou em instalações de compostagem comunitárias.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
    </div>
  );
}
export default Sucata;
