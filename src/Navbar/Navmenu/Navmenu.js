import "./navmenu.css";

const Navmenu = ({ handleScroll }) => {
  return (
    <>
      <div onClick={() => handleScroll("about")} className="menuItem">
        About
      </div>
      <div onClick={() => handleScroll("projects")} className="menuItem">
        Projects
      </div>
      <div onClick={() => handleScroll("experience")} className="menuItem">
        Experience
      </div>
      <div onClick={() => handleScroll("contact")} className="menuItem">
        Contact
      </div>
    </>
  );
};

export default Navmenu;
