import "./App.css";

function Buttons({filteredGoods}) {
    return (
        <div className="contButtons">
            <button className="change" onClick={ ()=> filteredGoods("racquet")}>Racquets</button>
            <button className="change" onClick={ ()=> filteredGoods("ball")}>Tennis balls</button>
            <button className="change" onClick={ ()=> filteredGoods("dress")}>Dresses</button>
            <button className="change" onClick={ ()=> filteredGoods("cap")}>Caps</button>
            <button className="change" onClick={ ()=> filteredGoods("shirt")}>Shirts</button>
            <button className="change" onClick={ ()=> filteredGoods("shorts")}>Shorts</button>
            <button className="change" onClick={ ()=> filteredGoods("shoes")}>Shoes</button>
            <button className="change" onClick={ ()=> filteredGoods("bag")}>Bags</button>
        </div>
    )
}

export default Buttons;