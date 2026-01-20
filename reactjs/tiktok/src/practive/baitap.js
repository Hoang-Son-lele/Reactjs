import { useState, useEffect } from "react";

function Testing() {
    const [text, setText] = useState("");
    const [countdown, setCountdown] = useState(null);
    const [lastSaved, setLastSaved] = useState(null);

    useEffect(() => {
        if (countdown === null || countdown === 0) return;

        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown]);

    useEffect(() => {
        if (countdown === 0) {
            setLastSaved(new Date());
            setCountdown(null);
        }
    }, [countdown]);

    return (
        <div>
            <textarea
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    setCountdown(5);
                }}
            />

            {countdown !== null && (
                <p>Saving in: {countdown}</p>
            )}

            {lastSaved && (
                <p>
                    Last saved at: {lastSaved.toLocaleTimeString()}
                </p>
            )}
        </div>
    );
}

export default Testing;
