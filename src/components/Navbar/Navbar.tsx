import "./Navbar.css";

const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};

const sunIcon = (
  <svg className="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      className="path"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
    />
    <circle
      className="circle"
      cx="256"
      cy="256"
      r="80"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
  </svg>
);

const moonIcon = (
  <svg
    className="moon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      className="path"
      d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);

export default function Navbar() {
  return (
    <nav className="nav">
      <a
        className="contact-btn"
        aria-label="email"
        id="email"
        href="mailto:tytierney@yahoo.com"
      >
        <svg
          className="mail"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <rect
            className="rect"
            x="48"
            y="96"
            width="416"
            height="320"
            rx="40"
            ry="40"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            className="path"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M112 160l144 112 144-112"
          />
        </svg>
      </a>
      <button className="nav-btn" onClick={toggleTheme}>
        {moonIcon}
        {sunIcon}
      </button>
    </nav>
  );
}
