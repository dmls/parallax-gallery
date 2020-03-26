import React from 'react';
import { Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import TrackVisibility from 'react-on-screen';

class GalleryItemContent extends React.Component {
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
        const {isVisible} = this.props;
        if (isVisible) {
            return {transform: 'rotateY(5deg)'};
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
            sm={12}
            className={(this.props.index % 2 ? '' : 'mt-4') + (this.props.zScrollTilt ? ' zScrollTilt' : '')}
            >
                {this.getContent()}
            </Col>
        )
    }
}

class GalleryItem extends React.Component {
    render() {
        return (
            <TrackVisibility offset={250} className={'col-12 col-sm-' + this.props.colWidth}>
                <GalleryItemContent
                item={this.props.item}
                index={this.props.index}
                zScrollTilt={this.props.zScrollTilt}
                />
            </TrackVisibility>
        )
    }
}

export default GalleryItem