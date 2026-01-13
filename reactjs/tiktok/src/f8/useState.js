import { useState } from "react";

// Mounted and Unmounted

function IncreaseIndex() {
    const [index, setIndex] = useState(1);
    return (

        <div>

            <h1>{index}</h1>,

            <button onClick={() => {
                setIndex(index + 1)
            }}>Increase</button>
        </div>

    )

}
export default IncreaseIndex 