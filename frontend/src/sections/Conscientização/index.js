import React from "react";
import "../Conscientização/Conscientização.css";
import { Col, Container, Row } from "react-bootstrap";
import DengueZ from "../../img/consiente.jpg";

function Conscientização() {
  return (
    <div className="body1">
      <br />
      <br />
      <h1> Nessecidades e Conscientização</h1>
      <Container>
        <Col></Col>
        <Row>
          <h2 className="texto">
            Estamos no verão, e a quantidade de alertas de prevenção ao surto da
            dengue deve ser redobrada. Por esse ser um período quente e com
            frequentes pancadas de chuva, a velocidade de reprodução do mosquito
            Aedes aegypti é ampliada. Olhe seu quintal e as proximidades de sua
            residência. Verifique se há recipientes abertos que possam armazenar
            água, evite que isto aconteça recolhendo os entulhos, mantendo
            caixas de água fechados com tampa adequada, guardando garrafas
            sempre de cabeça para baixo; encher de areia até a borda os pratos
            dos vasos de plantas e não jogue lixo em terrenos baldios. O combate
            à dengue se faz através do combate à proliferação do mosquito e da
            eliminação de criadouros (local onde se acumule água limpa e parada
            onde o mosquito vai depositar seus ovos). A eliminação de criadouros
            é a única maneira de se evitar a proliferação da doença. Somente com
            a conscientização da população em realizar determinadas tarefas,
            poderão fazer toda a diferença e ser um grande aliado para diminuir
            os casos de dengue.
          </h2>
        </Row>
        <Col>
          <Row>
            <img src={DengueZ} />
          </Row>
        </Col>
      </Container>
    </div>
  );
}
export default Conscientização;
