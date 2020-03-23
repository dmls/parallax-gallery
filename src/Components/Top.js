import React from 'react';
import { Row, Col } from 'react-bootstrap';


class Top extends React.Component {
    render() {
        return (
            <Row>
                {/* Left image */}
                <Col 
                    sm={0}
                    md={2}
                >
                    <img src="https://placehold.it/200x600" />
                </Col>

                {/* Center grid */}
                <Col
                    sm={12}
                    md={8}
                >
                    {/* First row */}
                    <Row className="my-3">
                        <Col>
                            <img src="https://placehold.it/400x500" />
                        </Col>

                        <Col>
                            <img src="https://placehold.it/400x500" />
                        </Col>
                    </Row>

                    {/* Second Row */}
                    <Row className="my-3">
                        <Col>
                            <img src="https://placehold.it/400x500" />
                        </Col>
                        
                        <Col>
                            <img src="https://placehold.it/400x500" />
                        </Col>
                    </Row>
                </Col>

                {/* Right image */}
                <Col 
                    sm={0}
                    md={2}
                >
                    <img src="https://placehold.it/200x600" />
                </Col>
            </Row>
        );
    }
}

export default Top