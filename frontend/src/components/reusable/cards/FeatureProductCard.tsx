import React from 'react';

import { Button, FeaturedImageDisplayWrapper } from './featured.styled';
import { formatCurrency } from '../../../utils/utils';
import { Product } from '../../../types';

interface Props {
  product: Product;
}

const FeaturedProductCard: React.FC<Props> = ({ product }) => {
  return (
    <FeaturedImageDisplayWrapper
      className={`${
        product.featured ? 'large' : product.banner ? 'banner' : 'small'
      }`}
      $type={product.featured ? 'large' : product.banner ? 'banner' : 'small'}
      $imageUrl={product.image}
    >
      <div>
        <img src={product.image} alt={product.product_title} />
      </div>
      <div>
        <div>
          <div>
            <h3>{product.product_title}</h3>
            <span>{product.description}</span>
          </div>
          <p>{formatCurrency(product.price)}</p>
        </div>
        <Button>
          <span>Buy Now</span>
        </Button>
      </div>
    </FeaturedImageDisplayWrapper>
  );
};

export default FeaturedProductCard;
