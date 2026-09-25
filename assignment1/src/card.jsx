import "./card.css"
import Price from "./price.jsx"

import Laptop from "./assets/Laptop.png"
import Mobile from "./assets/Mobile.png"
import PS5 from "./assets/PS5.png"
import Fitbit from "./assets/fitbit.png"

export default function card({title, idx}) {
let im = [Laptop,Mobile,PS5,Fitbit]
let decp1 = ["Best Laptop in the world.", "Best Mobile in the world.", "Best PS5 in the world.", "Best FitBit in the world."]
let decp2 = ["With Amazing Features", "With Amazing Cameras", "With Amazing Games", "With Amazing Techs"]
let old = ["80000", "50000", "40000", "15000"]
let newp = ["70000", "40000", "30000", "10000"]
    return <div className="card">
        <h2>{title}</h2>
        <img src={im[idx]}></img>
        <p>{decp1[idx]}</p>
        <p>{decp2[idx]}</p>
        <Price old={old[idx]} newp={newp[idx]} />
    </div>
}