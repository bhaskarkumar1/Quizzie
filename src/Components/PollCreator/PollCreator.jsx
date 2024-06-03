import poll from "./PollCreator.module.css";
import PollText from "../PollText/PollText";
import PollTextImg from "../PollTextImg/PollTextImg";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";

let PollCreator = ({ setSuccess, setCreatePoll, setDb, db }) => {
    let [question, setQuestion] = useState([]);
    let [questiontext, setQuestionText] = useState("");
    let [optns, setOptns] = useState([]);
    let [select, setSelect] = useState("text");

    let handleSelectPollType = (e) => {
        setSelect(e.target.value);
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

    let handleTab = (id) => {
        setQuestion(question.filter(item => item._id !== id).map((item, index) => ({ ...item, _id: index + 1 })));
    };

    let handleCreatePoll = async () => {
        try {
            let updatedDb = { ...db, questions: question, optionType: select };
            setDb(updatedDb);
            
            let token = localStorage.getItem("token");
            // console.log(token);

            await axios.post("http://localhost:7000/create-quiz", updatedDb, {
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log("success axios!");

            setCreatePoll(false);
            setSuccess(true);
        } catch (err) {
            console.log("error axios quesn");
        }
    };

    let handleCancel = () => {
        setCreatePoll(false);
    };

    return (
        <>
            <div className={poll.container}>
                <div className={poll.innercontainer}>
                    <div className={poll.dummycontainer}>
                        <div className={poll.upperrow}>
                            <div className={poll.uprow1}>
                                <div className={poll.left}>
                                    {question.map((item, index) => (
                                        <div key={item._id} className={poll.tab}>
                                            <div className={poll.cross}>
                                                <IoIosClose className={poll.close} onClick={() => handleTab(item._id)} />
                                            </div>
                                            <div className={poll.number}>
                                                <p>{index + 1}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className={poll.divplus}>
                                        <FaPlus className={poll.plus} onClick={handleNewQuestion} />
                                    </div>
                                </div>
                                <div className={poll.right}>
                                    <p>Max 5 Polls</p>
                                </div>
                            </div>
                            <div className={poll.uprow2}>
                                <input
                                    className={poll.inpquestion}
                                    type="text"
                                    placeholder="Poll Question"
                                    value={questiontext}
                                    onChange={(e) => setQuestionText(e.target.value)}
                                />
                            </div>
                            <div className={poll.uprow3}>
                                <div>Option Type</div>
                                <div className={poll.optfield}>
                                    <div className={poll.optdum}>
                                        <input
                                            className={poll.radio}
                                            name="option"
                                            type="radio"
                                            value="text"
                                            onClick={handleSelectPollType}
                                            defaultChecked
                                        />
                                    </div>
                                    <div>Text</div>
                                </div>

                                <div className={poll.optfield}>
                                    <div className={poll.optdum}>
                                        <input
                                            className={poll.radio}
                                            name="option"
                                            type="radio"
                                            value="ImageUrl"
                                            onClick={handleSelectPollType}
                                        />
                                    </div>
                                    <div>Image URL</div>
                                </div>
                                <div className={poll.optfield}>
                                    <div className={poll.optdum}>
                                        <input
                                            className={poll.radio}
                                            name="option"
                                            type="radio"
                                            value="Text&Img"
                                            onClick={handleSelectPollType}
                                        />
                                    </div>
                                    <div>Text & Image URL</div>
                                </div>
                            </div>
                        </div>

                        <div className={poll.midrow}>
                            {(select === "text" || select === "ImageUrl") && (
                                <PollText optns={optns} setOptns={setOptns} />
                            )}
                            {select === "Text&Img" && (
                                <PollTextImg optns={optns} setOptns={setOptns} />
                            )}
                        </div>

                        <div className={poll.lowerrow}>
                            <div className={poll.btn}>
                                <button className={poll.cancel} onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button className={poll.create} onClick={handleCreatePoll}>
                                    Create Poll
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PollCreator;
