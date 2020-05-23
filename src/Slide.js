import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import news_png from "./c-news.png";
import { Link } from "react-router-dom";

import cov1 from "./cov1.jpg";
import cov2 from "./cov2.jpg";
import cov3 from "./cov3.jpg";
import cov4 from "./cov4.jpg";
import cov7 from "./cov7.jpg";
import cov9 from "./cov9.jpg";
import cov11 from "./cov11.jpg";

export default class Slide extends Component {
  changeRoute = () => {
    this.context.router.push("/promospace/detail");
  };

  render() {
    return (
      <div className="slide-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block news-main-image"
              src={news_png}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Click for the latest Coronavirus news</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to={{
                pathname: "/news",
                state: { news_id: 5 },
              }}
            >
              <img
                className="d-block news-main-image"
                src={cov7}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Koronavirüs salgınında can kaybı 4276'ya yükseldi</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to={{
                pathname: "/news",
                state: { news_id: 2 },
              }}
            >
              <img
                className="d-block news-main-image"
                src={cov3}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Koronavirüs sürecinde 'klima' uyarısı!</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to={{
                pathname: "/news",
                state: { news_id: 7 },
              }}
            >
              <img
                className="d-block news-main-image"
                src={cov9}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Koronavirüs günlerinde psikolojiye dikkat!</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to={{
                pathname: "/news",
                state: { news_id: 4 },
              }}
            >
              <img
                className="d-block news-main-image"
                src={cov4}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>
                  12 Mayıs Koronavirüs tablosu! Corona virüsü son dakika Türkiye
                  vaka ve ölüm sayısı! Koronavirüs son durum
                </h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to={{
                pathname: "/news",
                state: { news_id: 6 },
              }}
            >
              <img
                className="d-block news-main-image"
                src={cov11}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Dr. Elif Ünüvar: "Korona virüs hasar bırakabilir"</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to={{
                pathname: "/news",
                state: { news_id: 3 },
              }}
            >
              <img
                className="d-block news-main-image"
                src={cov2}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>
                  Son Dakika: Türk Silahlı Kuvvetleri'nde toplam 156 koronavirüs
                  vakası bulunuyor
                </h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
