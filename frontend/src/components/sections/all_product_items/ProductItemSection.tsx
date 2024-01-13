import { ProductItemsWrapper } from './productitemsection.syled';
import { ProductCard } from '../../reusable/cards';
import { FeaturedBanner } from '../featured';
import { all_product } from './constant';
import useScreenSize from '../../../hooks/useScreensize';
import { getScreenDifference } from '../../../utils/utils';
const ProductItemSection = () => {
  const { screenWidth } = useScreenSize();
  return (
    <ProductItemsWrapper>
      {Array.from({ length: 25 }).map((_product, index, array) => {
        const toAddBanner =
          array.length > 10
            ? array.length - getScreenDifference(screenWidth)
            : array.length - 1;
        // display the featured banner and the product when there is five products left
        return toAddBanner !== index ? (
          <ProductCard
            key={`product_item${index}`}
            product={
              all_product[Math.floor(Math.random() * all_product.length)]
            }
          />
        ) : (
          <>
            {/*:TODO: to be replaced with the banner */}
            <ProductCard
              key={`product_item${index}`}
              product={
                all_product[Math.floor(Math.random() * all_product.length)]
              }
            />
            <FeaturedBanner key={`featured_banner${toAddBanner}`} />{' '}
          </>
        );
      })}
    </ProductItemsWrapper>
  );
};

export default ProductItemSection;
