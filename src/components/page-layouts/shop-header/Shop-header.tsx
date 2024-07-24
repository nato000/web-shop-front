import React from 'react';
import './shop-header.css';

interface ShopHeaderProps {
  onToggleAside: () => void;
}

export const ShopHeader: React.FC<ShopHeaderProps> = (ShopHeaderProps) => {
  const { onToggleAside } = ShopHeaderProps;

  return (
    <>
      <div className='shop-header'>
        <div className='shop-header__left'>
          <button className='shop-header-left__aside-menu' onClick={onToggleAside}>
            burg
          </button>
        </div>
        <div className='shop-header__center'>
          <input type='search' className='shop-header-center__search' />
        </div>

        <div className='shop-header__right'>
          <button className='shop-header-right__btn'>NEWS</button>
          <button className='shop-header-right__btn'>RING</button>
          <button className='shop-header-right__btn'>PROFILE</button>
        </div>
      </div>
    </>
  );
};
