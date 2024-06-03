import ti from "./PollTextImg.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";

let PollTextImg = ({ optns, setOptns }) => {
  const [items, setItems] = useState([
    { _id: 1, text: '', imageUrl: '' },
    { _id: 2, text: '', imageUrl: '' },
    { _id: 3, text: '', imageUrl: '' },
    { _id: 4, text: '', imageUrl: '' },

  ]);

  const handleDelete = (_id) => {
    setItems(items.filter(item => item._id !== _id));
    setOptns(optns.filter((_, index) => index !== (_id - 1)));
  };

  const handleInp = (e, id) => {
    const { name, value } = e.target;
    const newOptns = [...optns];
    newOptns[id - 1] = { ...newOptns[id - 1], [name]: value };
    setOptns(newOptns);
  };

  return (
    <>
      <div className={ti.container}>
        {items.map((item, index) => (
          <div key={item._id} className={ti.cover}>
            <div className={ti.text}>
              <input
                type="text"
                placeholder="Text"
                name="text"
                value={optns[index]?.text || ""}
                onChange={(e) => handleInp(e, item._id)}
              />
            </div>
            <div className={ti.img}>
              <input
                type="text"
                placeholder="Image URL"
                name="imageUrl"
                value={optns[index]?.imageUrl || ""}
                onChange={(e) => handleInp(e, item._id)}
              />
            </div>
            <div className={ti.dummy}>
            {item._id >= 3 && (
              <RiDeleteBin6Fill className={ti.icon} onClick={() => handleDelete(item._id)} />
            )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PollTextImg;
