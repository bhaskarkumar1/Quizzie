import React, { useState } from 'react';
import timer from './Timer.module.css';

let Timer = () => {
    const [active, setActive] = useState('off');

    const handleClick = (value) => {
        setActive(value);
    };

    return (
        <>
            <div className={timer.container}>
                <div className={timer.head}><p>Timer</p></div>
                <div className={`${timer.off} ${active === 'off' ? timer.active : ''}`}>
                    <button onClick={() => handleClick('off')}>OFF</button>
                </div>
                <div className={`${timer.five} ${active === 'five' ? timer.active : ''}`}>
                    <button onClick={() => handleClick('five')}>5 Sec</button>
                </div>
                <div className={`${timer.ten} ${active === 'ten' ? timer.active : ''}`}>
                    <button onClick={() => handleClick('ten')}>10 Sec</button>
                </div>
            </div>
        </>
    );
};

export default Timer;
