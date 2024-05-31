import quizmodal from "./QuizModal.module.css"

let QuizModal=({setCreate,setCreateQuiz})=>{
    let handleClose=()=>{
        setCreate(false)
    }

let handleContinue=()=>{
    handleClose()
    setCreateQuiz(true)
    
}

    return (
<>
<div className={quizmodal.container}>
<div className={quizmodal.outer}>
        <div className={quizmodal.inner}>

            <div className={quizmodal.quizname}>
                <input type="text" placeholder="Quiz Name" className={quizmodal.input} />
            </div>

        <div className={quizmodal.quiztype}>

            <label className={quizmodal.label} htmlFor="quizType">Quiz Type</label>
            <button  className={quizmodal.qna}>Q&A</button>
            <button  className={quizmodal.polltype}>Poll Type</button>
        </div>

        <div className={quizmodal.lastcontainer}>
            <button onClick={handleClose} className={quizmodal.cancel}>Cancel</button>
            <button onClick={handleContinue} className={quizmodal.continue}>Continue</button>
        </div>
        </div>

</div>
</div>
</>
    )
}

export default QuizModal