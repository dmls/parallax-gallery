import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import SideImg from './SideImg';
import GalleryRows from './GalleryRows';

class Top extends React.Component {
    constructor(props) {
        super(props);

        this.items = [{
            image: 'https://picsum.photos/700/1000',
            url: ''
        }, {
            image: 'https://picsum.photos/700/1000',
            url: ''
        }, {
            image: 'https://picsum.photos/700/1000',
            url: ''
        }, {
            image: 'https://picsum.photos/700/1000',
            url: ''
        }];
    }

    render() {
        return (
            <Row>
                {/* Left image */}
                <SideImg src='https://placehold.co/200x900' alt="Side Text" />

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
                <SideImg src='https://placehold.co/200x900' alt="Side Text" />
            </Row>
        );
    }
}

export default Top