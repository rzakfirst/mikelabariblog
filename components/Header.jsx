import React, { useState, useEffect } from 'react';
import { grpahCMSImageLoader } from '../util';
import Image from 'next/image';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="arriere container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-black-400 py-8">       
        <div className=" left-0 right-100 -top-0 ">
         <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt="test"
          height="150px"
          width="150px"
          className="align-middle rounded-full"
          src={require('../public/logo.png')}
        />
    </div>
         <Link href="/">
            <span className="cursor-pointer left-0 font-bold text-4x10 text-black">Mi Ke Labari ?!</span>
          </Link>
        

        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-yellow-400 ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Header;
