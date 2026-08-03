import { Link } from "react-router-dom";

export default function Editor() {

  return (

    <div>

      <h1>Editor Panel</h1>

      <p>Admin and Editor can access this page.</p>

      <Link to="/dashboard">
        Back
      </Link>

    </div>

  );

}