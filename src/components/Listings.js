import ShowDog from "./ShowDog";
import Copyright from "./Copyright";

const Listings = () => {
  const backgroundStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/frame-with-dogs-grid-background_53876-111992.jpg?w=2000')",
  };
  return (
    <div style={backgroundStyle}>
      <ShowDog />;
      <Copyright />
    </div>
  );
};

export default Listings;
