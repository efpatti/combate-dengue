import React from 'react'
import '../SaudePublica/Saude.css'
import { Col, Container, Row } from 'react-bootstrap'
import mosquito5 from '../../img/mosquitocinco.jpg'
function Saude () {
    return(
        <div className='body1'>
            <br/>
            <br/>
<h1 className='titulo-saude'>
    baro
</h1>
<Container>
    <Row>
        <Col sm={8}>
        <div className='texto-1'>
        O aumento dos casos de dengue devido ao acúmulo de sucata e entulho representa um grave risco à saúde pública devido à sobrecarga que impõe ao sistema de saúde. Quando há um grande número de casos de dengue em uma região, os serviços de saúde podem ficar sobrecarregados, levando a dificuldades no atendimento adequado aos pacientes. Além disso, a dengue pode evoluir para formas mais graves da doença, como a dengue hemorrágica, que pode ser fatal se não for tratada de forma adequada e oportuna. 
        </div>
        </Col>
        <Col sm={4}>
        <div className='bolinha-1'>
<div className='foto-1'>
<img src={mosquito5}/>
</div>
        </div>
        </Col>
    </Row>
    <Row>
        <Col>
        <div>

        </div>
        </Col>
        <Col>
        <div>

        </div>
        </Col>
    </Row>
</Container>
        </div>
    )
}
export default Saude