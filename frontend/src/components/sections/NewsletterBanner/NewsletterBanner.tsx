import React from 'react';
import footerImage from '/assets/images/image28.png';
import { StyleSheet, css } from 'aphrodite';


export function NewsletterBanner() {
    return (
        <>
        <div className={css(styles.subscribe)}>
        <div className={css(styles.Boxtext)}>
          <h2 className={css(styles.h2)}>
            SUBSCRIBE TO NEWSLETTER <br />
            TODAY
          </h2>
          <p className={css(styles.p)}>
            Ipsun lorem ajaxacum junfunjaj in linkin kilinkh hundref falcomat{' '}
            <br /> hunfrum
          </p>
          <button className={css(styles.button)} type='button'>
            subscribe
          </button>
        </div>

        <img
          className={css(styles.img)}
          src={footerImage}
          alt='footer Image'
          height='320'
        />
      </div>
    </>
    )
}

const screenSize = {
    smartphone: '@media(max-width: 800px)',
    tablets: '@media(min-width: 767px) and (max-width: 1200px)'
  }

const styles = StyleSheet.create({
    subscribe: {
        height: 316,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F2F3F5',
        position: 'relative',
        textAlign: 'left',
      },
      h2: {
        color: '#4A3C3C',
        fontFamily: 'Baloo Tammudu 2',
        fontSize: '30px',
        fontStyle: 'normal',
        fontWeight: 800,
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
        [screenSize.smartphone] : {
            marginLeft: '40px',
            zIndex: 2,
            // position: 'absolute'
        }
      },
      button: {
        color: '#C55656',
        border: '1px solid #C55656',
        borderRadius: '3px 0 3px 0',
        [screenSize.smartphone]: {
            marginTop: '-20px',
            position: 'absolute'
        }
      },
      img: {
        margin: '-4px 120px 0 100px',
        [screenSize.smartphone] : {
            marginLeft: '-150px',
            zIndex: 1,
            // position: 'absolute'
        }
      },
})
