import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import news_png from "./c-news.png";
import { Link } from "react-router-dom";

import cov1 from "./cov1.jpg";
import cov2 from "./cov2.jpg";
import cov3 from "./cov3.jpg";
import cov4 from "./cov4.jpg";


export default class Slide extends Component {
  changeRoute = () => {
    this.context.router.push("/promospace/detail");
  };

  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <Link
              to={{
                pathname: "/news",
                state: { news_id: 1 }
              }}
            >
              <img
                className="d-block news-main-image"
                src={news_png}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Click for the latest Coronavirus news</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          <Link
              to={{
                pathname: "/news",
                state: { news_id: 2 }
              }}
            >
            <img className="d-block news-main-image" src={cov2} alt="First slide" />
            <Carousel.Caption>
              <h3>Son Dakika: Türk Silahlı Kuvvetleri'nde toplam 156 koronavirüs vakası bulunuyor</h3>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          <Link
              to={{
                pathname: "/news",
                state: { news_id: 3 }
              }}
            >
            <img className="d-block news-main-image" src={cov3} alt="First slide" />
            <Carousel.Caption>
              <h3>Koronavirüs sürecinde 'klima' uyarısı!</h3>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          <Link
              to={{
                pathname: "/news",
                state: { news_id: 4 }
              }}
            >
            <img className="d-block news-main-image" src={cov4} alt="First slide" />
            <Carousel.Caption>
              <h3>12 Mayıs Koronavirüs tablosu! Corona virüsü son dakika Türkiye
                vaka ve ölüm sayısı! Koronavirüs son durum</h3>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
