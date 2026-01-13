import { useEffect, useState } from "react";

// Events: Add / removeEventListener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers : setInterval,setTimeout,clearInterval,clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API



//trường hợp có thể xảy ra
// 1.useEffect(callback)
//- gọi callback được gọi mỗi khi component re-render
//- gọi callback sau khi component thêm element vào DOM
// 2.useEffect(callback, [])
//- chỉ gọi callback 1 lần sau khi component mounted.
// 3.useEffect(callback, [deps])
//-----------------------------
//1.Callback luôn được gọi mỗi khi component mounted

function Content() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component re-rendered");
    }, [])


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}> Increase </button>
        </div>
    )
}

export default Content;