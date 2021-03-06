import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faWhatsapp, faYoutube, faFacebook, faInstagram, faTiktok,} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  return (
    <footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span styleName='titl'> <u>GAME DA MU</u></span> Tashar ๐บ Mi ke Labari?! 
Kafa ๐ก ce wacce ke Ka maku ingantattun Labaran ๐ Duniya ๐,
 Musamman na ฦasar Niger ๐ณ๐ช. 
Mi ke Labari ?! ,ba a iya Labarai ๐ kawai muka tsaya ba, tasharmu ๐บ na yaษa al'adun Niger ๐ณ๐ช ,
da kuma Tallata Mawaฦan ๐ต gargajiya da na zamani,kai har da ma fitattun 
โญ๏ธ Mutanen suke bada gudummawa ta fannoni dabam-dabam wajan cigaban ฦasar Niger ๐ณ๐ช. Sauran zance , sai ku biyo mu ๐.
Mun gode ๐ !
    </p>
    <div className="icons">
    <a href="https://www.facebook.com/mikelabaritv" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className='iconfoot'/>
        </a>
        <a href="https://wa.me/message/AOQFJPCEPYJ5A1" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} className='iconfoot'/>
        </a>
        <a href="http://youtube.com/c/mikelabaritv" target="_blank">
          <FontAwesomeIcon icon={faYoutube} className='iconfoot'/>
        </a>
        <a href="https://instagram.com/mikelabari_tv" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className='iconfoot'/>
        </a>
        <a href="https://tiktok.com/@mikelabaritv" target="_blank">
          <FontAwesomeIcon icon={faTiktok} className='iconfoot'/>
        </a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
    <FontAwesomeIcon icon={faLocationDot}  className='iconfoot'/>

      <p><span> Birnin brussels</span> Jamhuriya Belgique</p>
    </div>
    <div>
    <FontAwesomeIcon icon={faPhone}  className='iconfoot'/>
      <p> (+32) 492 50 72 95</p>
    </div>
    <div>
    <FontAwesomeIcon icon={faEnvelope}  className='iconfoot'/>
      <p><a href="#"> mikelabaritv@gmail.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2> Mi Ke Labari<span> ?!</span></h2>
    <p className="menu">
      <a href="#"> Gida</a> |
      <a href="#"> Ayyuka</a> |
      <a href="#"> Tuntubar Mu</a>
    </p>
    <p className="name"> Hakin Malaka ยฉ 2022</p>
  </div>
</footer>
  );
};

export default Footer;
