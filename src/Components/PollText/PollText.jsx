import ptext from "./PollText.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";

let PollText = ({ key, text, id, placevalue, text1, setText }) => {
  let handleDel = (id) => {
    // console.log(id)
    // eslint-disable-next-line react/prop-types
    let updatedText = text1
      .filter((item) => item._id !== id)
      .map((item, index) => ({ ...item, _id: index + 1 }));

    setText(() => updatedText);
  };

  return (
    <>
      <div className={ptext.cover1}>
        
        <div className={ptext.ptextinp}>
          <input placeholder={placevalue} type="text" value={text} />
        </div>
        {id >= 3 && (
          <RiDeleteBin6Fill
            className={ptext.tdel}
            onClick={() => handleDel(id)}
          />
        )}


      </div>
    </>
  );
};

export default PollText;
