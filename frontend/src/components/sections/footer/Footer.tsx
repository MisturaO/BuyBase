import { StyleSheet, css } from 'aphrodite';
import footerImage from '/assets/images/image 28.png';

export default function Footer() {
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
          alt='footerImg'
          height='300'
        />
      </div>
      <div className={css(styles.footer)}>
        <p className={css(styles.footerPara)}>
          {' '}
          <b>Ipsun</b> <br />
          Ipsun lorem ajaxacum junfunjaj in linkin kilinkh hundref falcomat
          hunfrum Ipsun lorem ajaxacum junfunjaj in linkin kilinkh hundref
          falcomat hunfrum
        </p>
        <p className={css(styles.footerPara)}>
          {' '}
          <b>Ipsun</b> <br />
          Ipsun lorem ajaxacum junfunjaj in linkin kilinkh hundref falcomat
          hunfrum Ipsun lorem ajaxacum junfunjaj in linkin kilinkh hundref
          falcomat hunfrum
        </p>
        <p className={css(styles.footerPara)}>
          <b>Ipsun</b> <br />
          lorem ajaxacum junfunjaj in linkin kilinkh hundref falcomat hunfrum
          Ipsun lorem ajaxacum junfunjaj in linkin kilinkh hundref falcomat
          hunfrum
        </p>
        <p className={css(styles.footerPara)}>
          <b>Ipsun</b> <br />
          lorem ajaxacum junfunjaj in linkin kilinkh hundref falcomat hunfrum
          Ipsun lorem ajaxacum junfunjaj in linkin kilinkh hundref falcomat
          hunfrum
        </p>
      </div>
    </>
  );
}

// const font = {
//     fontFamily: "Baloo Tammudu 2"
// }
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
  },
  button: {
    color: '#C55656',
    border: '1px solid #C55656',
    borderRadius: '3px 0 3px 0',
  },
  img: {
    margin: '15px 0 0 100px',
  },
  footer: {
    backgroundColor: '#F8F3F0',

    height: 316,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    lineHeight: '170%' /* 27.2px */,
    fontFamily: 'Baloo Tammudu 2',
    fontStyle: 'normal',
    fontWeight: 400,
    // lineHeight: "140%",
  },
  footerPara: {
    margin: 'auto',
    width: '110px',
    textAlign: 'left',
  },
});
