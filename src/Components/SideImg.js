import React from 'react';
import { Col } from 'react-bootstrap';

class SideImg extends React.Component {
    render() {
        return (
            <Col 
                md={1}
                lg={2}
                className="align-self-center d-none d-md-block" 
            >
                <img className="img-fluid mx-auto d-block" src={this.props.src} alt={this.props.alt} />
            </Col>
        )
    }
}

export default SideImg