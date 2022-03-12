import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faWhatsapp, faYoutube, faFacebook, faInstagram, faTiktok,} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  return (
    <footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span styleName='titl'> <u>GAME DA MU</u></span> Tashar 📺 Mi ke labari ?! Kafa 📡 ce wada kai kawo muku labarun 🗞 duniya 🌍 musaman na Niger 🇳🇪. 
     Ba’a ayi labari 🗞 muka tsaya ba ✅, muna yada al’adun Niger da Kuma mawakan 🎵 gargajiya da na zamani. Sai fitatun ⭐️ mutanen 👥 
     da suka kawo gudumuwa domin ci gaba a kowani panni cikin kasar Niger 🇳🇪.
     Za ku iya biyo mu domin zama cikakun Yan Mi ke labari ?! 💛
     Godiya Mu kai yi 😇.
    </p>
    <div className="icons">
    <FontAwesomeIcon icon={faFacebook} className='iconfoot'/>
    <FontAwesomeIcon icon={faWhatsapp} className='iconfoot'/>
    <FontAwesomeIcon icon={faTiktok} className='iconfoot'/>
    <FontAwesomeIcon icon={faYoutube} className='iconfoot'/>
    <FontAwesomeIcon icon={faInstagram} className='iconfoot'/>
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
      <p><a href="#"> mikelabari@gmail.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2> Mi Ke Labari<span> ?!</span></h2>
    <p className="menu">
      <a href="#"> Gida</a> |
      <a href="#"> Ayyuka</a> |
      <a href="#"> Tuntubar Mu</a>
    </p>
    <p className="name"> Hakin Malaka © 2022</p>
  </div>
</footer>
  );
};

export default Footer;
