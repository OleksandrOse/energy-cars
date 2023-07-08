import React from 'react';
import { Product } from '../../types/Product';

import './ProductCard.scss';

type Props = {
  product: Product,
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    name,
    foto,
    price,
    year,
  } = product;

  console.log(foto)

  return (
    <div className="product-card">
      <img
        src={`${foto}`}
        alt={name}
        className="product-card__image"
      />

      <h2 className="product-card__title">{name}</h2>

      <p className="product-card__price">
        <span className="product-card__current-price">
          {`$${price}`}
        </span>
      </p>

      <div className="product-card__info">
        <p className="product-card__info-text">
          Рік випуску
          <span className="product-card__year">{year || '-'}</span>
        </p>
      </div>
    </div>
  );
};
