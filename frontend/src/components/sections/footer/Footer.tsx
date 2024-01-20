import { StyleSheet, css } from 'aphrodite';
import { getFullYear } from '../../../utils/utils';

export default function Footer() {
  return (
    <>
      <div className={css(styles.footerBackground)}>
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
        <p className={css(styles.date)} >&copy; ALX portfolio project. All Rights Reserved {getFullYear()}.</p>
        <div> 
          
        </div>
      </div>
    </>
  );
}

const screenSize = {
  smartphone: '@media(max-width: 767px)',
  tablets: '@media(min-width: 767px) and (max-width: 1200px)'
}

const styles = StyleSheet.create({
  footerBackground: {
    backgroundColor: '#F8F3F0',
  },
  
  footer: {
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
    [screenSize.smartphone]: {
      fontSize: '10px',
      fontWeight: 200,
      height: 200,
    }
  },
  footerPara: {
    margin: 'auto',
    width: '110px',
    textAlign: 'left',
    [screenSize.smartphone]: {
      margin: '15px',
      width: '90px',

    },
  },
  date: {
    fontSize: '15px',
    marginLeft: '500px',
    [screenSize.smartphone]: {
      marginLeft: '250px', 
      fontSize: '10px',
    },
    [screenSize.tablets]: {
      marginLeft: '350px',
      fontSize: '10px',
    },
  }
});
