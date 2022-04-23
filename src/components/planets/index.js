import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Planet from "./planet";

async function getPlanets() {
        let response = await fetch('http://localhost:3000/api/planets.json')
        let data = await response.json()
        return data
}


const Planets = () => {
        const [planets, setPlanets] = useState([])

        useEffect(() => {
                getPlanets().then(data => {
                        setPlanets(data['planets'])
                })
        },[])

        const clickOnPlanet = (name) => {
                console.log(`um click no planeta: ${name}`)
        }

        const removeLast = () => {
                let new_planets = [...planets]
                new_planets.pop()
                setPlanets(new_planets)
        }
        const duplicateLastPlanet = () => {
                let last_planet = planets[planets.length - 1]
                setPlanets([...planets, last_planet])
        }

        return (
                //<div>
                <Fragment>
                        <h1>Planets List</h1>
                        <button onClick={removeLast}>Remove Last</button>
                        <button onClick={duplicateLastPlanet}>Duplicate Last</button>
                        <hr />
                        {planets.map((planet, index) =>
                                <Planet
                                        name={planet.name}
                                        description={planet.description}
                                        img_url={planet.img_url}
                                        link={planet.link}
                                        id={planet.id}
                                        key={index}
                                //clickOnPlanet={this.state.planets[0].clickOnPlanet}
                                //gray={ }
                                />
                        )}






                </Fragment>


                //</div>
        )

}



export default Planets;