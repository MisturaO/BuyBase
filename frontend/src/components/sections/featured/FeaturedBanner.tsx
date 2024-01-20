import { StyleSheet, css } from 'aphrodite';
import featureImg1 from '/assets/images/image 25.png';
import featureImg2 from '/assets/images/image 26.png';
import buttonIcon from '../../../assets/play button-01 1.svg';

export default function FeaturedBanner() {
  return (
    <>
      <section className={`${css(styles.featureItem)} featured`}>
        <div className={css(styles.Boxtext)}>
          <h2 className={css(styles.h2)}>OUR FEATURED ITEM</h2>
          <p className={css(styles.p)}>
            Ipsun lorem ajaxacum junfunjaj in linkin kilinkh hundref falcomat{' '}
            <br /> hunfrum
          </p>
          <button className={css(styles.button)} type='button'>
            <img
              src={buttonIcon}
              alt='button Icon'
              width='8'
              className={css(styles.buttonIcon)}
            />
            Buy Now
          </button>
        </div>
        <div className={css(styles.imageWrapper)}>
          <img src={featureImg2} alt='featureImg' height='270'  className={css(styles.featureImg2)}/>
          <img src={featureImg1} alt='featureImg' height='310' className={css(styles.featureImg1)}/>
        </div>
      </section>
    </>
  );
}

const screenSize = {
  smartphone: '@media(max-width: 767px)',
  tablets: '@media(min-width: 767px) and (max-width: 1200px)'
}

const styles = StyleSheet.create({
  featureItem: {
    width: '100%',
    height: 316,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9E6D7',
    position: 'relative',
    textAlign: 'left',
  },
  imageWrapper: {
    overflow: 'hidden',
  },
  h2: {
    color: '#4A3C3C',
    fontFamily: 'Baloo Tammudu 2',
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '100%' /* 52.8px */,
    // marginBottom: 90,
    // width: 1500,
    marginBottom: '10px',
  },
  p: {
    fontSize: 12,
    marginBottom: '50px',
  },
  Boxtext: {
    marginLeft: 100,
    [screenSize.smartphone]: {
      marginLeft: '30px'
    }
  },
  button: {
    color: '#C55656',
    border: '1px solid #C55656',
    borderRadius: '3px 0 3px 0',
    fontSize: 10,
    padding: '4px',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },

  buttonIcon: {
    marginRight: '8px',
  },
  featureImg2 : {
  [screenSize.tablets]: {
    
      display: 'none',
  },
  [screenSize.smartphone]: {
    display: 'none'
  }
},
featureImg1: {
  [screenSize.tablets]: {
    marginRight: '100px'
},
[screenSize.smartphone]: {
    marginRight: '250px',
    // height: '250px'
},
}
});
