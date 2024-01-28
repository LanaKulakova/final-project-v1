import "./App.css";

function Shopping({itemsForSale}) {
    return (
        <div className="products">

{itemsForSale.map((element => {
    const {id, name, price, image} = element;
    return (
        <div className="product-card" key={id}> 
<img src={image} width="300px" alt="pictures" />
<div className="product-info">
<h3>{name}</h3>
<h4>Price:   {price} $ </h4>
</div>
        </div>
    )
}

))}


        </div>
    )
}



export default Shopping;