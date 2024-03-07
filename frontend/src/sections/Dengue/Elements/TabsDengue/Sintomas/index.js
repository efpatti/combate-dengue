import { Container, Row, Stack, Col } from "react-bootstrap";

function Sintomas() {
  const dengueData = [
    {
      title: "Dengue clássica",
      desc: "Febre alta e repentina: geralmente começa de forma inesperada e pode durar de dois a sete dias, dor de cabeça intensa: normalmente na região frontal (área da testa) da cabeça, dor muscular e nas articulações: dor extremamente forte e intensa, dor nos olhos: pacientes com dengue normalmente sentem dor atrás dos olhos, fadiga: sensação de cansaço extremo e fraqueza, sangramento pelo nariz ou gengivas: em alguns casos, podem ocorrer sangramentos leves, náuseas e vômitos: sintomas que muitos dos pacientes com dengue acabam sentindo"
    },
    {
      title: "Dengue hemorrágica",
      desc: "A dengue hemorrágica é uma forma mais grave da doença e requer atenção médica urgente. Os sintomas comuns incluem os mencionados acima, além de: sintomas graves de dor abdominal: a dor abdominal é intensa e pode ser um sinal de hemorragia interna, vômitos persistentes ou com sangue: esses são dois sintomas preocupantes sobre a doença, sangramentos sob a pele: podem se manifestar como manchas roxas na pele, sintomas de choque: o paciente pode apresentar fraqueza extrema, pressão arterial baixa, confusão e palidez, desmaios"
    }
  ];

  return (
    <Container className="text-dt">
      <Row>
        <h1 className="text-uppercase fw-semibold text-center ">Sintomas</h1>
      </Row>
      <Stack>
        {dengueData.map((item, i) => (
          <Col>
            <Row>
              <h1 className="text-start fs-4 fw-medium">{item.title}</h1>
            </Row>
            <Row>
              <p className="fs-6 fw-light">{item.desc}</p>
            </Row>
          </Col>
        ))}
      </Stack>
    </Container >
  );
}

export default Sintomas;
