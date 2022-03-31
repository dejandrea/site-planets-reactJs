import React from "react";
import LoremIpsum from "../../loremIpsum";
import GrayImg from "../../shared/gray_img";

const Planet = (props) => {
   return(
       <div onClick={()=> props.clickOnPlanet(props.name)}>
            <h4>{props.name}</h4>  
            <p>{props.description}</p>
            <GrayImg img_url={props.img_url}/>
        </div>
   ) 
}

export default Planet;