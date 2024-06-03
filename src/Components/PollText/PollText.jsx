import { useState } from "react";
import ptext from "./PollText.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";

let PollText = ({ optns, setOptns }) => {
  let [items, setItems] = useState([
    { "_id": 1, text: '' },
    { "_id": 2, text: '' },
    { "_id": 3, text: '' },
    { "_id": 4, text: '' },

  ]);

  let handleDelete = (_id) => {
    setItems(items.filter(item => item._id !== _id));
    setOptns(optns.filter((_, index) => index !== (_id - 1)));
  };

  let handleInp = (e, id) => {
    const { value } = e.target;
    const newOptns = [...optns];
    newOptns[id - 1] = { ...newOptns[id - 1], text: value };
    setOptns(newOptns);
  };

  return (
    <>
      <div className={ptext.container}>
        {items.map((item, index) => (
          <div key={item._id} className={ptext.cover1}>
            <div className={ptext.ptextinp}>
              <input
                placeholder="Text"
                type="text"
                value={optns[index]?.text || ""}
                onChange={(e) => handleInp(e, item._id)}
              />
            </div>
            <div>
            {item._id >= 3 && (
              <RiDeleteBin6Fill
                className={ptext.tdel}
                onClick={() => handleDelete(item._id)}
              />
            )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PollText;
