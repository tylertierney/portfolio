import Link from "next/link";

import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";

const Index = () => {
  return (
    <div>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WelcomeScreen />

          <br />
        </div>
      </main>
    </div>
  );
};

export default Index;
