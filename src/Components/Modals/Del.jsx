import del from "./Del.module.css"

let Del=({setShow,show})=>{

    let handleClose=()=>{
        setShow(!show)
    }

    return(
        <>
        <div className={`${del.container} ${ show ? del.show : del.close}`}>

            <div className={del.outer}>

                <div className={del.textDiv}>

                <p>Are you confirm you <br /> want to delete ?</p>

                </div>

                <div className={del.btnDiv}>

            <button onClick={handleClose} className={del.confirm}>Confirm Delete</button>
            <button onClick={handleClose} className={del.cancel}>Cancel</button>
        </div>
            </div>
        

        </div>
        
        </>
    )
}

export default Del