import poll from "./PollCreator.module.css";
import PollText from "../PollText/PollText";
import PollTextImg from "../PollTextImg/PollTextImg";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import axios from "axios"
let PollCreator = ({ setSuccess, setCreatePoll, setDb }) => {
  let [questiontext, setQuestionText] = useState("");

  // let [dummy, setDummy] = useState({ question: "", option: [] });

  let [total, setTotal] = useState([]);

  let [text, setText] = useState([
    { "_id": 1, "option1": "" },
    { "_id": 2, "option2": "" },
    { "_id": 3, "option3": "" },
    { "_id": 4, "option4": "" }
  ]);

  let [textimg, setTextImg] = useState([
    { "_id": 1, "text": "", "url": "" },
    { "_id": 2, "text": "", "url": "" },
    { "_id": 3, "text": "", "url": "" },
    { "_id": 4, "text": "", "url": "" }
  ]);

  let [newtabData, setNewTabData] = useState([]);

  let [select, setSelect] = useState("text");

  let handleSelectPollType = (e) => {
    setSelect(e.target.value);
  };

  let handleTab = (id) => {
    if (newtabData.length !== 0) {
      let updatedData = newtabData
        .filter((item) => item._id != id)
        .map((item, index) => ({ ...item, _id: index + 1 }));
      setNewTabData(updatedData);
    }
  };

  let handleAdd = () => {
    if (newtabData.length < 5) {
      let newId = newtabData.length === 0 ? 1 : newtabData.length + 1;
      setNewTabData([...newtabData, { "_id": newId, "text": "" }]);
    }

    let options = text.map(item => item[`option${item._id}`]);
    let newDummy = { question: questiontext, option: options };
    setTotal((prev) => [...prev, newDummy]);
    console.log("total", total);
  };

  let handleCreatePoll = async() => {
    setCreatePoll(false);
    setSuccess(true);
    console.log("total", total);
    try{
      await axios.post("http://localhost:7000/create-quiz", {questions:total})
      console.log("success axios!")
    }catch(err){
      console.log("error axios quesn")
    }
  };

  let handleCancel = () => {
    setCreatePoll(false);
  };

  let handleQuestion = (e) => {
    setQuestionText(e.target.value);
  };

  return (
    <>
      <div className={poll.container}>
        <div className={poll.innercontainer}>
          <div className={poll.dummycontainer}>
            <div className={poll.upperrow}>
              <div className={poll.uprow1}>
                <div className={poll.left}>
                  {/* new tab */}
                  {newtabData.map((item, index) => (
                    <div key={item._id} className={poll.tab}>
                      <div className={poll.cross}>
                        <IoIosClose
                          className={poll.close}
                          onClick={() => handleTab(item._id)}
                        />
                      </div>
                      <div className={poll.number}>
                        <p>{index + 1}</p>
                      </div>
                    </div>
                  ))}

                  {/* new tab end */}
                  <div className={poll.divplus}>
                    <FaPlus className={poll.plus} onClick={handleAdd} />
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
                  onChange={(e) => handleQuestion(e)}
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
                      onClick={(e) => handleSelectPollType(e)}
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
                      onClick={(e) => handleSelectPollType(e)}
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
                      onClick={(e) => handleSelectPollType(e)}
                    />
                  </div>
                  <div>Text & Image URL</div>
                </div>
              </div>
            </div>

            <div className={poll.midrow}>
              {/* text option , Image Url Options */}
              {(select === "text" || select === "ImageUrl") && (
                <div className={poll.pfield}>
                  {text.map((item, index) => (
                    <PollText
                      key={item._id}
                      textvalue={item.inptext}
                      id={item._id}
                      placevalue={`${
                        select === "text" ? "Text" : "Image URL"
                      }`}
                      text1={text}
                      setText={setText}
                    />
                  ))}
                </div>
              )}
              {/* text , Image url option ends */}
              {select === "Text&Img" && (
                <div className={poll.textimgcontainer}>
                  {textimg.map((item, index) => (
                    <PollTextImg
                      key={item._id}
                      id={item._id}
                      textimg={textimg}
                      setTextImg={setTextImg}
                    />
                  ))}
                </div>
              )}
              {/* TEXT&IMG */}
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
