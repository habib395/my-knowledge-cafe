import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Cards = () => {
    const [products, setProducts] = useState([])

  useEffect(() =>{
    fetch('knowledge.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

    return (
        <div className="w-2/3 mx-auto">
            This is card:{products.length}
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Cards;