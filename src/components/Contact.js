import Header from "./Header";
import Copyright from "./Copyright";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const backgroundStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/frame-with-animals-doodle-grid-background_53876-111993.jpg?w=2000')",
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, email, subject, message };

    setIsPending(true);

    fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    }).then(() => {
      console.log("new data added");
      setIsPending(false);
      // navigate(-1);
      navigate("/");
    });
  };

  return (
    <div style={backgroundStyle}>
      <section className="contact" id="contact">
        <div className="heading">
          <br />
          <h1>
            <br />
            <Header title="Register to join our community!" />
          </h1>
        </div>

        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7444038599706!2d103.77398581517735!3d1.3294011990304142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1080893304bd%3A0xc889e76f4e447e42!2sSIM%20Global%20Education!5e0!3m2!1sen!2ssg!4v1665302726095!5m2!1sen!2ssg"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form onSubmit={handleSubmit}>
            <h3 style={{ color: "black" }}>Get In Touch</h3>
            <input
              type="text"
              placeholder="Your name"
              className="box"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your email"
              className="box"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              className="box"
              id="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="box"
              cols="30"
              rows="10"
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {!isPending && <button>Submit</button>}
            {isPending && <button disabled>Submitting...</button>}
          </form>
        </div>
        <br />
        <Copyright />
      </section>{" "}
    </div>
  );
};

export default Contact;
