import { useState } from "react";

function App() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      setError("All fields are required");
    } else {
      setError("");
      alert("Form submitted successfully!");
    }
  };

  return (
    <main>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        <p role="alert" aria-live="assertive" style={{ color: "red" }}>
          {error}
        </p>

        <label htmlFor="name">Name</label><br />
        <input id="name" name="name" type="text" required /><br /><br />

        <label htmlFor="email">Email</label><br />
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-describedby="email-info"
        />
        <br />
        <small id="email-info">
          We will not share your email
        </small>
        <br /><br />

        <label htmlFor="message">Message</label><br />
        <textarea
          id="message"
          name="message"
          rows="4"
          required
        ></textarea>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;