import summarycard from "./SummaryCard.module.css"


let  SummaryCard=({number, type, dummy,color})=>{
    return(
<>
<div className={summarycard.container} style={{color:color}}>
<div>
<div className={summarycard.heading}>
<p><span className={summarycard.number}>{number}</span>{type}</p>
</div>
<div className={summarycard.lower}>
<p>{dummy}</p>
</div>
</div>


</div>

</>

    )
}


export default SummaryCard