import { useState } from "react";

function Content() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function Validate() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email) === false) {
            setError("Emmail không đúng định dạng");
            return
        }

        if (password.length < 8) {
            setError("Password tối thiểu phải 8 kí tự");
            return
        }
        setError("");
        alert("Login Success");
    }

    return (

        <div>
            <label>Enter Email:</label>

            <input type="text"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />

            <br></br>

            <label>Enter Password:</label>

            <input type="text"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }} />

            <br></br>

            <button onClick={Validate}>Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}

        </div>

    )
}

export default Content;