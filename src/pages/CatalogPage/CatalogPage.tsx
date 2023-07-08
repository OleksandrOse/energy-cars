import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useSearchParams } from 'react-router-dom';
import { CatalogListMenu } from '../../components/CatalogListMenu/CatalogListMenu';

import { Pagination } from '../../components/Pagination/Pagination';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Product } from '../../types/Product';
import { NewAuto } from '../../components/NewAuto/NewAuto';
const API_URL = 'https://test-autodb.onrender.com/users';

type Props = {
  title: string;
};

export const CatalogList: FC<Props> = ({ title }) => {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get(API_URL, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then(res => {
      console.log(res.data);
      setVisibleProducts(res.data)
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <main className="page__main">
      <div className="catalog-list container">
        <h1 className="page__section-title">{title}</h1>
        <NewAuto setVisibleProducts={setVisibleProducts} />

        <div className="catalog-list__content">
          {visibleProducts.map(p => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      </div>
    </main>
  );
};
