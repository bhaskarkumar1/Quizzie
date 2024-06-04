import quizcreator from "./QuizCreator.module.css";
import Newtab from "../NewTab/Newtab";
import React, { useState } from "react";
import QuizText from "../QuizText/QuizText";
import QuizTextImg from "../QuizTextImg/QuizTextImg";
import axios from "axios"
let base=import.meta.env.VITE_BASE_URL


let QuizCreator = ({ select, setSelect, setSuccess, setCreateQuiz,setDb,db }) => {
    let [question, setQuestion] = useState([]);
    let [questiontext, setQuestionText] = useState("");
    let [optns, setOptns] = useState([]);
    let [allData, setAllData] = useState([]);

    let handleSelect = (e) => {
        setSelect(e.target.value);
        console.log("debug select",select)
        setDb((prev)=>({...prev,optionType:select}))
    };

    let handleNewQuestion = () => {
        let newId = question.length > 0 ? question[question.length - 1]._id + 1 : 1;
        if (newId <= 5) {
            setQuestion([...question, { _id: newId, text: questiontext, options: optns }]);
            setOptns([]);
            setQuestionText("");
        } else {
            // toastify msg saying you max 5 questions!
        }
    };

    let handleCancel = () => {
        setCreateQuiz(false);
    };

    let handleCreateQuiz = async() => {
        setAllData(question);

        setDb((prev)=>({...prev,questions:question}))

console.log("set all data ",allData)
   
        console.log("question",question) // storing questions and optins for both the text , img , text+img
        let token=localStorage.getItem("token")
    try{
        await axios.post(`${base}/create-quiz`,db, {
            headers:{
                "Authorization":token,
                'Content-Type': 'application/json',

            }
        })
        console.log("axios success!")
    }catch(err){
        console.log("axios: ", err)
    }
        setSuccess(true);
        setCreateQuiz(false);
        console.log("quiz db",db)
    };

    return (
        <>
            <div className={quizcreator.container}>
                <div className={quizcreator.innercontainer}>
                    <div className={quizcreator.dummycontainer}>
                        <div className={quizcreator.uppercontainer}>
                            <div className={quizcreator.row1}>
                                <div className={quizcreator.tabsection}>
                                    {question.map((item, index) => (
                                        <Newtab key={item._id} item={item} question={question} setQuestion={setQuestion} />
                                    ))}
                                    <button onClick={handleNewQuestion} className={quizcreator.plus}>+</button>
                                </div>
                                <div className={quizcreator.max5}><p>Max 5 questions</p></div>
                            </div>
                            <div className={quizcreator.questiondiv}>
                                <input type="text" className={quizcreator.question} placeholder="Quiz Question" value={questiontext} onChange={(e) => setQuestionText(e.target.value)} />
                            </div>
                            <div className={quizcreator.options}>
                                <label>Option Type</label>
                                <label className={quizcreator.lbl}><input name="optiontype" type="radio" value="text" onClick={(e)=>handleSelect(e)} defaultChecked />Text</label>
                                <label className={quizcreator.lbl}><input name="optiontype" type="radio" value="img" onClick={(e)=>handleSelect(e)} />Image URL</label>
                                <label className={quizcreator.lbl}><input name="optiontype" type="radio" value="img+text" onClick={(e)=>handleSelect(e)} />Text & Image URL</label>
                            </div>
                        </div>

                        <div className={quizcreator.midcontainer}>
                            {(select === "text" || select === "img") && <QuizText optns={optns} setOptns={setOptns} />}
                            {(select === "img+text") && <QuizTextImg optns={optns} setOptns={setOptns} />}
                        </div>

                        <div className={quizcreator.lowercontainer}>
                            <button onClick={handleCancel} className={quizcreator.cancelbtn}>Cancel</button>
                            <button onClick={handleCreateQuiz} className={quizcreator.createbtn}>Create Quiz</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizCreator;
