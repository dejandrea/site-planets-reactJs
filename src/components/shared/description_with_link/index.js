import { Fragment } from "react"


const DescriptionWithLink = (props) =>{
    if (props.link) {
    return(
        
        <Fragment>
            <p>{props.description}</p>
            <p>
                <a href={props.link}>{props.link}</a>
            </p>
        </Fragment>
    )
    }else{
        return(
        
            <Fragment>
                <p><u>{props.description}</u></p>
            </Fragment>
        )
    }
}

export default DescriptionWithLink