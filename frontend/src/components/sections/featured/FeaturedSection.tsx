import { FeaturedSectionWrapper } from './featuredsection.styled';
import FeaturedProductCard from '../../reusable/cards/FeatureProductCard';
import { productdata } from './constant';

const FeaturedSecton = () => {
  return (
    <FeaturedSectionWrapper className='featured'>
      {productdata.map((item, i) => {
        return (
          <FeaturedProductCard
            key={`product_card${i}${item.image}`}
            product={item}
          />
        );
      })}
    </FeaturedSectionWrapper>
  );
};

export default FeaturedSecton;
