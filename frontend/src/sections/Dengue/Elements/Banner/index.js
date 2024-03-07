import "./Banner.css"
import { Container, Stack, Col, Image } from "react-bootstrap"
import DengueImg from "../../../../img/denguezada.png"
function Banner() {
  return (
    <div className="h-screen bg-d">
      <Container>
        <Stack direction="horizontal" gap="5">
          <Col md={6}>
            <Stack direction="vertical">
              <Col>
                <h1 className="fw-bold text-uppercase text-dt fs-2">19 de Novembro</h1>
              </Col>
              <h1 className="fw-semibold text-dt w-auto fs-2">
                Dia Nacional de Combate à Dengue
              </h1>
            </Stack>
          </Col>
          <Col md={6}>
            <Image src={DengueImg} />
          </Col>
        </Stack>
      </Container>
    </div>
  )
}

export default Banner