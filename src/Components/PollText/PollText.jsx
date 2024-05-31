import ptext from "./PollText.module.css"
import { RiDeleteBin6Fill } from "react-icons/ri";

let PollText=({key,text,id,placevalue})=>{
    return(
        <>
            
                <div key={key} className={ptext.cover1}>
                  <div className={ptext.ptextinp}>
                    <input placeholder={placevalue} type="text" value={text} />
                  </div>
{ id>=3 && <RiDeleteBin6Fill className={ptext.tdel} />}

                </div>
        </>
    )
}

export default PollText