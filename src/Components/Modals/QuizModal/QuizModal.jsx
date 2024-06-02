import quizmodal from "./QuizModal.module.css";
import React, { useState } from "react";

let QuizModal = ({ setCreatePoll, quiztype, setQuizType, setCreate, setCreateQuiz, db, setDb }) => {
    let [intro, setIntro] = useState({
        quizName: "",
        quizType: quiztype,
    });

    let [error, setError] = useState("");
    let [activeButton, setActiveButton] = useState(quiztype); // Track active button

    let handleClose = () => {
        setCreate(false);
    };

    let handleContinue = () => {
        if (intro.quizName.length === 0) {
            setIntro((prev) => ({ ...prev, quizName: "" }));
            setError("Quiz Name Required!");
        } else {
            setError("");
            if (quiztype === "quiz") {
                setCreateQuiz(true);
                handleClose();
            } else {
                handleClose();
                setCreatePoll(true);
            }
        }
        console.log("db", db);
    };

    let handleType = (value) => {
        setQuizType(value);
        setActiveButton(value); // Set active button state
        console.log(value);
    };

    let handleDb = (e) => {
        setIntro((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            quizType: quiztype,
        }));
        setDb(intro);
        console.log("db qmodal", db);
    };

    return (
        <>
            <div className={quizmodal.container}>
                <div className={quizmodal.outer}>
                    <div className={quizmodal.inner}>
                        <div className={quizmodal.quizname}>
                            <input
                                type="text"
                                placeholder={error ? error : "Quiz Name"}
                                className={`${quizmodal.input} ${error ? quizmodal.errorPlaceholder : ""}`}
                                name="quizName"
                                value={intro.quizName}
                                onChange={(e) => handleDb(e)}
                            />
                        </div>

                        <div className={quizmodal.quiztype}>
                            <label className={quizmodal.label} htmlFor="quizType">Quiz Type</label>
                            <button
                                onClick={() => handleType("quiz")}
                                className={`${quizmodal.qna} ${activeButton === "quiz" ? quizmodal.activeButton : ""}`}
                            >
                                Q&A
                            </button>
                            <button
                                onClick={() => handleType("poll")}
                                className={`${quizmodal.polltype} ${activeButton === "poll" ? quizmodal.activeButton : ""}`}
                            >
                                Poll Type
                            </button>
                        </div>

                        <div className={quizmodal.lastcontainer}>
                            <button onClick={handleClose} className={quizmodal.cancel}>Cancel</button>
                            <button onClick={handleContinue} className={quizmodal.continue}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizModal;
