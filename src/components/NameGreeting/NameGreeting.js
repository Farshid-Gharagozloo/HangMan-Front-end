import { useNavigate } from "react-router-dom";
import "./NameGreeting.scss";

function NameGreeting({ name, setName }) {
  const navigateTo = useNavigate();

  const logout = () => {
    localStorage.removeItem("name");
    setName(null);
  };

  return (
    <section className="name">
      <div className="name__card">
        <h1 className="name__card-title">Welcome {name}</h1>
        <button
          className="name__card-button"
          onClick={() => navigateTo("/play")}
        >
          Let's Play
        </button>
        <button
          className="name__card-button name__card-button--secondary"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </section>
  );
}

export default NameGreeting;
