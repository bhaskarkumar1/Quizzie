import quizmodal from "./QuizModal.module.css";
import React, { useState } from "react";

const QuizModal = ({ setCreatePoll, quiztype, setQuizType, setCreate, setCreateQuiz, db, setDb }) => {
    const [intro, setIntro] = useState({
        quizName: "",
        quizType: "",
    });

    const [error, setError] = useState("");
    const [activeButton, setActiveButton] = useState(quiztype); // Track active button

    const handleClose = () => {
        setCreate(false);
    };

    const handleContinue = () => {
        if (intro.quizName.length === 0) {
            setError("Quiz Name Required!");
        } else {
            setError("");
            setDb((prev) => ({ ...prev, quizName: intro.quizName, category: intro.quizType }));

            if (intro.quizType === "quiz") {
                console.log(db)

                setCreateQuiz(true);
            } else {
                setCreatePoll(true);
            }
            handleClose();
        }
        console.log(db)
    };

    const handleType = (value) => {
        setQuizType(value);
        setActiveButton(value); // Set active button state
        setIntro((prev) => ({ ...prev, quizType: value }));
    };

    const handleIntro = (e) => {
        const { name, value } = e.target;
        setIntro((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
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
                            onChange={(e)=>handleIntro(e)}
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
    );
};

export default QuizModal;
