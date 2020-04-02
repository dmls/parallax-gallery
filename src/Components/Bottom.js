import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideImg from './SideImg';
import GalleryRows from './GalleryRows';

class Bottom extends React.Component {
    constructor(props) {
        super(props);

        this.items = [{
            image: 'http://placeimg.com/700/1000/architecture',
            url: ''
        }, {
            image: 'http://placeimg.com/700/1000/tech',
            url: ''
        }, {
            image: 'http://placeimg.com/700/1000/nature',
            url: ''
        }, {
            image: 'http://placeimg.com/700/1000/animals',
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
                className="text-center"
                >
                    <GalleryRows 
                    cols={2} 
                    items={this.items} 
                    zScrollTilt={true} 
                    // rotate={true}
                    />
                </Col>

                {/* Right image */}
                <SideImg src='https://placehold.it/200x900' alt="Side Text" />
            </Row>
        );
    }
}

export default Bottom