import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideImg from './SideImg';
import GalleryRows from './GalleryRows';

class Top extends React.Component {
    constructor(props) {
        super(props);

        this.items = [{
            image: 'http://placeimg.com/700/1300/fashion',
            url: '#'
        }, {
            image: 'http://placeimg.com/700/1300/fashion',
            url: '#'
        }, {
            image: 'http://placeimg.com/700/1300/fashion',
            url: '#'
        }, {
            image: 'http://placeimg.com/700/1300/fashion',
            url: '#'
        }];
    }

    render() {
        return (
            <Row>
                {/* Left image */}
                <SideImg src='https://placehold.it/200x900' alt="Side Text" />

                {/* Center grid */}
                <Col
                    sm={12}
                    md={10}
                    lg={8}
                    className="text-center"
                >
                    <Row>
                        <Col
                            xs={10}
                            className="perspective mx-auto"
                        >
                            <GalleryRows 
                                cols={2} 
                                items={this.items}
                            />
                        </Col>
                    </Row>
                </Col>

                {/* Right image */}
                <SideImg src='https://placehold.it/200x900' alt="Side Text" />
            </Row>
        );
    }
}

export default Top