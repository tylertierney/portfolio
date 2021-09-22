import Particles from "react-particles-js";
import params from "./Params.json";

console.log(params);

const ParticlesComponent = () => {
  return (
    <Particles
      style={{
        minHeight: "300px",
        maxHeight: "300px",
        zIndex: "1",
      }}
      params={params}
    />
  );
};

export default ParticlesComponent;
