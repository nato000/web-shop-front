import { Outlet } from 'react-router-dom';
import { ShopAside } from '../shop-aside/Shop-aside';
import { ShopHeader } from '../shop-header/Shop-header';
import { ShopFooter } from '../shop-footer/Shop-footer';
import './layout.css';
import React, { useState } from 'react';

export const ShopPageLayout: React.FC = () => {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

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
            <ShopFooter />
          </div>
        </div>
      </div>
    </>
  );
};
