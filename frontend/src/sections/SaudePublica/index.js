import React from 'react'
import '../SaudePublica/Saude.css'
import { Col, Container, Row } from 'react-bootstrap'
import mosquito5 from '../../img/mosquitocinco.jpg'
import mosquito3 from '../../img/mosquitotres.jpg'
function Saude() {
    return (
        <div className='body1' id='health'>

            <h1 className='titulo-saude'>
                Riscos a Saúde Publica
            </h1>
            <Container>
                <Row>
                    <Col sm={7}>
                        <div className='texto-1'><p>
                            O aumento dos casos de dengue devido ao acúmulo de sucata e entulho representa um grave risco à saúde pública devido à sobrecarga que impõe ao sistema de saúde. Quando há um grande número de casos de dengue em uma região, os serviços de saúde podem ficar sobrecarregados, levando a dificuldades no atendimento adequado aos pacientes. Além disso, a dengue pode evoluir para formas mais graves da doença, como a dengue hemorrágica, que pode ser fatal se não for tratada de forma adequada e oportuna. </p>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <div className='bolinha-1'>

                            <img className='foto-1' src={mosquito5} />

                        </div>
                    </Col>
                </Row>
                <Row>

                    <Col sm={5}>
                        <div className='bolinha-2'>
                            <img className='foto-1' src={mosquito3} />
                        </div>
                    </Col>
                    <Col sm={7}>
                        <div className='texto-2'>
                            <p>A incidência aumentada de casos de dengue também pode impactar a economia local, uma vez que pessoas doentes podem ficar impossibilitadas de trabalhar, gerando perda de produtividade e aumento nos gastos com saúde.Portanto, é crucial combater o acúmulo de sucata e entulho como uma medida preventiva para reduzir os casos de dengue e seus impactos na saúde pública e na sociedade como um todo. Isso pode ser feito através de campanhas de conscientização, fiscalização e incentivo a práticas de descarte adequado de resíduos.</p>
                        </div>
                    </Col> </Row>
            </Container>
        </div>
    )
}
export default Saude;
