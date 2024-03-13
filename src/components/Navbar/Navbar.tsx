import "./Navbar.css";
import { sunIcon, moonIcon, mailIcon } from "../../icons/icons";
import { useEffect } from "react";

const localStorageThemeLabel = "prefers-dark-theme";

const toggleTheme = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    window.localStorage.removeItem(localStorageThemeLabel);
  } else {
    document.body.classList.add("dark-theme");
    window.localStorage.setItem(localStorageThemeLabel, "true");
  }
};

export default function Navbar() {
  useEffect(() => {
    if (window.localStorage.getItem(localStorageThemeLabel)) {
      document.body.classList.add("dark-theme");
    }
  }, []);

  return (
    <nav className="nav">
      <a
        title="Email Me"
        className="contact-btn"
        aria-label="email"
        id="email"
        href="mailto:tytierney@yahoo.com"
      >
        {mailIcon}
      </a>
      <button title="Toggle Theme" className="nav-btn" onClick={toggleTheme}>
        {moonIcon}
        {sunIcon}
      </button>
    </nav>
  );
}
