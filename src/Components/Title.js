import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

export default () => {
    return (
        <div>
            <Row>
                <Col xs="12">
                    <Jumbotron className='text-center'>
                        <h1 className="display-5">
                            Ayuda en Casa
                    </h1>
                        <p className="lead">
                            Esto es sólo una prueba de CRUD
                    </p>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    )
}