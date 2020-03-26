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

    getLinkContent(item) {
        return (
            <a href={item.url}>
                <img className="img-fluid mb-4" src={item.image} alt="Gallery element" />
            </a>
        )
    }

    getLink(item) {
        if (this.props.parallaxItems === true && window.isMobile) {
            return (                
                <Tilt className={'Tilt' + (this.props.zScrollTilt ? ' zScrollTilt-child' : '')} options={{scale: 1}}>
                    {this.getLinkContent(item)}
                </Tilt>
            )
        }

        return (
            <div className={this.props.zScrollTilt ? 'zScrollTilt-child' : ''}>
                {this.getLinkContent(item)}
            </div>
        )
    }

    getCol(item, index) {
        return (
            <Col 
                key={index}
                xs={12}
                sm={this.colWidth}
                className={(index % 2 ? '' : 'mt-4') + (this.props.zScrollTilt ? ' zScrollTilt' : '')}
            >
                {this.getLink(item)}
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