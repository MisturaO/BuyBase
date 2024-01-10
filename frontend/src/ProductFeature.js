import React from "react";
import { StyleSheet, css } from 'aphrodite';
import productImg from './assets/image 4.png';
import {ProductFeatureItem} from './ProductFeatureItems.js';


export function ProductFeature() {
    const productImages = [
        productImg,
        productImg,
        productImg,
        productImg
    ];
    return (
        <>
            <div className={css(style.ProductFeature)}>
                <ProductFeatureItem prodImages={productImages} />
            </div>
        </>
    )
}

const style = StyleSheet.create({
    ProductFeature: {
        background: "#F8F3F0",
        width: "1200px",
        height: "141px",
        margin: "auto",
        marginTop: "10px",
        display: "flex",
        // justifyContent: "space-between",
        alignItems: "center",
        // padding: "20%"
        flexDirection: 'column'
    },
    
})
