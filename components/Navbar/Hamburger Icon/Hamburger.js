const Hamburger = ({ isNavmenuShowing, setNavmenuShowing }) => {
  const toggleNavmenu = () => {
    setNavmenuShowing(!isNavmenuShowing);
  };
  return (
    <div
      className={
        isNavmenuShowing ? "hamburgerContainer change" : "hamburgerContainer"
      }
      onClick={() => toggleNavmenu()}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default Hamburger;
