import React, { Component} from "react";
import Carousel  from "react-bootstrap/Carousel";
import SpevakMenu from "../assets/SpevakMenu.jpg";

import SpevakMenu3 from "../assets/SpevakMenu3.jpg";

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={SpevakMenu}
                        alt="SpevakMenu"/>
                    <Carousel.Caption>
                        <h2><u>Nikolay Spevak</u></h2>
                    </Carousel.Caption>
                </Carousel.Item>
        
            
                
                <Carousel.Item>
                 <img 
                    className="d-block w-100"
                     src={SpevakMenu3}
                    alt="SpevakMenu3"/>
                <Carousel.Caption>
                     <h2><u>Nikolay Spevak</u></h2>
                </Carousel.Caption>
                 </Carousel.Item>
             </Carousel>
        )
    }    
}    