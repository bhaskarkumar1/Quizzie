import nlytics from "./Analytics.module.css";
import Navbar from "../Navbar/Navbar";
import Card from "../AnalyticsQuiz/Card";
import Del from "../Modals/Del"
import { useState,useContext } from "react";
import {data} from "../../App"
let Analytics = () => {
  let {quizData,setQuizData}=useContext(data)

    
  
    
    let [show,setShow]=useState(false)
    

  return (
    <>
      <div className={nlytics.container}>
        <Navbar/>
        <div className={nlytics.inner}>
          <div className={nlytics.summary}>
            <div className={nlytics.heading}>
              <h1>Quiz Analysis</h1>
            </div>

            <div className={nlytics.table}>
              <div className={nlytics.title}>
                <div className={nlytics.equi}>S.No.</div>
                <div className={nlytics.equi}>Quiz Name</div>
                <div className={nlytics.equi}>Created on</div>
                <div className={nlytics.equi}>Impression</div>
                <div className={nlytics.empty}></div>
                <div className={nlytics.empty}></div>
            </div>
            
            <div className={nlytics.render}>
                {/* <Card sNo={"1"} quizName={"abcsdfsdfdg"} createdOn={"11/22/2222"} impression={122}/> */}
            {quizData.map((item,index)=>(

                <Card key={item._id} id={item._id} setShow={setShow} sNo={index} quizName={item.quizName} createdOn={item.createdOn} impression={item.impression} quizData={quizData} setQuizData={setQuizData}/>
            ))}
            
            </div>

            </div>
          </div>
        </div>
        {/* <Del setShow={setShow} show={show}/> */}
        {show && <div className={nlytics.overlay}></div>}
        <Del setShow={setShow} show={show} />

      </div>
  
    </>
  );
};

export default Analytics;
