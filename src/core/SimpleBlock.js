import React, { Component } from 'react';

class SimpleBlock extends Component {
    render() {

        var additionalProps = {};

        var {imageVerticalAlign, parallaxImage, bgColor, style, ...otherProps} = this.props;

        if(!style)
            style = {};

        bgColor = "#ffffff";

        var mask = null;

        if(bgColor){
            bgColor = this.props.bgColor;
        }
        
        if(parallaxImage){
            additionalProps["className"] = "parallax-window";
            additionalProps["data-parallax"] = "scroll";
            additionalProps["data-speed"] = 0.75;
            additionalProps["data-image-src"] = parallaxImage;

            mask = <div style={{opacity: 0.3, backgroundColor: "rgb(20, 20, 20)"}}></div>;
        }

        if(imageVerticalAlign){
            style[window.toCamelCase("padding-"+imageVerticalAlign)] = "0px";
        }

        if(this.props.style){
            for(var key in this.props.style){
                style[key] = this.props.style[key];
            }
        }

        return (
            <div id={this.props.id} style={{backgroundColor:bgColor}} {...otherProps} {...additionalProps}>
                {mask}
                <div className="container block" style={style}>
                    <div className="row">  
                        {this.props.children}                                                                     
                    </div>
                </div>
            </div>
        );
    }
}

export default SimpleBlock;
