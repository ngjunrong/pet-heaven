import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const Guide = () => {
  return (
    <section className="guide" id="guide">
      <div className="heading"></div>
      <div className="guide-container">
        <div className="box">
          <FaDog style={{ fontSize: 70 }} />
          <h2 style={{ color: "blue" }}>Adopt</h2>
          <p style={{ color: "black" }}>
            Help give the pets a second home, look through our listings and make
            a request at the adopt tab.
          </p>
        </div>

        <div className="box">
          <FaCat style={{ fontSize: 70 }} />
          <h2 style={{ color: "blue" }}>Release</h2>
          <p style={{ color: "black" }}>
            Looking to give your pets a new and safe home? Simply head to the
            release tab and submit your request.
          </p>
        </div>

        <div className="box">
          <FaUserFriends style={{ fontSize: 70 }} />
          <h2 style={{ color: "blue" }}>Join us</h2>
          <p style={{ color: "black" }}>
            Interested to become a supporter of the society? Navigate to the
            contact tab and express your interest!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
