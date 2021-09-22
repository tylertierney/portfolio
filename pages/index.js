import { useUser } from "../context/authContext";
import Link from "next/link";

import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";

const Home = () => {
  const { user, setUser, login, logout } = useUser();

  return (
    <div>
      <main>
        {/* <WelcomeScreen /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {user ? (
            <div>
              <p>{user.firstname}</p>
              <p>{user.lastname}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.id}</p>
              <button onClick={() => logout()}>Log Out</button>
            </div>
          ) : (
            <WelcomeScreen />
          )}
          <br />
          {/* <Link href="/profile">Go to profile</Link> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
