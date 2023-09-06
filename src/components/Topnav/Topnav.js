import "./Topnav.scss";

import { Link } from "react-router-dom";

function Topnav({ name }) {
  return (
    <>
      <section className="topnav">
        <Link to="/" className="topnav__logo-link">
          Hang Man
        </Link>
        <Link to="/upload">
          <button className="topnav__upload-button">You can add your word!!</button>
        </Link>
        <div className="topnav__name">👤 {name} </div>
      </section>
    </>
  );
}
export default Topnav;
