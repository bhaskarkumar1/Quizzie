import  card from "./Card.module.css"
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaShareAlt } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let Card=({sNo,setShow,quizName,createdOn,impression})=>{

    let handleShare=()=>{
        console.log("Share")
        toast.success('Link copied to clipboard ');
    }
   let handleDelete=()=>{
    setShow(true)
   }
    return(
        <>
        <div className={card.container}>
            <div className={card.equi}>{sNo}</div>
            <div className={card.equi}>{quizName}</div>
            <div className={card.equi}>{createdOn}</div>
            <div className={card.equi}>{impression}</div>

            <div className={card.empty}>
                <div className={`${card.icon} ${card.edit}`}><FiEdit /></div>
                <div onClick={handleDelete} className={`${card.icon} ${card.del}`}><RiDeleteBin5Fill /></div>
                <div onClick={()=>handleShare()} className={`${card.icon} ${card.share}`}><FaShareAlt /></div>
                <ToastContainer className={card.toast1}/>

            </div>
            <div className={card.empty}><p>Quiz Wise Analysis</p></div>
        </div>

        </>
    )
}

export default Card