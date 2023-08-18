import "./NameForm.scss";

function NameForm({ setName }) {
  function Handlesubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    setName(name);
  }

  return (
    <section className="name">
      <form className="name__card" onSubmit={Handlesubmit}>
        <h1 className="name__card-title">Welcome to Hang Man!</h1>
        <input
          className="name__card-field icon icon--search"
          type="text"
          name="name"
          placeholder="Please enter your name!"
        />

        <button className="name__card-button icon icon--upload" type="submit">
          Click Me
        </button>
      </form>
    </section>
  );
}

export default NameForm;
