import React from 'react';
import { Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import TrackVisibility from 'react-on-screen';

class GalleryItemContent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            zScrollTilt: this.props.index % 3 ? '-30deg' : '30deg',
            rotate: this.props.rotate == true ? window.randomInRange(-4, 4) : null
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
        if (!this.props.zScrollTilt) {
            return;
        }

        const {isVisible} = this.props;
        if (isVisible) {
            return {transform: 'rotateY(5deg)'};
        }

        return {transform: 'rotateY(' + this.state.zScrollTilt + ')'};
    }

    getContent() {
        let zScrollClass = this.props.zScrollTilt ? ' zScrollTilt-child' : '';
        let style = this.getStyle();

        if (this.props.parallaxItems === true && window.isMobile) {
            this.content = (                
                <Tilt 
                className={'Tilt'} 
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
            className={(this.props.index % 2 ? '' : 'mt-4') + 
            (this.props.zScrollTilt ? ' zScrollTilt' : '')}
            style={this.state.rotate ? {transform: 'rotate(' + this.state.rotate + 'deg)'} : {}}
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
                parallaxItems={this.props.parallaxItems}
                rotate={this.props.rotate}
                />
            </TrackVisibility>
        )
    }
}

export default GalleryItem