import { StyleSheet, css } from 'aphrodite';

export default function Footer() {
  return (
    <>
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
