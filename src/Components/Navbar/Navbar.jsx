import { useState } from "react";
import nav from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import QuizModal from "../Modals/QuizModal/QuizModal";
import QuizCreator from "../QuizCreator/QuizCreator";
import PollCreator from "../PollCreator/PollCreator";
import Success from "../Success/Success";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

let Navbar = () => {
    let [select, setSelect] = useState("text");
    let navigate = useNavigate();
    let [isCreate, setCreate] = useState(false);
    let [quiztype, setQuizType] = useState("");
    let [createquiz, setCreateQuiz] = useState(false);
    let [createPoll, setCreatePoll] = useState(false);
    let [success, setSuccess] = useState(false);
    let [activeTab, setActiveTab] = useState("dashboard");

    let [db, setDb] = useState({
        quizName: "",
        category: "",
        optionType: "",
        questions: []
    });
    const location = useLocation();

    let handleDashboard = () => {
        setActiveTab("dashboard");
        // console.log("locaoiton:",location.pathname)
        navigate("/dashboard");
    };

    let handleAnalytics = () => {
        setActiveTab("analytics");
        navigate("/analytics");
    };

    let handleCreate = () => {
        setActiveTab("create");
        setCreate(true);
    };

    let handleLogOut = () => {
        try {
            localStorage.clear();
            toast.success("Logout Done!");
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (err) {
            toast.error("Error in logout!");
        }
    };

    return (
        <>
            <div className={nav.container}>
                <div className={nav.heading}>
                    <h1 className={nav.quizzie}>QUIZZIE</h1>
                </div>

                <div className={nav.options}>
                    <div 
                        onClick={handleDashboard} 
                        className={`${nav.dashboard} ${location.pathname === "/dashboard" ? nav.active : ""}`}
                    >
                        <p>Dashboard</p>
                    </div>
                    <div 
                        onClick={handleAnalytics} 
                        className={`${nav.analytics} ${location.pathname === "/analytics" ? nav.active : ""}`}
                    >
                        <p>Analytics</p>
                    </div>
                    <div 
                        onClick={handleCreate} 
                        className={nav.create}
                    >
                        <p>Create Quiz</p>
                    </div>
                </div>

                <div className={nav.logout}>
                    <div>
                        <hr />
                    </div>

                    <div onClick={handleLogOut}>
                        <p>LOGOUT</p>
                        <ToastContainer />
                    </div>
                </div>
            </div>
            {(isCreate || createquiz || createPoll || success) && <div className={nav.another}></div>}
            {isCreate && <QuizModal quiztype={quiztype} setQuizType={setQuizType} setCreatePoll={setCreatePoll} setCreate={setCreate} setCreateQuiz={setCreateQuiz} db={db} setDb={setDb} />}
            {quiztype === "quiz" && createquiz && <QuizCreator select={select} setSelect={setSelect} setSuccess={setSuccess} setCreateQuiz={setCreateQuiz} db={db} setDb={setDb}/>}
            {quiztype === "poll" && createPoll && <PollCreator setCreatePoll={setCreatePoll} quiztype={quiztype} setSuccess={setSuccess} setDb={setDb} db={db} />}
            {success && <Success linkvalue={"https://drive.google.com/drive/u/0/folders/1VC7TlcynPGc8sK0UyGZ6zWyR1DDfxH_s"} type={quiztype} setSuccess={setSuccess} />}
        </>
    );
};

export default Navbar;
