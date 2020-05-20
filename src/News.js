import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import "./news.css";
import cov2 from "./cov2.jpg";

import cov3 from "./cov3.jpg";
import cov4 from "./cov4.jpg";
import cov5 from "./cov5.jpg";
import cov6 from "./cov6.jpg";

export default class News extends Component {
  state = {
    news_id: "",
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ news_id: this.props.location.state.news_id });
    }
  }

  render() {
    console.log(this.state.news_id);

    if (this.state.news_id != "") {
      if (this.state.news_id == "3") {
        return (
          <div className="news-container">
            <div className="news-header">
              <h1>
                {" "}
                Koronavirüs sürecinde 'klima' uyarısı!
                <span className="news-date"> 20.05.2020 - 11:57 </span>
              </h1>
            </div>

            <div className="news-brief">
              Dicle Üniversitesi Çocuk Göğüs Hastalıkları Anabilim Dalı Öğretim
              Üyesi Doç. Dr. Velat Şen, yaz aylarının gelmesiyle klima
              kullanımının artacağını belirterek, "Klimalar kronavirüs için bir
              kaynak oluşturmamakta" dedi
            </div>

            <div className="news-brief">
              <div className="news-image-block">
                <img
                  className="d-block news-image"
                  src={cov3}
                  alt="First slide"
                />
              </div>
              Pandemi hastanesi olarak hizmet veren DÜ Kalp Hastanesinde yeni
              tip koronavirüs (Kovid-19) yoğun bakım ünitelerinden sorumlu Doç.
              Dr. Velat Şen, yaz aylarının yaklaştığına değinerek, koronavirüs,
              diğer solunum yolu virüsleri ve bakteri gibi mikroorganizmalarla
              mücadele için ev ve çalışma ortamlarının havalandırılmasının
              önemine işaret etti. Şen, klimalı ortamlarda özelikle yaşlı,
              bebek, çocuk ve bağışıklık sistemi zayıf olanların daha da
              hassasiyet göstermeleri gerektiğini bildirdi.
            </div>

            <div className="news-body">
              <div className="news-mini-header">
                "VİRÜSÜN YAYILIM HIZININ DAHA DA AZALACAĞINI DÜŞÜNÜYORUZ"
              </div>
              Koronavirüse yönelik çalışmalarda güneş ışığı ve nem oranının
              virüsün sağ kalmasını etkilediğinin görüldüğüne dikkati çeken Şen,
              şunları belirtti: "Havalar gittikçe ısınmaya başladı. Özelikle
              ülkemiz gibi yaz aylarını çok sıcak geçiren bölgelerde virüsün
              etkinliği giderek azalacak. Yapılan çalışmalarda özellikle Amerika
              Birleşik Devletleri'nin ve İsviçre'nin içerisinde bulunduğu
              çalışmada yazın sıcak havayla beraber buna bağlı nem oranının
              düşmesiyle virüsün hareket kontrolü daha kolay olacaktır. Ancak
              tamamen kontrol altına alınacağı veya önlemlerin alınmaması
              anlamına da gelmemektedir. Ancak virüsün yayılım hızının daha da
              azalacağını düşünüyoruz."
              <div className="news-mini-header">
                "KLİMA BAKIMLARININ BELİRLİ PERİYOTLARLA YAPILMASI GEREKİYOR"
              </div>
              "Havaların ısınmasıyla bugünlerde Türkiye'nin birçok kesiminde
              özelikle de Güneydoğu Anadolu Bölgesi'nde klima kullanımının
              artacağını söyleyen Şen, vatandaşlara, bulundukları ortamlardaki
              pencereleri açıp, dış ortamdan hava almaları ve nem oranını ideal
              bir düzeyde tutmaları önerisinde bulundu. Şen, klimaların iç hava
              ortamını serinleterek bir konfor sağladığını fakat hava yoluyla
              bulaşan bazı mikroorganizmalar için aynı zamanda bir kaynak
              görevini de üstlendiğini dile getirerek, şu uyarıları yaptı:
              "Klima yoluyla bulaşan ve klima hastalığı olarak bilinen 'lejyoner
              hastalığı' bağışıklık sistemi zayıf olan bireylerde uygun önlem
              alınmasa üst solunum yoluyla başlayıp sonrasında zatürre
              hastalığına ilerleyebilmekte ve ağır sağlık sonuçlarına neden
              olabilmektedir. Koronavirüs için aynı şeyi söylemek doğru değil.
              Klimalar çok rahat bir şekilde söyleyebiliriz ki koronavirüs için
              bir kaynak oluşturmamakta. Ancak evdeki klimaların çok düzenli
              aralıklarla filtrelerinin değiştirilmesi, hijyen yapılması,
              bakımlarının belirli periyotlarla yapılması gerekiyor." Klimada
              filtrasyon mekanizmalarının sağlıklı olması gerektiğini belirten
              Şen, sosyal mesafeye dikkat edilerek, bakımı yapılmış, filtreleri
              değiştirilmiş, temizliği yapılmış klimaların bulunduğu ortamda
              olmanın sakınca oluşturmayacağını aktardı.
              <div className="news-mini-header">
                KARANTİNADA BULUNANLARA UYARI
              </div>
              Şen, koronavirüsün sıcaklığın 20 derecenin üzerinde yine nemin
              yüzde 40-50'nin üzerinde olduğu ortamlarda çok daha iyi kontrol
              edildiğinin bilindiğini anlatarak, izolasyon sürecinde olan,
              karantinada bulunanların ortam sıcaklığını uygun koşullarda
              sağlaması gerektiğini belirtti. Daha düşük sıcaklıklarda ise bu
              virüsün yaşamsal sürelerinin daha uzun olduğunu dile getiren Şen,
              "Bu nedenle karantinada kalan hastalarımıza ortamın sıcaklığını
              çok düşürmemelerini ve nem ayarını iyi yapmalarını öneriyoruz"
              ifadesini kullandı.
            </div>
          </div>
        );
      } else if (this.state.news_id == "4") {
        return (
          <div className="news-container">
            <div className="news-header">
              <h1>
                {" "}
                12 Mayıs Koronavirüs tablosu! Corona virüsü son dakika Türkiye
                vaka ve ölüm sayısı! Koronavirüs son durum
                <span className="news-date"> 12.05.2020 - 20:00 </span>
              </h1>
            </div>

            <div className="news-brief">
              Sağlık Bakanlığı, corona virüsü son dakika vaka sayısı ve ölüm
              sayısını açıkladı. Türkiye'de güncel Koronavirüs vaka ve ölüm
              rakamlarını her gün açıklıyor. En son Türkiye corona virüs
              tablosunu vatandaşlar tarafından merak ediliyor. Peki Corona
              virüsü son dakika vaka sayısı kaç oldu? İşte 12 Mayıs 2020 Türkiye
              günlük Koronavirüs tablosu...
            </div>

            <div className="news-body">
              <div className="news-image-block">
                <img
                  className="d-block news-image"
                  src={cov4}
                  alt="First slide"
                />
              </div>
              Sağlık Bakanlığı resmi internet sitesinde corona virüse dair son
              rakamları yayınlıyor. Sağlık Bakanı Fahrettin Koca ise Twitter
              hesabından güncel tabloyu yayınlıyor. Türkiye günlük koronavirüs
              tablosuna göre vaka sayısı 141.475'e yükseldi. Koronavirüs
              sebebiyle toplam 3.894 vatandaşımız hayatını kaybetti. İşte güncel
              Türkiye koronavirüs tablosu...
              <div className="news-mini-header">
                {" "}
                KORONAVİRÜS TABLOSU - 12 MAYIS 2020{" "}
              </div>
              Sağlık Bakanı Fahrettin Koca, 12 Mayıs Türkiye Günlük Koronavirüs
              Tablosu'nu yayınladı. Bakan Koca Twitter'dan şu açıklamayı yaptı;
              "Yeni vaka sayısındaki artış öngörülebilir sınırlarda. TOPLAM
              VAKALARIN %70’İ İYİLEŞMİŞ DURUMDA. Yoğun bakım hasta sayımız
              azalmaya devam ediyor. Maske + sosyal mesafe: Virüse karşı gücümüz
              bu! Risk kalabalık ortamlarda. Uzak duralım."
              <div className="news-image-block">
                <img
                  className="d-block news-image"
                  src={cov5}
                  alt="First slide"
                />
              </div>
              11 Mayıs (dün) koronavirüs tablosu aşağıdaki durumdaydı.
              <div className="news-image-block">
                <img
                  className="d-block news-image"
                  src={cov6}
                  alt="First slide"
                />
              </div>
              <div className="news-mini-header">
                TÜRKİYE'DE KORONAVİRÜS SON DURUM
              </div>
              Türkiye'de son 24 saatte 1704 kişiye yeni tip koronavirüs
              (Kovid-19) tanısı konulduğu, 53 kişinin hayatını kaybettiği,
              toplam vaka sayısının 141 bin 475 ve can kaybının 3 bin 894 olduğu
              açıklandı. Sağlık Bakanlığının internet sitesinde yer alan ve
              Sağlık Bakanı Fahrettin Koca'nın da Twitter'dan paylaştığı
              "Türkiye Günlük Koronavirüs Tablosu"nun güncel verilerine göre,
              bugün 37 bin 351 test yapıldı, 1704 kişiye Kovid-19 tanısı
              konuldu. KORONAVİRÜS SON DAKİKA HABERLERİ İÇİN TIKLAYINIZ! Son 24
              saatte 53 hasta vefat etti, 3 bin 109 hasta iyileşti. Toplam test
              sayısı 1 milyon 440 bin 671, vaka sayısı 141 bin 475 ve vefat
              sayısı 3 bin 894 oldu. Toplam yoğun bakımdaki hasta sayısı 1045,
              solunum cihazına bağlı hasta sayısı 576 ve iyileşen sayısı 98 bin
              889 olarak kayıtlara geçti.
              <div className="news-mini-header">
                DÜNYA GENELİ KORONAVİRÜS SON DURUMU
              </div>
              ABD'de Kovid-19 nedeniyle hayatını kaybedenlerin sayısı son 24
              saatte 1203 artarak 82 bin 10'a ulaştı. İngiltere'de Kovid-19
              nedeniyle ölenlerin sayısı son 24 saatte 627 artarak 32 bin 692
              oldu. İtalya'da Kovid-19'dan hayatını kaybedenlerin sayısı son 24
              saatte 172 artarak 30 bin 911'e yükseldi.
            </div>
          </div>
        );
      } else if (this.state.news_id == "2") {
        return (
          <div className="news-container">
            <div className="news-header">
              <h1>
                {" "}
                Son Dakika: Türk Silahlı Kuvvetleri'nde toplam 156 koronavirüs
                vakası bulunuyor
                <span className="news-date"> 20.05.2020 03:58 </span>
              </h1>
            </div>

            <div className="news-brief">
              Son dakika: Bakanlığın bayramlaşma töreninde konuşan Milli Savunma
              Bakanı Hulusi Akar, "Şu anda 156 koronavirüs testi pozitif çıkan
              arkadaşımız var, bunların tamamı kontrol altında ve hiçbirinde
              kritik durum yok." dedi.
            </div>

            <div className="news-body">
              <strong>Milli Savunma Bakanlığı</strong>'nda{" "}
              <strong>Ramazan Bayramı</strong> dolayısıyla bayramlaşma töreni
              düzenlendi. Sınırlı katılımla gerçekleştirilen törende koronavirüs
              tedbirleri harfiyen uygulanırken Milli Savunma Bakanı Hulusi Akar,
              TSK içerisinde toplam 156 koronavirüs vakası olduğunu açıkladı.
              <br></br> <br></br>
              <strong>Hulusi Akar'ın konuşmasından satır başları:</strong>{" "}
              "Bizim için en korkulu rüya operasyon bölgelerine bu salgının
              sıçramasıydı. Böyle bir şey olduğunda karşınızda terörist,
              arkanızda virüs çok sıkıntılı, istenmeyen durumlarla
              karşılaşabilirdik. Alınan tedbirlerle çok şükür şu ana kadar
              operasyon bölgelerimizde bizim koronavirüs vakamız olmadı.
            </div>

                        
            <div className="news-image-block">
              <img
                className="d-block news-image"
                src={cov2}
                alt="First slide"
              />
            </div>

            <div className="news-body">
              <div className="news-mini-header">
                "156 VAKA İÇERİSİNDE KRİTİK DURUMDA OLAN YOK"
              </div>
              Gemilerimiz, filolarımız çok önemli. Bu konuda da ilgili
              arkadaşlarımızın aldığı tedbirlerle oralarda da zorluk yaşanmadı.
              Şu ana kadar gelinen noktada rakamlara bakıldığında gerçekten
              övünülecek bir durum var. Dünya genelinde bu musibetle karşılaşan
              ordular ABD, Almanya, Rusya, İtalya, Fransa gibi, vaka sayısının
              azlığı bakımından incelendiğinde Türk Silahlı Kuvvetleri en
              başarılı durumda. Bundan dolayı emeği geçenleri tekrar kutluyorum,
              gerçekten büyük bir başarı bu. Şu anda 156 pozitif arkadaşımız
              var, bunların tamamı kontrol altında ve bunların hiçbirinde kritik
              durum yok.
            </div>

            <div className="news-body">
              <div className="news-mini-header">
                YERLİ SOLUNUM CİHAZI SAHRA'DA SONA GELİNDİ
              </div>
              Makina ve Kimya Endüstrisi Kurumumuz (MKEK) tamamen yerli ve milli
              imkanlarla üretilen Sahra adı verilen mekanik solunum cihazını hem
              tasarladı hem üretti. Cihazın sertifikasyon sürecinin bugün yarın
              bitmesini bekliyoruz. Bu bittikten sonra tamamen milli ve yerli,
              tasarımı da bize ait olmak üzere Sahra solunum cihazını haftada
              500 adet üretmeye başlayacağız.
            </div>

            <div className="news-body">
              <div className="news-mini-header">"35 MİLYON MASKE ÜRETİLDİ"</div>
              Bugüne kadar 35 milyon maske, 500 bin civarında tulum ve 160 ton
              dezenfektan üretildi. Bütün bunları Silahlı Kuvvetlerimize ve
              ilgili kurumlarımıza ulaştırdık, ulaştırmaya devam ediyoruz.
            </div>

            <div className="news-body">
              <div className="news-mini-header">
                2020'DE 1411 TERÖRİST ETKİSİZ HALE GETİRİLDİ
              </div>
              5 operasyon bölgesinde, mavi vatanımızda TSK'nın kahraman
              mensupları büyük bir fedakarlıkla görevlerini yerine getiriyor.
              Suriye ve Irak'ın kuzeyinde terörle mücadelemiz aralıksız devam
              ediyor. Oradaki arkadaşlarımız kahraman ve fedakarca mücadeleyi
              sürdürüyor. 1 Ocak'tan bu yana 1411 terörist yapılan operasyonlar
              sonucu etkisiz hale getirildi.
            </div>



          </div>
        );
      }
    } else {
      return (
      <div className="news-container">

      </div>
      );
    }
  }
}
