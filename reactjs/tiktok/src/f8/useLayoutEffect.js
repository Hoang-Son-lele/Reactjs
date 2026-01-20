import { useLayoutEffect, useState } from "react";

function LayoutEffect() {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3)
            setCount(0);

    }, [count])

    function handleClick() {

        setCount(count + 1);
    }

    return (
        <div>
            <button
                onClick={handleClick}
            >

                Increase
            </button>

            <h1>{count}</h1>
        </div>
    )

}

export default LayoutEffect;