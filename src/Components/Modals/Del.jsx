import del from "./Del.module.css"
import axios from "axios"

let base=import.meta.env.VITE_BASE_URL

let Del=({setShow,show,delId,setDelId,setIsUpdate,isupdate})=>{

    let handleClose=()=>{
        setShow(!show)
        setDelId("")
    }
    let handleConfirm=async()=>{
        handleClose()
        // console.log("test ", delId)
        try {
            await axios.delete(`${base}/delete/${delId}`);
            // setQuizData(prevData => prevData.filter(quiz => quiz._id !== quizId));
            setIsUpdate(!isupdate)
            handleClose();
        
        } catch (error) {
            console.error("Error deleting quiz", error);
        }
    }

    return(
        <>
        <div className={`${del.container} ${ show ? del.show : del.close}`}>

            <div className={del.outer}>

                <div className={del.textDiv}>

                <p>Are you confirm you <br /> want to delete ?</p>

                </div>

                <div className={del.btnDiv}>

            <button onClick={handleConfirm} className={del.confirm}>Confirm Delete</button>
            <button onClick={handleClose} className={del.cancel}>Cancel</button>
        </div>
            </div>
        

        </div>
        
        </>
    )
}

export default Del