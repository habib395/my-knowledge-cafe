import { BsBookmarks } from "react-icons/bs";
import PropTypes from 'prop-types';
const Product = ({product}) => {
    const {image,authorName, authorImage,  hashtags, publishDate, title, readTime } = product
    return (
        <div className="my-5 p-3">
          <img className="w-full" src={image} alt="" />
          <div className="flex justify-between items-center py-3">
           <div className="flex gap-y-60 gap-3">
            <img className="w-[50px]" src={authorImage} alt="" />
            <p className="flex flex-col">
                <span>{authorName}</span>
                <span>{publishDate}</span>
            </p>
           </div>
          <div>
            <p className="flex items-center gap-2">{readTime}min read <button><BsBookmarks /></button></p>
          </div>
          </div>
          <h2 className="text-4xl font-semibold">
            {title}
          </h2>
          <p className="py-2">
            {
                hashtags.map((hash, idx) =>{
                    return <span  key={idx} className="text-gray-400 ml-5">
                        <a href="#">{hash}</a>
                    </span>
                })
            }
          </p>
          <button className="underline text-blue-800 font-semibold">Marks as read</button>
        </div>
    );
};
Product.propTypes ={
    product: PropTypes.array.isRequired
}

export default Product;