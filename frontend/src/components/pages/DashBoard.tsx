// import { Footer } from '../Footer';
import { FeaturedSection } from '../sections/featured';
import { ProductItemSection } from '../sections/all_product_items';
import { DashBoardWrapper } from './dashboard.styled';
import { ProductFeature } from '../sections/product_feature';
import { Footer } from '../sections/footer';
export default function DashBoard() {
  return (
    <DashBoardWrapper>
      <FeaturedSection />
      <ProductItemSection />
      <ProductFeature />
      <Footer />
    </DashBoardWrapper>
  );
}
