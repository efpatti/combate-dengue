import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Dengue() {
  const [dadosDengue, setDadosDengue] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/dengue-info")
      .then((resposta) => {
        setDadosDengue(resposta.data);
      })
      .catch((erro) => {
        console.error("Erro ao buscar dados da dengue:", erro);
      });
  }, []);

  return (
    <Container>
      <h1>Informações sobre Dengue</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Data</th>
            <th>Casos Estimados</th>
            <th>Casos Confirmados</th>
            <th>Taxa de Reprodução (Rt)</th>
          </tr>
        </thead>
        <tbody>
          {dadosDengue.map((dadosSemana, indice) => (
            <tr key={indice}>
              <td>{new Date(dadosSemana.data_iniSE).toLocaleDateString()}</td>
              <td>{dadosSemana.casos_est}</td>
              <td>{dadosSemana.casos}</td>
              <td>{dadosSemana.Rt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Dengue;
