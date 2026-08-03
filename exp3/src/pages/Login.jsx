import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [username, setUsername] = useState("");
  const [role, setRole] = useState("Viewer");

  const navigate = useNavigate();

  const login = () => {

    if (username === "") {
      alert("Enter Username");
      return;
    }

    const token = "jwt-demo-token";

    localStorage.setItem("token", token);
    localStorage.setItem("user", username);
    localStorage.setItem("role", role);

    navigate("/dashboard");
  };

  return (
    <div>

      <h1>JWT Authentication</h1>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >

        <option>Admin</option>
        <option>Editor</option>
        <option>Viewer</option>

      </select>

      <br /><br />

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}