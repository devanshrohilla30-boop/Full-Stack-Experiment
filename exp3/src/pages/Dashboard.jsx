import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const user = localStorage.getItem("user");
  const role = localStorage.getItem("role");

  const logout = () => {

    localStorage.clear();

    navigate("/");
  };

  return (

    <div>

      <h1>Dashboard</h1>

      <h2>Welcome {user}</h2>

      <h3>Your Role : {role}</h3>

      <br />

      <Link to="/admin">
        Admin Page
      </Link>

      <br /><br />

      <Link to="/editor">
        Editor Page
      </Link>

      <br /><br />

      <button onClick={logout}>
        Logout
      </button>

    </div>

  );
}