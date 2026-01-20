import { useState, useRef } from "react";

//lưu các giá trị qua một biến tham số ngoài
// function component

function Referent() {

    const [count, setCount] = useState(60);

    let timeId = useRef();

    function handleStart() {
        timeId.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000)
    }

    function handleStop() {
        clearInterval(timeId.current);
    }


    return (
        <div>
            <h1>
                {count}
            </h1>
            <br />
            <button
                onClick={handleStart}
            >Start</button>

            <button
                onClick={handleStop}
            >Stop</button>

        </div>
    )

}

export default Referent