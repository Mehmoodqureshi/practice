import { Link } from "react-router-dom";
const NotFond = () => {
  return (
    <div className="notfound">
      <h2>SORRY</h2>
      <p>Page not fond</p>
      <Link to="/">Back to home page</Link>
    </div>
  );
};

export default NotFond;
