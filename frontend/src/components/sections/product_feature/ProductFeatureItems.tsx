import { StyleSheet, css } from 'aphrodite';

interface Props {
  prodImages: Array<string>;
}
export default function ProductFeatureItem({ prodImages }: Props) {
  return (
    <>
      <div className={css(style.container)}>
        {prodImages.map((image, index) => (
          <>
            {index !== 0 && (
              <div key={index} className={css(style.verticalLine)} />
            )}
            <div className={css(style.imageContainer)}>
              <img
                key={index}
                src={image}
                alt={`Image ${index++}`}
                width='100%'
                height='40%'
              />
            </div>
            <div className={css(style.prodDescription)}>
              <p className={css(style.p)}>
                <span className={css(style.textHeader)}>Clap wears</span> <br />
                lorem ipsun katahuyn
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
  },
  verticalLine: {
    borderLeft: '1px solid black',
    position: 'relative',
    height: '50%',
    marginRight: '10px',
  },
  imageContainer: {
    margin: '0 0px 0 25px',
    display: 'flex',
  },
  prodDescription: {
    fontFamily: 'Baloo Tammudu 2',
    textAlign: 'left',
    fontStyle: 'normal',
    marginRight: '15px',
  },
  textHeader: {
    color: '#000',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
  },
  p: {
    color: '#000',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '150%' /* 13.2px */,
    marginTop: '10px',
    marginLeft: '20px',
  },
});
