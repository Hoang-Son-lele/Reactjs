import { useState, useEffect } from "react";


function Testing() {
    const [text, setText] = useState("");

    console.log(text)
    return (
        <div>
            Text Editor: <input
                type="text"
                onChange={
                    (e) => {
                        setText(e.target.value)
                    }

                }
            />


        </div>
    )
}

export default Testing;