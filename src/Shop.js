import { useState, useEffect, useRef } from "react";
import { dataShop } from "./dataShop";
import "./App.css";
import logonew from "./logonew.png";
import ball from "./ball.png";
import gsap from "gsap";
import Shopping from "./Shopping";
import Buttons from "./Buttons";

function Shop() {
    let ballItem = useRef(null);
    useEffect( () => {
        gsap.to(
            ballItem,
                        {
                rotation: 360,
                y: +3,
                x: +700,
                duration: 3,
                delay: .2,
            }
        )
    }, [])

    const [goods, setGoods]=useState(dataShop);
    const chosenGoods = (searchTerm) => {
        const newGoods =dataShop.filter(element => element.searchTerm === searchTerm);
        setGoods(newGoods);
    }
    

return <div>
<hr></hr>
<div className="bounceBall">
    <img ref = {element => {ballItem=element}} src={ball} width="30px" alt="ball"  />
    </div>

    <div className="logo">
    <img src={logonew} width="300px" alt="companylogo" />
    </div>  
<hr></hr>    

<div>
    <h2 className="section"> Shop with us </h2>
</div>

<Buttons filteredGoods = {chosenGoods}/>
<Shopping itemsForSale={goods}  />

<hr></hr>
<div className="down">
    
        <p>&#9883; Copyright 2023 Match Point Sydney Tennis Academy Pty Ltd. All rights reserved.</p>
        <p> Website Designed by Svetlana Kulakova</p>
    
</div>
</div>
}

export default Shop;