import React from 'react';
import { Row } from 'react-bootstrap';
import GalleryItem from './GalleryItem';

class GalleryRows extends React.Component {
    constructor(props) {
        super(props);

        // Must be a factor of 12 (1,2,3,4,6,12)
        this.colWidth = 12 / this.props.cols;
    }

    render() {
        var self = this;
        return (
            <Row className="mb-3">
                {
                    this.props.items.map(function(item, index) {
                        return (
                            <GalleryItem
                            item={item}
                            index={index}
                            colWidth={self.colWidth}
                            parallaxItems={self.props.parallaxItems}
                            zScrollTilt={self.props.zScrollTilt}
                            />
                        )
                    })
                }
            </Row>
        );
    }
}

export default GalleryRows