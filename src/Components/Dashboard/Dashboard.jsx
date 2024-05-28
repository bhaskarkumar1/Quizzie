import dash from "./Dashboard.module.css"
import Navbar from "../Navbar/Navbar"
import SummaryCard from "../SummaryCard/SummaryCard"
import QuizSummary from "../QuizSummary/QuizSummary"
let DashBoard=()=>{
    let data=[
{"number":"12", "type":"Quiz", "dummy":"Created","color":"#FF5D01"},
{"number":"110", "type":"Questions", "dummy":"Created", "color":"#60B84B"},
{"number":"989", "type":"Total", "dummy":"Impressions","color":"#5076FF"}
    ]

   let quiz= [
        {
          "title": "Quiz1",
          "views": "123",
          "date": "01 Sep 2023"
        },
        {
          "title": "Quiz2",
          "views": "456",
          "date": "02 Sep 2023"
        },
        {
          "title": "Quiz3",
          "views": "789",
          "date": "03 Sep 2023"
        },
        {
          "title": "Quiz4",
          "views": "101",
          "date": "04 Sep 2023"
        },
        {
          "title": "Quiz5",
          "views": "234",
          "date": "05 Sep 2023"
        },
        {
          "title": "Quiz6",
          "views": "567",
          "date": "06 Sep 2023"
        },
        {
          "title": "Quiz7",
          "views": "890",
          "date": "07 Sep 2023"
        },
        {
          "title": "Quiz8",
          "views": "111",
          "date": "08 Sep 2023"
        },
        // {
        //   "title": "Quiz9",
        //   "views": "222",
        //   "date": "09 Sep 2023"
        // },
        // {
        //   "title": "Quiz10",
        //   "views": "333",
        //   "date": "10 Sep 2023"
        // },
        // {
        //     "title": "Quiz9",
        //     "views": "222",
        //     "date": "09 Sep 2023"
        //   },
        //   {
        //     "title": "Quiz12",
        //     "views": "333",
        //     "date": "10 Sep 2023"
        //   }
    ]



    return(
        <>
        <div className={dash.container}>
            <Navbar/>
            <div className={dash.inner}>

                <div className={dash.summary}>

                    {data.map((item,index)=> 
                        <SummaryCard key={index} number={item.number} type={item.type} dummy={item.dummy} color={item.color}/>

                    )}

                   
                    

                </div>

                <div className={dash.quiz}>
                    <div ><p className={dash.heading}>Trending Quizs</p></div>

                    <div className={dash.quizSection}>

                       {quiz.map((item, index)=>
                            <QuizSummary key={index} title={item.title} views={item.views} date={item.date}/>
                       )}

                    </div>

                </div>

            </div>

        </div>
        
        </>
    )
}


export default DashBoard