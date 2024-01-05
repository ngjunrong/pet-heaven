import Hero from "./Hero";
import Guide from "./Guide";
import Copyright from "./Copyright";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Home = () => {
  const myStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/cute-dog-border-frame-vector-beige-background_53876-111781.jpg?w=2000')",
  };

  return (
    <div style={myStyle}>
      <div>
        <Hero />
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Guide />
        <Newsletter />
        <Footer />
        <Copyright />
      </div>
    </div>
  );
};

export default Home;
