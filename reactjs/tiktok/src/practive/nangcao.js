import { useEffect, useState } from "react"

// const tasks = {
//     id,
//     title,
//     completed,
//     priority: "low" | "medium" | "high"
// }
function Question() {



    const [id, setId] = useState();
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState("");
    const [priority, setPriority] = useState("");




    return (
        <div>
            Nhập tên công việc: <input
                type="text"
                style={{ marginRight: "10px" }}
            />

            Priority:
            <select style={{ marginLeft: "5px" }}
                value={priority}


                onChange={(e) => setPriority(e.target.value)}

            >
                <option value={"low"}>Low</option>
                <option value={"medium"}>Medium</option>
                <option value={"high"}>High</option>
            </select>

            <button className="btn btn-success" style={{ marginLeft: "5px" }}>
                ADD
            </button>

        </div>
    )
}

export default Question