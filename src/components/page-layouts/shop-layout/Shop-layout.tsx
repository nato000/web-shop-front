import { Outlet } from 'react-router-dom';
import { ShopAside } from '../shop-aside/Shop-aside';
import { ShopHeader } from '../shop-header/Shop-header';
import { ShopFooter } from '../shop-footer/Shop-footer';
import './layout.css';
import React, { useState } from 'react';
import { getProducts } from '../../../api/products.api';

export const ShopPageLayout: React.FC = () => {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

  const productData = getProducts();

  console.log('ProductData: ', productData);

  const handleToggleAside = () => {
    setIsAsideVisible(!isAsideVisible);
  };
  return (
    <>
      <div className='page-wrapper'>
        <ShopAside isVisible={isAsideVisible} />
        <div className='content-wrapper'>
          <ShopHeader onToggleAside={handleToggleAside} />
          <div className='main-wrapper'>
            <Outlet />
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, provident illo? Iusto,
              veritatis, officia vitae quis temporibus alias pariatur qui fugiat amet recusandae
              quas hic illum sequi sapiente, illo magnam.
            </p>
            <ShopFooter />
          </div>
        </div>
      </div>
    </>
  );
};
