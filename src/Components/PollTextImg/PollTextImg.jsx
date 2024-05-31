import ti from "./PollTextImg.module.css"
import { RiDeleteBin6Fill } from "react-icons/ri";

let PollTextImg=({id})=>{
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
            { id>2 && <RiDeleteBin6Fill className={ti.icon}/>}
            </div>
        </div>
        </>
    )
}

export default PollTextImg