import React from "react";
//import LoremIpsum from "../../loremIpsum";
import GrayImg from "../../shared/gray_img";
//import DescriptionWithLink from "../../shared/description_with_link";
import DescriptionWithLink from './../../shared/description_with_link/index';

const Planet = (props) => {
    //renderizando vários elementos fara do JSX
    //const names = ['a','b','c','d']
    // const satellites = names.map((n)=>
    //     <li>Satélite {n}</li>
    // )
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
            <h4>Satélites</h4>
            {/* <ul>
                {satellites}
            </ul> */}
            {/* renderizando varios elementos no JSX */}
            {/* <ul>
                {['a','b','c','d','e'].map((n)=>
                <li>satélite {n}</li>
                )}
            </ul> */}
            <hr/>
        </div>
   ) 
}

export default Planet;