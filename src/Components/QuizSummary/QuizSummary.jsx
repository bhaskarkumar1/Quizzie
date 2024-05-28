import quizsummary from "./QuizSummary.module.css"
import { IoEyeSharp } from "react-icons/io5";

let QuizSummary=({title,views, date})=>{
    return(
        <>
        <div className={quizsummary.container}>

        <div className={quizsummary.heading}>
            <div className={quizsummary.head}>
                {title}
            </div>
            <div className={quizsummary.view}>
            <IoEyeSharp />&nbsp;{views}
            </div>
        </div>
        <div className={quizsummary.date}>
           created on: {date}

        </div>

        </div>
        
        
        </>
    )
}

export default QuizSummary