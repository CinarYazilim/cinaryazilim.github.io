import React, { Component } from 'react';
import SimpleBlock from './SimpleBlock';

class Block extends Component {
    render() {
        
        var {lightText, imageStyle, image, imageContainerStyle, imageLeft, extraSpace, ...otherProps} = this.props;

        var colSize = 6;

        if(extraSpace==null)
            extraSpace = true;

        if(extraSpace)
            colSize--;

        var colClass = "col-md-"+colSize+" align-self-";

        var headerClass = "";
    
        if(this.props.imageVerticalAlign){
            colClass += this.props.imageVerticalAlign;
        }else{
            colClass += "center";
        }

        if(lightText){
            headerClass = "light-text";
        }else{
            headerClass = "dark-text";
        }

        var imageColumn = (
            <div className={colClass} style={imageContainerStyle} key="image">
                <img src={image} className="landing-image" style={imageStyle} alt="Çınar Yazılım"/>
            </div>
        );

        var textColumn = (
            <div className="col-md-6 align-self-center" key="text">
                <div className={headerClass}>
                    {this.props.children}
                </div>
            </div>
        );

        var spaceColumn = (
            <div className="col-md-1" key="space">

            </div>
        );

        var columns = [];

        if(imageLeft){
            columns.push(imageColumn);
            
            if(extraSpace)
                columns.push(spaceColumn);

            columns.push(textColumn);
        }else{
            columns.push(textColumn);

            if(extraSpace)
                columns.push(spaceColumn);

            columns.push(imageColumn);
        }

        return (
            <SimpleBlock {...otherProps}>
                {columns}
            </SimpleBlock> 
        );
    }
}

export default Block;
