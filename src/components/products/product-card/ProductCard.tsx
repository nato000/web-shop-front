import { IProduct } from '../../pages/Shop/Main/Main';
import './product-card.css';

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <>
      <div className='product-card'>
        <img src='' alt='product' className='product-card__image' />
        <h5 className='product-card__title'>{product.name}</h5>
        <div className='product-card__price'>
          <span className='product-card-price__value'>{parseFloat(product.price).toFixed(2)}</span>
          <span className='product-card-price__currency'>{product.currency}</span>
          <button className='product-card-price__add-to-cart'>ADD</button>
        </div>
      </div>
    </>
  );
};
