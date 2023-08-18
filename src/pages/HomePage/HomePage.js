import NameForm from "../../components/NameForm/NameForm";
import NameGreeting from "../../components/NameGreeting/NameGreeting";

function HomePage({ name, setName }) {
  if (!name) {
    return <NameForm setName={setName} />;
  } else {
    return <NameGreeting name={name} setName={setName} />;
  }
}

export default HomePage;
