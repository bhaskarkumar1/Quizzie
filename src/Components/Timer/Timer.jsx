import timer from "./Timer.module.css"

let Timer=()=>{
    return(
        <>
        <div className={timer.container}>
            <div className={timer.head}><p>Timer</p></div>
            <div className={timer.off}><button>OFF</button></div>
            <div className={timer.five}><button>5 Sec</button></div>
            <div className={timer.ten}><button>10 Sec</button></div>
        </div>
        </>
    )
}

export default Timer