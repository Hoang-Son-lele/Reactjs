import { Component, useEffect, useState } from "react";

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
// 2. Cleanup function luôn được gọi trước khi Component unmounted 
// 3. Cleanup function luôn được gọi mỗi trước khi callback được gọi



function Content() {
    const [avatar, setAvartar] = useState();


    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.linkimg);
        }

    }, [avatar])

    function handleAvatar(e) {
        const file = e.target.files[0];
        file.linkimg = URL.createObjectURL(file);

        setAvartar(file);
    }




    return (
        <div>
            <input
                type="file"
                onChange={handleAvatar}
            ></input>
            {avatar &&
                (<img
                    src={avatar.linkimg}
                    title="Super car"
                ></img>)
            }

        </div>
    )
}

export default Content;