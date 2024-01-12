import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import featureImg1 from "./assets/image 25.png";
import featureImg2 from "./assets/image 26.png";
import buttonIcon from "./assets/play button-01 1.svg";


export function FeaturedItem() {
    return (
        <>
            <div className={css(styles.featureItem)}>
                <div className={css(styles.Boxtext)}>
                    <h2 className={css(styles.h2)}>OUR FEATURED ITEM</h2>
                    <p className={css(styles.p)}>Ipsun lorem ajaxacum junfunjaj in linkin kilinkh hundref falcomat <br /> hunfrum</p>
                    <button className={css(styles.button)} type='button'>
                        <img src={buttonIcon} alt='button Icon' width="8" className={css(styles.buttonIcon)}/>
                        Buy Now
                    </button>
                </div>
                <img className={css(styles.img1)} src={featureImg2} alt='featureImg' height="270" />
                <img className={css(styles.img2)} src={featureImg1} alt='featureImg' height="310" />
            </div>
        </>
    )
}

const styles = StyleSheet.create({
    featureItem: {
        width: 1200,
        height: 316,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9E6D7",
        position: 'relative',
        margin: "auto",
        marginTop: 20,
        textAlign: 'left'
    },
    h2: {
        color: "#4A3C3C",
        fontFamily: "Baloo Tammudu 2",
        fontSize: "30px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "100%", /* 52.8px */
        // marginBottom: 90,
        // width: 1500,
        marginBottom: "10px"
    },
    p: {
        fontSize: 12,
        marginBottom: "50px"
    },
    Boxtext: {
        marginLeft: 100
    },
    button: {
        color: "#C55656",
        border: "1px solid #C55656",
        borderRadius: "3px 0 3px 0",
        fontSize: 10,
        padding: "4px",
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    },
    img1: {
        margin: "80px 20px 40px 15px"
    },
    img2: {
        margin: "15px 0 20px -40px"
    },
    buttonIcon: {
        marginRight: "8px",
    },
});
