import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';

class GalleryRows extends React.Component {
    constructor(props) {
        super(props);

        this.getCol = this.getCol.bind(this);

        // Must be a factor of 12 (1,2,3,4,6,12)
        this.colWidth = 12 / this.props.cols;
    }

    getCol(item, index) {
        return (
            <Col 
                key={index}
                xs={12}
                sm={this.colWidth}
                data-tilt
                className={
                    (this.props.parallaxItems === true ? 'orientation-parallax' : '') + 
                    (this.props.parallaxItems === true && index % 2 === 0 ? ' pt-5' : '')
                }
            >
                {/* <div data-depth="0.5"> */}
                <Tilt className="Tilt" options={{scale: 1}}>
                    <a href={item.url}>
                        <img className="img-fluid mb-4" src={item.image} alt="Gallery element" />
                    </a>
                </Tilt>
                {/* </div> */}
            </Col>
        )
    }

    render() {
        var self = this;
        return (
            <Row className="mb-3">
                {
                    this.props.items.map(function(item, index) {
                        return self.getCol(item, index)
                    })
                }
            </Row>
        );
    }
}

export default GalleryRows