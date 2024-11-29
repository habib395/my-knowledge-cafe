import BookMark from "../bookMark/BookMark";

const Bookmarks = ({products, times}) => {
    return (
        <div className="w-1/3 mx-auto">
           <div className="my-3 py-5">
            {
                products.map((product, idx) => <BookMark key={idx} times={times} product={product}></BookMark>)
            }
           </div>
        </div>
    );
};

export default Bookmarks;