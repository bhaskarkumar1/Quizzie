import newtab from "./Newtab.module.css"
import { RxCross2 } from "react-icons/rx";
let Newtab=({text,question,setQuestion})=>{
    let handleDelete=(text)=>{
        // console.log("hello")
        setQuestion(question.filter(item=> item._id !=text+1))
    }

    let handleNewtab=()=>{
        console.log("hello 2" )
    }

    return(

        <>
        <div className={newtab.container}>
            <button onClick={handleNewtab} className={newtab.btn}>{text+1}</button>
            <RxCross2 onClick={()=>handleDelete(text)} className={newtab.cross} />

        </div>
        
        </>
    )
}

export default Newtab