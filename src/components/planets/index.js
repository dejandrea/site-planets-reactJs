import React from "react";
import { Fragment } from "react";
import Planet from "./planet";

async function getPlanets(){
        let response = await fetch('http://localhost:3000/api/planets.json')
        let data = await response.json()
        return data
}


//component de classe
class Planets extends React.Component {

        constructor(props) {
                super(props)
                this.state = {
                        planets: []
                }
        }

        componentDidMount(){
                getPlanets().then(data => {
                        this.setState(state => ({
                            planets: data['planets']  
                        }))
                })
        }
        clickOnPlanet = (name) => {
                console.log(`um click no planeta: ${name}`)
        }

        removeLast = () => {
                let new_planets = [...this.state.planets]
                new_planets.pop()
                this.setState(state => ({
                        planets: new_planets
                }))
        }
        duplicateLastPlanet = () => {
                let last_planet = this.state.planets[this.state.planets.length -1]
                this.setState(state=>({
                        planets:[...this.state.planets,last_planet]
                }))
        }
        render() {
                return (
                        //<div>
                        <Fragment>
                                <h1>Planets List</h1>
                                <button onClick={this.removeLast}>Remove Last</button>
                                <button onClick={this.duplicateLastPlanet}>Duplicate Last</button>
                                <hr />
                                {this.state.planets.map((planet) =>
                                        <Planet
                                                name={planet.name}
                                                description={planet.description}
                                                img_url={planet.img_url}
                                                link={planet.link}
                                                id={planet.id}
                                        //clickOnPlanet={this.state.planets[0].clickOnPlanet}
                                        //gray={}
                                        />
                                )}






                        </Fragment>


                        //</div>
                )
        }
}


//component funcional
// const Planets = () => {
//    return(
//        //<div>
//            <Fragment>
//             <h1>Planets List</h1>
//             <button>Show Message</button>
//             <hr/>
//                 {/*Mercúrio planeta 1*/}
//                 <Planet name="Mercúrio"
//                         //description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino."
//                         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg"
//                         clickOnPlanet={clickOnPlanet}
//                         link="https://pt.wikipedia.org/wiki/Mercúrio_(planeta)"
//                         gray={true}
//                 />

//                 {/*Vênus planeta 2*/}
//                 <Planet name="Vênus"
//                         description="Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras. A distância média da Terra a Vênus é de 0,28 AU, sendo esta a menor distância entre qualquer par de planetas. Como Vénus se encontra mais próximo do Sol do que a Terra, ele pode ser visto aproximadamente na mesma direção do Sol (sua maior elongação é de 47,8°). Vénus atinge seu brilho máximo algumas horas antes da alvorada ou depois do ocaso, sendo por isso conhecido como a estrela da manhã (Estrela d'Alva) ou estrela da tarde (Vésper); também é chamado Estrela do Pastor."
//                         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/280px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
//                         clickOnPlanet={clickOnPlanet}
//                         link="https://pt.wikipedia.org/wiki/Vénus_(planeta)"
//                         title_with_underline={true}
//                 />

//                 {/*Terra planeta 3*/}
//                 <Planet name="Terra"
//                         description="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu na sua superfície um bilhão de anos depois. Desde então, a biosfera terrestre alterou significativamente a atmosfera e outros fatores abióticos do planeta, permitindo a proliferação de organismos aeróbicos, bem como a formação de uma camada de ozônio, a qual, em conjunto com o campo magnético terrestre, bloqueia radiação solar prejudicial, permitindo a vida no planeta. As propriedades físicas do planeta, bem como sua história geológica e órbita, permitiram que a vida persistisse durante este período. Acredita-se que a Terra poderá suportar vida durante pelo menos outros 500 milhões de anos."
//                         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/300px-The_Earth_seen_from_Apollo_17.jpg"
//                         clickOnPlanet={clickOnPlanet}
//                         link="https://pt.wikipedia.org/wiki/Terra"
//                         gray={true}
//                 />

//                 {/*Marte planeta 4*/}
//                 <Planet name="Marte"
//                         description="Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o Planeta Vermelho, porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.[1]"
//                         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/420px-OSIRIS_Mars_true_color.jpg"
//                         clickOnPlanet={clickOnPlanet}
//                         link="https://pt.wikipedia.org/wiki/Marte_(planeta)"
//                 />

//                 {/*Jupter planeta 5*/}
//                 <Planet name="Jupter"
//                         description="Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno. Estes quatro planetas são por vezes chamados de planetas jupiterianos ou planetas jovianos, e são os quatro gigantes gasosos, isto é, que não são compostos primariamente de matéria sólida"
//                         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/300px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
//                         clickOnPlanet={clickOnPlanet}
//                         link="https://pt.wikipedia.org/wiki/Júpiter_(planeta)"
//                 />

//                  {/*Saturno planeta 6*/}
//                  <Planet name="Saturno"
//                         description="Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas."
//                         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg"
//                         clickOnPlanet={clickOnPlanet}
//                         link="https://pt.wikipedia.org/wiki/Saturno_(planeta)"
//                 />

//                 {/*Urano planeta 7*/}
//                 <Planet name="Urano"
//                         description="Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano. Embora seja visível a olho nu em boas condições de visualização, não foi reconhecido pelos astrônomos antigos como um planeta devido a seu pequeno brilho e lenta órbita."
//                         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/280px-Uranus2.jpg"
//                         clickOnPlanet={clickOnPlanet}
//                         link="https://pt.wikipedia.org/wiki/Urano_(planeta)"
//                 />

//                 {/*Netuno planeta 8*/}
//                 <Planet name="Netuno"
//                         description="Netuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres. Netuno orbita o Sol a uma distância média de 30,1 unidades astronômicas."
//                         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/280px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg"
//                         clickOnPlanet={clickOnPlanet}
//                         link="https://pt.wikipedia.org/wiki/Netuno_(planeta)"
//                 />

//                 {/*Plutão planeta 9*/}
//                 <Planet name="Plutão"
//                         description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno."
//                         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/420px-Pluto_in_True_Color_-_High-Res.jpg"
//                         clickOnPlanet={clickOnPlanet}
//                         clickOnPlanet={clickOnPlanet}
//                         link="https://pt.wikipedia.org/wiki/Plutão"
//                 />


//            </Fragment>


//        //</div>
//    ) 
// }

export default Planets;