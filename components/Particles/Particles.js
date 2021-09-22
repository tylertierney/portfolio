import Particles from "react-particles-js";
import params from "./Params.json";

const ParticlesComponent = () => {
  return (
    <Particles
      style={{
        minHeight: "300px",
        maxHeight: "300px",
        zIndex: "1",
        minWidth: "100vw",
        width: "100vw",
        // border: "solid red 2px",
      }}
      params={params}
    />
  );
};

export default ParticlesComponent;
