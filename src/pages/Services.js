import React, { Component } from 'react';
import Splash from '../core/Splash.js';
import Block from '../core/Block.js';
import SimpleBlock from '../core/SimpleBlock';

class Services extends Component {
    render() {

        return [
            <Block key="igui" image="images/iguiSplash1.png" imageLeft={true} lightText={false}>
                <h3>Web Uygulamaları</h3>
                <p>
                    Unity platformu için geliştirilmiş, çok karmaşık kullanıcı arayüzlerini bile kod yazmadan geliştirmeye yarayan bir geliştirici kitidir
                </p>
                <ul>
                    <li>Unity için geliştirilmiş ilk WYSIWYG kullanıcı arayüzü aracı</li>
                    <li>Windows, Mac OSX, Linux, iOS, Android ve WebGL platformları ile uyumlu</li>
                    <li>Kapsamlı ve kolay yerleşim düzeni sistemi</li>
                    <li>Güçlü ve kullanışlı animasyon altyapısı</li>
                    <li>C# ve JavaScript ile uyumlu otomatik kod üretimi ve entegrasyonu</li>
                    <li>Tüm cihazlarda mükemmel görüntü için gelişmiş ölçeklendirme</li>
                    <li>Dünya çapında endüstrinin önde gelen firmaları dahil, onbinden fazla kayıtlı geliştiricinin tercihi</li>
                </ul>
            </Block>,
            <SimpleBlock key="references" bgColor="#f5f5f5" style={{paddingTop:"25px", paddingBottom:"50px"}}>
                <div className="col">
                    <div className="row" style={{marginBottom:"10px"}}>
                        <div className="col text-center" style={{color:"#888888"}}>
                            <h6>Kullandığımız Teknolojiler</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md" data-toggle="tooltip" data-placement="top" title="Java">
                            <div className="tech java-logo"/>
                        </div>
                        <div className="col-md">
                            <div className="tech spring-logo" data-toggle="tooltip" data-placement="top" title="Spring Framework"/>
                        </div>
                        <div className="col-md">
                            <div className="tech postgresql-logo semi-opaque" data-toggle="tooltip" data-placement="top" title="PostgreSQL"/>
                        </div>
                        <div className="col-lg d-lg-none">
                        </div>
                        <div className="col-md">
                            <div className="tech react-logo" data-toggle="tooltip" data-placement="top" title="React"/>
                        </div>
                        <div className="col-md">
                            <div className="tech tomcat-logo semi-opaque" data-toggle="tooltip" data-placement="top" title="Apache Tomcat"/>
                        </div>
                        <div className="col-md">
                            <div className="tech git-logo semi-opaque" data-toggle="tooltip" data-placement="top" title="Git"/>
                        </div>
                        <div className="col-md">
                            <div className="tech unity-logo semi-opaque" data-toggle="tooltip" data-placement="top" title="Unity"/>
                        </div>
                    </div>
                </div>
            </SimpleBlock>,
            /*
            <SimpleBlock bgColor="#f5f5f5" key="ozellikler">
                <div className="col-sm-4 text-center">
                    <i className="fa fa-cogs size-48 gray"></i>
                    <br/>
                    <br/>
                    <h3>Esnek</h3>
                    <br/>
                    Esnek ve çok güzel bişeyler bişeyler yazmak lazim buralara uzun muzun ama kesin lazim
                </div>
                <div className="col-sm-4 text-center">
                    <i className="fa fa-server size-48 gray"></i>
                    <br/>
                    <br/>
                    <h3>Ölçeklenebilir</h3>
                    <br/>
                    İhtiyaçlarınız doğrultusunda kolaylıkla ölçeklenebilen yazılım altyapımız sayesinde, uygulamalarınız her zaman ilk günkü gibi hızlı ve tutarlı çalışır
                </div>
                <div className="col-sm-4 text-center">
                    <i className="ionicons ion-lock-combination size-48 gray"></i>
                    <br/>
                    <br/>
                    <h3>Güvenli</h3>
                    <br/>
                    Modern güvenlik standartlarına uygun
                </div>
            </SimpleBlock>,*/
            <Block key="labOto" image="images/labOto.png" imageLeft={true}>
                <h3>LabSis Çevre Laboratuvarı Otomasyon Sistemi</h3>
                <p>
                    LabSis çevre laboratuvarlarının ihtiyaçlarına özel olarak geliştirilmiş detaylı bir otomasyon yazılımıdır. 
                    Laboratuvarların hatasız ve hızlı bir şekilde işlemesi için birçok önemli özelliğe sahiptir.
                </p>
                <ul>
                    <li>Teklif süreçleri yönetimi</li>
                    <li>Detaylı mevzuat yönetimi</li>
                    <li>Tablo seçimi ile otomatik parametre ve sınır değer atanması</li>
                    <li>Güçlü raporlama altyapısı</li>
                    <li>Muhasebe entegrasyonu</li>
                    <li>Ölçüm cihazı entegrasyonları</li>
                </ul>
            </Block>,
            <Block key="tenis" parallaxImage="images/tennisCourt.jpg" image="images/tennisInHand.png" imageVerticalAlign="bottom" imageLeft={false} lightText={true}>
                <h3>TenisLig</h3>
                <p>
                    Tenis ligleri kurmak ve yönetmek için geliştirilmiş, otomatik ve kolay işleyen bir sistem
                </p>
                <ul>
                    <li>Özelleştirilebilir lig kuralları</li>
                    <li>Mobil cihazlar ile uyumlu</li>
                    <li>Kişisel takvim yönetimi</li>
                    <li>Detaylı teklif aşaması</li>
                    <li>Güvenli maç sonuçları</li>
                    <li>Otomatik zaman aşımları ve cezalar</li>
                    <li>Entegre kort rezervasyon yönetimi</li>
                </ul>
            </Block>,
            <Block key="cevOto" image="images/labOto.png" imageLeft={true}>
                <h3>Çevre Danışmanlık Otomasyon Sistemi</h3>
                <p>
                    Çevre mühendislik ve danışmanlık alanında hizmet veren şirketler için özel olarak geliştirilmiş bir yazılımdır.
                </p>
                <ul>
                    <li>Döküman ve bilgi yönetimi</li>
                    <li>İzleme takibi ve otomatik hatırlatmalar</li>
                    <li>Entegre evrak yönetimi</li>
                    <li>Raporlama</li>
                </ul>
            </Block>
        ];
    }
}

export default Services;
