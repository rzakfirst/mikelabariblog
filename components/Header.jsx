import React, { useState, useEffect } from 'react';
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
    <nav className="navbar navbar-expand-lg padding-bottom-10 navbar-dark bg-dark">
      <div className="container">
        <a href="/">
          <Image
            unoptimized
            alt="test"
            height="80px"
            width="80px"
            // eslint-disable-next-line global-require
            src={require('../public/logo.png')}
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse" id="navbarNavAltMarkup">
          <div className="hidden md:float-left md:contents">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-yellow-400 ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
