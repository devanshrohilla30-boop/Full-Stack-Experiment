import { Link } from "react-router-dom";

export default function Unauthorized() {

  return (

    <div>

      <h1>Access Denied</h1>

      <h2>You are not authorized to access this page.</h2>

      <Link to="/dashboard">
        Go Back
      </Link>

    </div>

  );

}