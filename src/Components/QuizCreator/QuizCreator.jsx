import quizcreator from "./QuizCreator.module.css";
import Newtab from "../NewTab/Newtab";
import React,{useState} from "react";
import QuizText from "../QuizText/QuizText";

let QuizCreator=()=>{
  let [select,setSelect]=useState("text")
  let [question,setQuestion]=useState([])
  let [optns,setOptns]=useState([])


  let handleSelect=(e)=>{
    setSelect(e.target.value)
  }

  let handleNewQuestion=()=>{
    // console.log("new Question")
    let newId= question.length> 0 ? question[question.length-1]._id +1 :1
    if(newId<=5){
      setQuestion([...question,{_id:newId}])
      // I am getting the options values in  state optns and then resetting the values so that i can go for other question options 
      
      
      setOptns(()=>[])
    }else{
      // toastify msg saying you max 5 questions!
      }

  }




  return(
    <>
    <div className={quizcreator.container}>
      <div className={quizcreator.innercontainer}>
      <div className={quizcreator.dummycontainer}>

      <div className={quizcreator.uppercontainer}>
        <div className={quizcreator.row1}>
          <div className={quizcreator.tabsection}> 
          {question.map((item,index)=>(

              <Newtab key={item._id} text={index} question={question} setQuestion={setQuestion}/>

          ))}
         
          <button onClick={handleNewQuestion} className={quizcreator.plus}>+</button>
          </div>
          <div> <p>max 5 questions</p></div>
        </div>
        <div className={quizcreator.questiondiv}>
            <input type="text" className={quizcreator.question} placeholder="Quiz Question" />
        </div>
        <div className={quizcreator.options}>
          <label htmlFor="">Option Type</label>
          <label htmlFor="optionText"><input name="optiontype" type="radio" value="text" onClick={(e)=>handleSelect(e)} defaultChecked/>text </label>
          <label htmlFor="optionImg"><input name="optiontype" type="radio" value="img" onClick={(e)=>handleSelect(e)}/>Img </label>
          <label htmlFor="optionImgText"><input name="optiontype" type="radio" value="img+text" onClick={(e)=>handleSelect(e)}/>Img+text </label>

        </div>

      </div>


      <div className={quizcreator.midcontainer}>
       {select==="text" && <QuizText optns={optns} setOptns={setOptns}/>}
      </div>

      <div className={quizcreator.lowercontainer}>
          <button className={quizcreator.cancelbtn}>Cancel</button>
          <button className={quizcreator.createbtn}>Create Quiz</button>
      </div>

</div>
    </div>
    </div>
    </>
  )
}

export default QuizCreator