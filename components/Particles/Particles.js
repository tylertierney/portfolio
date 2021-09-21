import Particles from "react-particles-js";
import params from "./Params.json";

console.log(params);

const ParticlesComponent = () => {
  return <Particles params={params} width="100%" height="300px" />;
};

export default ParticlesComponent;
