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
                <img className="img-fluid mx-auto d-block" src={this.props.img} />
            </Col>
        )
    }
}

export default SideImg