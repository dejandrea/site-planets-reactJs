import React ,{useState, useEffect }from "react";
import GrayImg from "../shared/gray_img";
import DescriptionWithLink from "../shared/description_with_link";
import Form from "./form"
import {useParams,useNavigate} from "react-router-dom"
// import Planet from './../planets/planet/index';


async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}

const Planet = () => {
    const [satellites, setSatellites] = useState([])
    const [planet, setPlanet] = useState({})
    const [redirect, setRedirect ] = useState(false)
    
    let {id} = useParams(); //extrai id do objeto
    let navigate = useNavigate()

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites'])
            setPlanet(data['data'])
        }, error =>{
            setRedirect(true)
        })
    },[])

    const goToPlanets = () =>{
        navigate('/')
    }

    const addSatellite = (new_satellite)=>{
        setSatellites([...satellites,new_satellite])
    }

    


    let title;
    if (planet.title_with_underline) {
        title = <h4><u>{planet.name}</u></h4>
    } else {
        title = <h4>{planet.name}</h4>
    }

    if (redirect) {
        navigate('/')
    }

    return (
        <div onClick={() => planet.clickOnPlanet(planet.name)}>
            {title}
            <DescriptionWithLink description={planet.description} link={planet.link} />
            <GrayImg img_url={planet.img_url} gray={planet.gray} />
            <h4>Satélites</h4>

            <hr/>
            <Form addSatellite={addSatellite} />
            <hr/>
            <ul>
                {satellites.map((satellite, index) =>
                    <li key={index}>{satellite.name}</li>
                )}
            </ul>
            <hr />
            <button type="button" onClick={goToPlanets}>Home</button>
        </div>
    )
}

export default Planet;