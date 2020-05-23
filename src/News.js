import React, { Component } from "react";
import $ from "jquery";
import "./news.css";
import { Link } from "react-router-dom";

import cov2 from "./cov2.jpg";

import cov3 from "./cov3.jpg";
import cov4 from "./cov4.jpg";
import cov5 from "./cov5.jpg";
import cov6 from "./cov6.jpg";
import cov7 from "./cov7.jpg";
import cov9 from "./cov9.jpg";
import cov11 from "./cov11.jpg";

export default class News extends Component {
  render() {
    return (
      <div>
        <div className="news-panel">
          <div className="news-panel-header">Last Coronavirus News</div>
          <div className="news-panel-body">
            <div className="row">
              <div className="col-lg-4 news-item" id="1">
                <Link
                  to={{
                    pathname: "/news",
                    state: { news_id: 2 },
                  }}
                >
                  <div className="news-card">
                    <div className="news-image">
                      <img
                        className="d-block news-panel-image"
                        src={cov3}
                        alt="First slide"
                      />
                    </div>
                    <div className="news-briefing">
                      <h3>Koronavirüs sürecinde 'klima' uyarısı!</h3>

                      <span>
                        {" "}
                        Dicle Üniversitesi Çocuk Göğüs Hastalıkları Anabilim
                        Dalı Öğretim Üyesi Doç. Dr. Velat Şen, yaz aylarının
                        gelmesiyle klima kullanımının artacağını belirterek,
                        "Klimalar kronavirüs için bir kaynak oluşturmamakta"
                        dedi
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4">
                <Link
                  to={{
                    pathname: "/news",
                    state: { news_id: 3 },
                  }}
                >
                  <div className="news-card">
                    <div className="news-image">
                      <img
                        className="d-block news-panel-image"
                        src={cov2}
                        alt="First slide"
                      />
                    </div>
                    <div class="news-briefing" style={{ bottom: "-5%" }}>
                      <h3>
                        {" "}
                        Türk Silahlı Kuvvetleri'nde toplam 156 koronavirüs
                        vakası bulunuyor
                      </h3>

                      <span>
                        {" "}
                        Son dakika: Bakanlığın bayramlaşma töreninde konuşan
                        Milli Savunma Bakanı Hulusi Akar, "Şu anda 156
                        koronavirüs testi pozitif çıkan arkadaşımız var,
                        bunların tamamı kontrol altında ve hiçbirinde kritik
                        durum yok." dedi.
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4">
                <Link
                  to={{
                    pathname: "/news",
                    state: { news_id: 4 },
                  }}
                >
                  <div className="news-card">
                    <div className="news-image">
                      <img
                        className="d-block news-panel-image"
                        src={cov4}
                        alt="First slide"
                      />
                    </div>
                    <div class="news-briefing" style={{ bottom: "-20%" }}>
                      <h3>
                        {" "}
                        12 Mayıs Koronavirüs tablosu! Corona virüsü son dakika
                        Türkiye vaka ve ölüm sayısı! Koronavirüs son durum
                      </h3>

                      <span>
                        {" "}
                        Sağlık Bakanlığı, corona virüsü son dakika vaka sayısı
                        ve ölüm sayısını açıkladı. Türkiye'de güncel Koronavirüs
                        vaka ve ölüm rakamlarını her gün açıklıyor. En son
                        Türkiye corona virüs tablosunu vatandaşlar tarafından
                        merak ediliyor. Peki Corona virüsü son dakika vaka
                        sayısı kaç oldu? İşte 12 Mayıs 2020 Türkiye günlük
                        Koronavirüs tablosu...
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row mt-5r">
              <div className="col-lg-4">
                <Link
                  to={{
                    pathname: "/news",
                    state: { news_id: 5 },
                  }}
                >
                  <div className="news-card">
                    <div className="news-image">
                      <img
                        className="d-block news-panel-image"
                        src={cov7}
                        alt="First slide"
                      />
                    </div>
                    <div className="news-briefing" style={{ bottom: "-10%" }}>
                      <h3>Koronavirüs salgınında can kaybı 4276'ya yükseldi</h3>

                      <span>
                        {" "}
                        Sağlık Bakanlığı, koronavirüs sebebiyle 27 kişinin daha
                        yaşamını yitirdiğini açıkladı. Salgın nedeniyle hayatını
                        kaybedenlerin toplam sayısı 4 bin 276'ya ulaşırken,
                        toplam vaka sayısı 154 bin 500'e yükseldi
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4">
                <Link
                  to={{
                    pathname: "/news",
                    state: { news_id: 6 },
                  }}
                >
                  <div className="news-card">
                    <div className="news-image">
                      <img
                        className="d-block news-panel-image"
                        src={cov11}
                        alt="First slide"
                      />
                    </div>
                    <div class="news-briefing" style={{ bottom: "-16%" }}>
                      <h3>
                        {" "}
                        Dr. Elif Ünüvar: "Korona virüs hasar bırakabilir"
                      </h3>

                      <span>
                        {" "}
                        Acil Sorumlusu Dr. Elif Ünüvar, korona virüs tedavisi
                        gören hastaların iyileştikten sonra organlarında kalıcı
                        hasar olabileceğini belirterek, "Bu süreç bizde daha
                        yeni olduğu için net bir bilgi vermemiz şu anda çok zor
                        ama özellikle kronik hastalarda yüzde 2-3 oranında
                        kalıcı bir hasarın görüldüğünü biliyoruz" dedi.
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4">
                <Link
                  to={{
                    pathname: "/news",
                    state: { news_id: 7 },
                  }}
                >
                  <div className="news-card">
                    <div className="news-image">
                      <img
                        className="d-block news-panel-image"
                        src={cov9}
                        alt="First slide"
                      />
                    </div>
                    <div class="news-briefing" style={{ bottom: "-11%" }}>
                      <h3> Koronavirüs günlerinde psikolojiye dikkat!</h3>

                      <span>
                        {" "}
                        Psikolog Berk Karaoğlu, koronavirüs günlerinde kendisini
                        psikolojik olarak iyi hissetmeyen kişilere evcil hayvan
                        sahiplenmelerini tavsiye ederek, "Hayvanlar ve insanlar
                        arasında farklı bir bağ var. Onlara sürekli temas etmek,
                        evde hayvan beslemek psikolojiyi düzeltecektir" dedi.
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
