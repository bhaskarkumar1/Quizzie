import { useEffect, useState } from "react";
import dash from "./Dashboard.module.css";
import Navbar from "../Navbar/Navbar";
import SummaryCard from "../SummaryCard/SummaryCard";
import QuizSummary from "../QuizSummary/QuizSummary";
import axios from "axios";
import { format } from 'date-fns';

let DashBoard = () => {
    let [quiz, setQuiz] = useState([]);
    let [summary, setSummary] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            try {
                let response = await axios.get("http://localhost:7000/getall");
                console.log(response.data);
                
                let quizData = response.data;

                // Calculate summary data
                let quizCount = quizData.length;
                let qCount = quizData.reduce((acc, quiz) => acc + quiz.questions.length, 0);
                let questionCount= qCount>= 1000 ? (Math.floor(qCount / 1000) + '.' + Math.round((qCount % 1000) / 100)).slice(0, 3) + 'k'
                : qCount;
                let tImpressions = quizData.reduce((acc, quiz) => acc + quiz.impression, 0);
                let totalImpressions = tImpressions >= 1000 
    ? (Math.floor(tImpressions / 1000) + '.' + Math.round((tImpressions % 1000) / 100)).slice(0, 3) + 'k'
    : tImpressions;
                let summaryData = [
                    { "number": quizCount, "type": "Quiz", "dummy": "Created", "color": "#FF5D01" },
                    { "number": questionCount, "type": "Questions", "dummy": "Created", "color": "#60B84B" },
                    { "number": totalImpressions, "type": "Total", "dummy": "Impressions", "color": "#5076FF" }
                ];

                setSummary(summaryData);
                setQuiz(quizData);
            } catch (error) {
                console.error("Error fetching quiz data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className={dash.container}>
                <Navbar />
                <div className={dash.inner}>
                    <div className={dash.summary}>
                        {summary.map((item, index) => 
                            <SummaryCard 
                                key={index} 
                                number={item.number} 
                                type={item.type} 
                                dummy={item.dummy} 
                                color={item.color} 
                            />
                        )}
                    </div>

                    <div className={dash.quiz}>
                        <div><p className={dash.heading}>Trending Quizzes</p></div>
                        <div className={dash.quizSection}>
                            {quiz.map((item, index) => {
                                const formattedDate = format(new Date(item.createdOn), "dd MMM, yyyy");
                                return (
                                    <QuizSummary 
                                        key={index} 
                                        title={item.name} 
                                        views={item.impression} 
                                        date={` ${formattedDate}`} 
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashBoard;
