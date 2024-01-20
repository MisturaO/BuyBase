import { StyleSheet, css } from 'aphrodite';
import productImg from '/assets/images/image 4.png';
import ProductFeatureItem from './ProductFeatureItems';
import React from 'react';
import  useScreenSize from '../../../hooks/useScreensize'

  
export default function ProductFeature() {
 const { screenWidth  } = useScreenSize();
  const productImages = [productImg, productImg, productImg, productImg];
  return (
    <>
      <div className={css(style.ProductFeature)}>
        {screenWidth <= 1024
        ? 
        productImages.slice(0, 3).map((Image, index) => (
          <React.Fragment key={index}>
            {index !== 0 && (<div className={css(style.verticalLine)} />)}
              <ProductFeatureItem image={Image}/>
        </React.Fragment>))
        :
        productImages.map((Image, index) => (
          <React.Fragment key={index} >
            {index !== 0 && (
              <div className={css(style.verticalLine)} />
            )}
              <ProductFeatureItem image={Image}/>
        </React.Fragment>
        ))}
        
      </div>
    </>
  );
}

const screenSize = {
  smartphone: '@media(max-width: 767px)',
  tablets: '@media(min-width: 768px) and (max-width: 1024px)'
}
const style = StyleSheet.create({
  ProductFeature: {
    background: '#F8F3F0',
    height: '141px',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'row',
    [screenSize.smartphone]: {
      height: '100px',
    
    }

  },
  verticalLine: {
    borderLeft: '1px solid black',
    position: 'relative',
    height: '50%',
    marginRight: '35px',
    [screenSize.smartphone]: {
      height: '50px',
      marginRight: '10px',
    
    }
  }
});
