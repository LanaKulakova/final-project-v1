import { useState } from "react";
import { dataShop } from "./dataShop";
import "./App.css";
import logo from "./logo.png";
import Shopping from "./Shopping";
import Buttons from "./Buttons";

function Shop() {
    const [goods, setGoods]=useState(dataShop);
    const chosenGoods = (searchTerm) => {
        const newGoods =dataShop.filter(element => element.searchTerm === searchTerm);
        setGoods(newGoods);
    }
    

return <div>
<div className="logo">
    <img src={logo} width="300px" alt="companylogo" />
    </div>
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