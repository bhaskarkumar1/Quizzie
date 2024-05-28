import nlytics from "./Analytics.module.css";
import Navbar from "../Navbar/Navbar";
import Card from "../AnalyticsQuiz/Card";
import Del from "../Modals/Del"
import { useState } from "react";
let Analytics = () => {
    const quizData = [
        { _id: "1", quizName: "Quiz 1", createdOn: "11/22/2022", impression: 122 },
        { _id: "2", quizName: "Quiz 2", createdOn: "11/23/2022", impression: 133 },
        { _id: "3", quizName: "Quiz 3", createdOn: "11/24/2022", impression: 144 },
        { _id: "4", quizName: "Quiz 4", createdOn: "11/25/2022", impression: 155 },
        { _id: "5", quizName: "Quiz 5", createdOn: "11/26/2022", impression: 166 },
        { _id: "6", quizName: "Quiz 6", createdOn: "11/27/2022", impression: 177 },
        { _id: "4", quizName: "Quiz 4", createdOn: "11/25/2022", impression: 155 },
        { _id: "5", quizName: "Quiz 5", createdOn: "11/26/2022", impression: 166 },
    ];
    
  
    
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

                <Card key={index} setShow={setShow} sNo={index} quizName={item.quizName} createdOn={item.createdOn} impression={item.impression}/>
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
