import poll from "./PollCreator.module.css";
import PollText from "../PollText/PollText";
import PollTextImg from "../PollTextImg/PollTextImg";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

let PollCreator = ({setCreatePoll}) => {

    let[text, setText]=useState([
    { "_id":1, "inptext":""},
    { "_id":2, "inptext":""},
    { "_id":3, "inptext":""},
    { "_id":4, "inptext":""}
    ])
    let[textimg, setTextImg]=useState([
      { "_id":1, "text":"", "url":""},
      { "_id":2, "text":"", "url":""},
      { "_id":3, "text":"", "url":""},
      { "_id":4, "text":"", "url":""}
      ])

    let [newtabData,setNewTabData]=useState([
      {"_id":1,"text":""},
      {"_id":1,"text":""},
      {"_id":1,"text":""},
      {"_id":1,"text":""},
      {"_id":1,"text":""},
    ])

    let[select,setSelect]=useState("text")

    let handleSelectPollType=(e)=>{
      // console.log(e.target.value)
      setSelect(e.target.value)
      // console.log(select)
    }

    let handleTab=(e)=>{
      console.log(e)
    }

  return (
    <>
      <div className={poll.container}>
        <div className={poll.innercontainer}>
          <div className={poll.dummycontainer}>
            <div className={poll.upperrow}>
              <div className={poll.uprow1}>
                <div className={poll.left}>
                    
                    {/* new tab  */}
                    {newtabData.map((item,index)=>(
                        
                    <div  key={item._id} className={poll.tab}>
                    <div className={poll.cross}>
                    <IoIosClose className={poll.close} onClick={()=>handleTab()} />
                    </div>
                    <div className={poll.number}>
                        <p>{index+1}</p>
                    </div>
              </div>
                    ))}

                    {/* new tab end  */}
                    <div className={poll.divplus}><FaPlus  className={poll.plus}/></div>

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
                />
              </div>
              <div className={poll.uprow3}>
                <div>Option Type</div>
                <div className={poll.optfield}>
                  <div className={poll.optdum}>
                    <input className={poll.radio} name="option" type="radio" value="text" onClick={(e)=>handleSelectPollType(e)} defaultChecked />
                  </div>
                  <div>Text</div>
                </div>

                <div className={poll.optfield}>
                  <div className={poll.optdum}>
                    <input className={poll.radio} name="option" type="radio"  value="ImageUrl" onClick={(e)=>handleSelectPollType(e)}/>
                  </div>
                  <div>Image URL</div>
                </div>
                <div className={poll.optfield}>
                  <div className={poll.optdum}>
                    <input className={poll.radio} name="option" type="radio" value="Text&Img" onClick={(e)=>handleSelectPollType(e)}/>
                  </div>
                  <div>Text & Image URL</div>
                </div>
              </div>
            </div>

            <div className={poll.midrow}>
              {/* text option and Image Url Options */}
              {(select==="text" || select==="ImageUrl") && <div className={poll.pfield}>
              { text.map((item,index)=>(
                <PollText key={item._id} textvalue={item.inptext} id={item._id} placevalue={`${select==="text" ?"Text":"Image URL"}`}/>

              ))}
              </div>}
              {/* text and Image url option ends */}
              {select==="Text&Img" &&    <div className={poll.textimgcontainer}>
                {
                  textimg.map((item,index)=>(
                    <PollTextImg key={item._id} id={item._id}/>

                  ))}
                </div>}
              {/* TEXT&IMG */}

            </div>

            <div className={poll.lowerrow}>
              <div className={poll.btn}>
                <button className={poll.cancel}> Cancel</button>
                <button className={poll.create}
                onClick={() =>setCreatePoll(false)}
                >Create Poll</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PollCreator;
