// import { Footer } from '../Footer';
import { FeaturedSection } from '../sections/featured';
import { ProductItemSection } from '../sections/all_product_items';
import { DashBoardWrapper } from './dashboard.styled';
export default function DashBoard() {
  return (
    <DashBoardWrapper>
      <FeaturedSection />
      <ProductItemSection />
    </DashBoardWrapper>
  );
}
