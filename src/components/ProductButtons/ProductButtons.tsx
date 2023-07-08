import { FC } from 'react';

import classNames from 'classnames';

export const ProductButtons: FC = () => {
  
  return (
    <div className="product-card__buttons">
      <button
        className={classNames(

          'product-card__button',
          'product-card__button-cart',
          
        )}
        type="button"
      >
        Add to cart
      </button>
      <button
        className={classNames(

          'product-card__button',
          'product-card__button-favorite',
          'product-card__button product-card__button-favorite',
        )}
        type="button"
        data-cy="addToFavorite"
        
      >
      </button>
    </div>
  );
};
