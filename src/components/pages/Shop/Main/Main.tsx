import React, { useEffect, useState, useMemo } from 'react';
import { getProducts } from '../../../../api/products.api';
import './main.css';
import { ProductList } from '../../../products/product-list/ProductList';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  currency: string;
  price: string;
  imageData: string | null;
  category?: string;
  orderItems?: string;
}

export const MainPage: React.FC = () => {
  const [productData, setProductData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        const data = response.data;
        console.log(data);
        if (Array.isArray(data)) {
          setProductData(data);
        } else {
          setError('API response is not an array');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderedProductList = useMemo(() => {
    return productData.map((product) => <ProductList key={product.id} product={product} />);
  }, [productData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className='container'>
        <button className='main-button'>main</button>
        <ul className='product-list'>{renderedProductList}</ul>
      </div>
    </>
  );
};
