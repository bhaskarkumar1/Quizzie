import { useState } from "react";
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

  let handleInp = (e) => {
    let { name, value } = e.target;
    console.log("changes  done at name", name, " val", value);

    setText(prevText => 
      prevText.map(item => 
        item._id === id ? { ...item, [name]: value } : item
      )
    );
  
    console.log(text1);
  };
  return (
    <>
      <div className={ptext.cover1}>
        <div className={ptext.ptextinp}>
          <input
            placeholder={placevalue}
            name={"option" + id}
            type="text"
            value={text1[`option${id}`]}
            onChange={(e) => handleInp(e)}
          />
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
