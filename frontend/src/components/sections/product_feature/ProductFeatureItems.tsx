import { StyleSheet, css } from 'aphrodite';
import React from 'react';

interface Props {
  image: string;
}

export default function ProductFeatureItem({image}: Props) {
  return (
    <React.Fragment> {/*key={index} */}
          <div className={css(style.imageContainer)}>
            <img 
              src={image}
              alt='products'
              style={{ width:'100%', height:'auto' }}
            />
          </div>
          <div className={css(style.prodDescription)}>
            <p className={css(style.textHeader)}>Clap wears</p>
            <p className={css(style.p)}>lorem ipsun katahuyn</p>
          </div>
    </React.Fragment>
  );
}

const screenSize = {
  smartphone: '@media(max-width: 767px)',
  tablets: '@media(min-width: 768px) and (max-width: 1024px)'
}

const style = StyleSheet.create({
    imageContainer: {
      padding: '10px',
      [screenSize.smartphone]: {
        // padding: '0px'
        // marginBottom: '-10px'
        // marginLeft: '10px',
        // height: '0px'
      }


    },
    prodDescription: {
      fontFamily: 'Baloo Tammudu 2',
      textAlign: 'left',
      fontStyle: 'normal',
      marginRight: '30px',
    },
    textHeader: {
      color: '#000',
      fontStyle: 'normal',
      // lineHeight: '150%' /* 13.2px */,
      // marginTop: '10px',
      marginLeft: '20px',
      fontSize: '14px',
      fontWeight: 600,
      [screenSize.smartphone]: {
        // display: 'block',
        fontSize: '12px',
      marginLeft: '5px',
        // fontWeight: 400,
        // marginLeft: '5px',
        // marginTop: '60px',
        // marginRight: '50px'



    },
    },
    p: {
      color: '#000',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 400,
      // lineHeight: '150%' /* 13.2px */,
      marginTop: '-10px',
      marginLeft: '20px',
      // padding: "0px",
      [screenSize.smartphone]: {
        display: 'none',
    },
    },
    // [screenSize.smartphone]: {
    //   mobile: {
    //     display: 'none'
    //   }
    // }

});

