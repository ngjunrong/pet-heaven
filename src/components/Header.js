import { MdPets } from "react-icons/md";

const Header = ({ title }) => {
  return (
    <>
      <div className="title" id="startShow">
        <h1>
          {title} <MdPets />
        </h1>
      </div>
    </>
  );
};

export default Header;
