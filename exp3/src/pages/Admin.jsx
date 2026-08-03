import { Link } from "react-router-dom";

export default function Admin() {

  return (

    <div>

      <h1>Admin Panel</h1>

      <p>Only Admin can access this page.</p>

      <Link to="/dashboard">
        Back
      </Link>

    </div>

  );

}