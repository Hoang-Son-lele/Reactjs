import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Validate username
    if (user.length < 6) {
      newErrors.user = "Username phải có ít nhất 6 ký tự";
    } else if (user.includes(" ")) {
      newErrors.user = "Username không được chứa khoảng trắng";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Email không hợp lệ";
    }

    // Validate password
    if (pass.length < 8) {
      newErrors.pass = "Password phải có ít nhất 8 ký tự";
    }

    // Validate confirm password
    if (confirm !== pass) {
      newErrors.confirm = "Password không khớp";
    }

    setErrors(newErrors);

    // Nếu không có lỗi
    if (Object.keys(newErrors).length === 0) {
      alert("Đăng ký thành công 🎉");
      setUser("");
      setEmail("");
      setPass("");
      setConfirm("");
    }
  };

  return (
    <div className="App">
      <h2>Register Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Username:</label><br />
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          {errors.user && <p style={{ color: "red" }}>{errors.user}</p>}
        </div>

        <div>
          <label>Enter Email:</label><br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Enter Password:</label><br />
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {errors.pass && <p style={{ color: "red" }}>{errors.pass}</p>}
        </div>

        <div>
          <label>Confirm Password:</label><br />
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          {errors.confirm && (
            <p style={{ color: "red" }}>{errors.confirm}</p>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
