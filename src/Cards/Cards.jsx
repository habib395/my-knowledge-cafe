import Product from "../Product/Product";

const Cards = ({products, handleBookmarks, handleReadTime}) => {
    return (
        <div>
            This is product:{products.length}
            {
                products.map(product => <Product key={product.id} handleBookmarks={handleBookmarks} handleReadTime={handleReadTime} product={product}></Product>)
            }
        </div>
    );
};

export default Cards;