import { StyleSheet, css } from 'aphrodite';
import productImg from '/assets/images/image 4.png';
import ProductFeatureItem from './ProductFeatureItems';

export default function ProductFeature() {
  const productImages = [productImg, productImg, productImg, productImg];
  return (
    <>
      <div className={css(style.ProductFeature)}>
        <ProductFeatureItem prodImages={productImages} />
      </div>
    </>
  );
}

const style = StyleSheet.create({
  ProductFeature: {
    background: '#F8F3F0',

    height: '141px',

    display: 'flex',
    // justifyContent: "space-between",
    alignItems: 'center',
    // padding: "20%"
    flexDirection: 'column',
  },
});
