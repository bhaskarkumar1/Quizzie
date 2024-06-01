import ti from "./PollTextImg.module.css"
import { RiDeleteBin6Fill } from "react-icons/ri";

let PollTextImg=({id,textimg,setTextImg})=>{
    let handleDel=(id)=>{
        // console.log(id)
        let update=textimg.filter((item)=>item._id!=id).map((item,index)=>(
            {...item,"_id":index+1}
        ))
setTextImg(update)
console.log(update)
    }
    return(
        <>
     
            <div className={ti.cover}>
            <div className={ti.text}>
                <input type="text" placeholder="Text" />

            </div>
            <div className={ti.img}>
            <input type="text" placeholder="Image URL" />

            </div>
           
            <div className={ti.del}>
            { id>2 && <RiDeleteBin6Fill className={ti.icon} onClick={()=>handleDel(id)}/>}
            </div>
        </div>
        </>
    )
}

export default PollTextImg