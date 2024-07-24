import { Link } from 'react-router-dom';
import './shop-aside.css';
import React from 'react';

interface ShopAsideProps {
  isVisible: boolean;
}

export const ShopAside: React.FC<ShopAsideProps> = (ShopAsideProps) => {
  const { isVisible } = ShopAsideProps;
  return (
    <>
      <aside className={`shop-aside ${isVisible ? 'shop-aside--active' : ''}`}>
        <div className='shop-aside__header'>
          <Link to='/' className='shop-aside-header__logo'>
            LOGO
          </Link>
        </div>
        <div className='shop-aside__content'>
          <nav className='shop-aside-content__nav'>
            <ul className='shop-aside-content-nav__list'>
              <li className='shop-aside-content-nav-list__item'>
                <Link to='/' className='shop-aside-header__logo'>
                  item
                </Link>
              </li>
              <li className='shop-aside-content-nav-list__item'>
                <Link to='/' className='shop-aside-header__logo'>
                  item
                </Link>
              </li>
              <li className='shop-aside-content-nav-list__item'>
                <Link to='/' className='shop-aside-header__logo'>
                  item
                </Link>
              </li>
              <li className='shop-aside-content-nav-list__item'>
                <Link to='/' className='shop-aside-header__logo'>
                  item
                </Link>
              </li>
              <li className='shop-aside-content-nav-list__item'>
                <Link to='/' className='shop-aside-header__logo'>
                  item
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='shop-aside__footer'>
          <p className='shop-aside-footer__info'>INFO</p>
        </div>
      </aside>
    </>
  );
};
