import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import SideImg from './SideImg';
import GalleryRows from './GalleryRows';

class Top extends React.Component {
    constructor(props) {
        super(props);

        this.items = [{
            image: 'http://placeimg.com/700/1300/architecture',
            url: ''
        }, {
            image: 'http://placeimg.com/700/1300/tech',
            url: ''
        }, {
            image: 'http://placeimg.com/700/1300/nature',
            url: ''
        }, {
            image: 'http://placeimg.com/700/1300/animals',
            url: ''
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
                    className="text-center orientation-parallax"
                >
                    <Row>
                        <Tilt className="Tilt" options={{scale: 1, max: 10}}>

                        <Col
                            xs={10}
                            className="perspective mx-auto"
                        >
                            <GalleryRows 
                                cols={2} 
                                items={this.items}
                            />
                        </Col>
                        </Tilt>

                    </Row>
                </Col>

                {/* Right image */}
                <SideImg src='https://placehold.it/200x900' alt="Side Text" />
            </Row>
        );
    }
}

export default Top