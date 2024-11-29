import { IoMdClose } from "react-icons/io";
const BookMark = ({product, times}) => {
    console.log(times);
    const { image, authorName } = product
    return (
       <div>
        <div className="border rounded-lg flex items-center justify-between px-5 py-3 my-5 gap-10">
        <p>Set Time on Read:{times}</p>
        </div>
        <div className="border rounded-lg flex items-center justify-between px-5 py-3 my-5 gap-10">
         <div className="flex items-center gap-3">
            <img className="w-[100px] rounded-full" src={image} alt="" />
            <p>{authorName}</p>
        </div>
        <div>
        <p><IoMdClose /></p>
        </div>
       </div>
       </div>
    );
};

export default BookMark;