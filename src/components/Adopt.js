import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adopt = () => {
  const backgroundStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/frame-with-dogs-white-background_53876-99295.jpg?w=2000')",
    height: "100vh",
    marginTop: "10px",
    fontSize: "25px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [reason, setReason] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const adopt = { name, email, number, petName, petType, reason };

    setIsPending(true);

    fetch("http://localhost:8000/adopt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adopt),
    }).then(() => {
      console.log("new data added");
      setIsPending(false);
      // navigate(-1);
      navigate("/");
    });
  };

  return (
    <div style={backgroundStyle}>
      <div className="create">
        <br /> <br /> <br /> <br />
        <br /> <br />
        <h2>Submit your particulars if you are looking to adopt a pet!</h2>
        <form onSubmit={handleSubmit}>
          <label>Full name:</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Contact number:</label>
          <input
            type="text"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <label>Pet name:</label>
          <input
            type="text"
            required
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
          <label>Pet type:</label>
          <select value={petType} onChange={(e) => setPetType(e.target.value)}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>

          <label>Reason of adoption:</label>
          <textarea
            required
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>

          {!isPending && <button>Submit</button>}
          {isPending && <button disabled>Submitting...</button>}
        </form>
        <br />
        <br />
        <div className="copyright">
          <p style={{ marginLeft: 40, marginTop: -60 }}>
            &#169; Pet Heaven All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adopt;
