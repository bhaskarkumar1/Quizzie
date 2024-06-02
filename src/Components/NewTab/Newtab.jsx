import newtab from "./Newtab.module.css";
import { RxCross2 } from "react-icons/rx";

let Newtab = ({ item, question, setQuestion }) => {
    let handleDelete = (id) => {
        setQuestion(question.filter(item => item._id !== id));
    };

    return (
        <>
            <div className={newtab.container}>
                <button className={newtab.btn}>{item._id}</button>
                <RxCross2 onClick={() => handleDelete(item._id)} className={newtab.cross} />
            </div>
        </>
    );
};

export default Newtab;
