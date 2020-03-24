import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideImg from './SideImg';
import GalleryRows from './GalleryRows';

class Top extends React.Component {
    constructor(props) {
        super(props);

        this.items = [{
            image: 'http://placeimg.com/700/900/fashion',
            url: '#'
        }, {
            image: 'http://placeimg.com/700/900/fashion',
            url: '#'
        }, {
            image: 'http://placeimg.com/700/900/fashion',
            url: '#'
        }, {
            image: 'http://placeimg.com/700/900/fashion',
            url: '#'
        }];
    }

    render() {
        return (
            <Row>
                {/* Left image */}
                <SideImg img='https://placehold.it/200x900' />

                {/* Center grid */}
                <Col
                    sm={12}
                    md={10}
                    lg={8}
                    className="text-center"
                >
                    <GalleryRows cols={2} items={this.items} />
                </Col>

                {/* Right image */}
                <SideImg img='https://placehold.it/200x900' />
            </Row>
        );
    }
}

export default Top