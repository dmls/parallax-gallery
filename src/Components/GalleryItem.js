import React from 'react';
import { Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import handleViewport from 'react-in-viewport';

class GalleryItemComponent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            zScrollRotate: this.props.index % 2 ? '-30deg' : '30deg'
        }
        this.content = null;

        this.getContent = this.getContent.bind(this);
        this.getStyle = this.getStyle.bind(this);
    }

    getLinkContent() {
        return (
            <a href={this.props.item.url}>
                <img className="img-fluid mb-4" src={this.props.item.image} alt="Gallery element" />
            </a>
        )
    }

    getStyle() {
        const {inViewport} = this.props;
        if (inViewport) {
            return {transform: 'rotate(0)'};
        }

        return {transform: 'rotateY(' + this.state.zScrollRotate + ')'};
    }

    getContent() {
        let zScrollClass = this.props.zScrollTilt ? ' zScrollTilt-child' : '';
        let style = this.getStyle();

        if (this.props.parallaxItems === true && window.isMobile) {
            this.content = (                
                <Tilt 
                className={'Tilt' + zScrollClass} 
                options={{scale: 1}}
                style={style}
                >
                    {this.getLinkContent()}
                </Tilt>
            )
        
            return this.content;
        }

        this.content = (
            <div 
            className={zScrollClass}
            style={style}
            >
                {this.getLinkContent(this.props.item)}
            </div>
        )

        return this.content;
    }

    render() {
        return (
            <Col 
            key={this.props.index}
            xs={12}
            sm={this.props.colWidth}
            className={(this.props.index % 2 ? '' : 'mt-4') + (this.props.zScrollTilt ? ' zScrollTilt' : '')}
            >
                {this.getContent()}
            </Col>
        )
    }
}

const GalleryItem = handleViewport(GalleryItemComponent);

export default GalleryItem