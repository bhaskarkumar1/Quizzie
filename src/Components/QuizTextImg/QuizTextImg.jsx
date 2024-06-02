import React, { useState } from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import styles from './QuizTextImg.module.css';
import Timer from '../Timer/Timer';

const QuizTextImg = ({ optns, setOptns }) => {
  const [items, setItems] = useState([
    { _id: 1, text: '', imageUrl: '' },
    { _id: 2, text: '', imageUrl: '' },
    { _id: 3, text: '', imageUrl: '' },
  ]);

  const handleDelete = (_id) => {
    setItems(items.filter(item => item._id !== _id));
    setOptns(optns.filter((_, index) => index !== (_id - 1)));
  };

  const handleAdd = () => {
    const newId = items.length > 0 ? items[items.length - 1]._id + 1 : 1;
    setItems([...items, { _id: newId, text: '', imageUrl: '' }]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {items.map((item, index) => (
          <div key={item._id} className={styles.dummy}>
            <input className={styles.radio} name="option" type="radio" />
            <input
              value={optns[index]?.text || ""}
              onChange={(e) => {
                const newOptns = [...optns];
                newOptns[index] = { ...newOptns[index], text: e.target.value };
                setOptns(newOptns);
              }}
              type="text"
              placeholder="Text"
              className={styles.input}
            />
            <input
              value={optns[index]?.imageUrl || ""}
              onChange={(e) => {
                const newOptns = [...optns];
                newOptns[index] = { ...newOptns[index], imageUrl: e.target.value };
                setOptns(newOptns);
              }}
              type="text"
              placeholder="Image URL"
              className={styles.input}
            />
            <div className={styles.delete}>
              {index >= 2 && <RiDeleteBinFill onClick={() => handleDelete(item._id)} />}
            </div>
          </div>
        ))}
        {items.length < 4 && (
          <div className={styles.dummy}>
            <button className={styles.addoption} onClick={handleAdd}>Add Option</button>
          </div>
        )}
      </div>

      <div className={styles.right}>
        <Timer />
      </div>
    </div>
  );
};

export default QuizTextImg;
