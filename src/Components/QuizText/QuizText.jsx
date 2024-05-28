import quiztext from "./QuizText.module.css"
import { RiDeleteBinFill } from "react-icons/ri";
import React,{useState} from "react";
let QuizText=({optns,setOptns})=>{

    let [items,setItems]=useState([
        {"_id":1, text:''},
        {"_id":2, text:''},
        {"_id":3, text:''},

    ])

    
let handleDelete=(_id)=>{
    // console.log(_id)
    setItems(items.filter(item=> item._id!=_id))
}

let handleAdd=()=>{
    // let newId = items.length > 2 ? items[items.length - 1]._id + 1 : 1;
    let newId =items[items.length - 1]._id + 1 

    setItems([...items, { _id: newId, text: "" }]);
}
    return(
<>
<div className={quiztext.container}>

    <div className={quiztext.left}>
        
     {items.map((item,index)=>(

        <div key={item._id} className={quiztext.dummy}>
        <input className={quiztext.radio} name="option" type="radio" /> 
        <input 
        value={optns[index]?.text || ""}
        onChange={(e) => {
          const newOptns = [...optns];
          newOptns[index] = { ...newOptns[index], text: e.target.value };
          setOptns(newOptns);
        }}
        

        
        type="text" placeholder="text"/><div className={quiztext.delete}>{ index>=2 && <RiDeleteBinFill onClick={()=>handleDelete(item._id)} />}</div>

        </div> 
     ))}
        
    {items.length<4  && <div className={quiztext.dummy}>
        <button className={quiztext.addoption} onClick={handleAdd}>Add Option</button>
    </div>}
       

           </div>

    <div className={quiztext.right}>


    </div>

</div>
</>
    )
}

export default QuizText