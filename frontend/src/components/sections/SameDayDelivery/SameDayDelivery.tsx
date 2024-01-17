import { StyleSheet, css } from 'aphrodite';
import image from '../../../assets/image13.png';


export function SameDayDelivery() {
    return (
        <>
            <div className={css(style.container)}>
                <div className={css(style.BoxItems)}>
                    <div className={css(style.textBox)}>
                        <p className={css(style.p1)}>How about home? <br /> <span className={css(style.span)}>SAME DAY DELIVERY <br /> MAGIC</span></p>
                        {/* <p className={css(style.p2)}>SAME DAY DELIVERY MAGIC</p> */}
                        <p className={css(style.p2)}>Ipsun lorem ajaxacum junfunjaj in linkin kilinkh hundref falcomat <br /> hunfrum kabalun ameiban inbalajun</p>
                        <button className={css(style.button)}>Details</button>
                    </div>
                    <img src={image} alt='' width= "327px" height="217px" className={css(style.image)}/>

                </div>
            </div>
        </>
    )
}

const screenSize = {
    smartphone: '@media(max-width: 800px)',
    tablets: '@media(min-width: 800px) and (max-width: 1200px)'
  }

const style = StyleSheet.create({
    container: {
        background: "#F5FAF8",
        width: "100%",
        height: "250px",
        margin: "auto",
        fontFamily: "Baloo Tammudu 2",
        fontSize: "14px",
        fonStyle: "normal",
        // lineHeight: "150%",
        marginTop: "20px",
        display: 'flex',
        flexDirection: "column"
    },
    BoxItems: {
        textAlign: "left",
        marginLeft: "100px",
        // alignItems: 'center'
        marginTop: '20px'
        
    },
    textBox: {
        
        margin: "20px"
    },
    image: {
        marginLeft: "650px",
        marginTop: "-190px",
        [screenSize.tablets]: {
        marginLeft: "350px",
        },
        [screenSize.smartphone]: {
            display: 'none'
        },

        
    },
    p1: {
        color: "#767171",
        fontSize: "12px",
        // marginTop: "800px"
        lineHeight: "200%",
    },
    span: {
        fontWeight: 700,
        fontSize: "30px",
        color: '#4A3C3C'
    },
    p2: {
        fontSize: "12px"
    },
    button: {
        cursor: 'pointer',
        background: "transparent",
        border: "1px solid #C55656",
        color: "#C55656",
        // textAlign: 'center'
        // alignItems: "center"
        padding: "5px 20px 5px 20px",
        fontSize: '11px',
        fontWeight: 400
    }
})