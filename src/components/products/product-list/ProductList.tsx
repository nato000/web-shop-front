import { IProduct } from '../../pages/Shop/Main/Main';
import { ProductCard } from '../product-card/ProductCard';
import './product-list.css';

interface IProductListProps {
  product: IProduct;
}

export const ProductList: React.FC<IProductListProps> = ({ product }) => {
  console.log('product', product);

  return (
    <>
      <li className='product-list__item'>
        <ProductCard product={product} />
      </li>
    </>
  );
};
