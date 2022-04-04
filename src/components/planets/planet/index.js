import React from "react";
//import LoremIpsum from "../../loremIpsum";
import GrayImg from "../../shared/gray_img";
//import DescriptionWithLink from "../../shared/description_with_link";
import DescriptionWithLink from './../../shared/description_with_link/index';

const Planet = (props) => {
    let title;
    if (props.title_with_underline) {
        title = <h4><u>{props.name}</u></h4>
    } else {
        title = <h4>{props.name}</h4>
    }

   return(
       <div onClick={()=> props.clickOnPlanet(props.name)}>
            {title}
            <DescriptionWithLink description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url} gray={props.gray}/>
        </div>
   ) 
}

export default Planet;