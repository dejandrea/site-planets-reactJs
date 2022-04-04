import React from "react";
import './style.css'

const GrayImg = (props) => {
   return(
            <img className={props.gray ? 'gray-img' : 'color-img'} src={props.img_url} />
   ) 
}

export default GrayImg;