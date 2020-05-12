import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import news_png from "./c-news.png";

export default class Slide extends Component {

    changeRoute = () => {
        this.context.router.push('/promospace/detail');
    }

    render() {
        return (
        <>
            <Carousel>
            <Carousel.Item onClick={this.changeRoute}>
                <img
                className="d-block w-100 h-50"
                src={news_png}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Click for the latest Coronavirus news</h3>
                </Carousel.Caption>
            </Carousel.Item>
            
            </Carousel>
        </>
        );
    }
}
