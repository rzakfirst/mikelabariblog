import React from 'react';
import Image from 'next/image';
import { grpahCMSImageLoader } from '../util';
import { Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faWhatsapp, faYoutube, faFacebook, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';


const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-8 relative rounded-lg bg-yellow-100 bg-opacity-100" >
    <div className=" left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="250px"
        width="250px"
        className="align-middle rounded-full"
        src={require('../public/logo.png')}
      />
      <h1 className='text-color-black bottom-10'>Ku biyo mu bisa wannan shafikan</h1>
      <Col className='social-icons'>
        <a href="https://www.facebook.com/mikelabaritv" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className='facebook'/>
        </a>
        <a href="https://wa.me/message/AOQFJPCEPYJ5A1" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} className='whatsapp'/>
        </a>
        <a href="http://youtube.com/c/mikelabaritv" target="_blank">
          <FontAwesomeIcon icon={faYoutube} className='youtube'/>
        </a>
        <a href="https://instagram.com/mikelabari_tv" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className='instagram'/>
        </a>
        <a href="https://tiktok.com/@mikelabaritv" target="_blank">
          <FontAwesomeIcon icon={faTiktok} className='tiktok'/>
        </a>
      </Col>
    </div>
  </div>
);


export default Author;
