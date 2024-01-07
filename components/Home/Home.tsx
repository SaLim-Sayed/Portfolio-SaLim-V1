import Hero from "./Hero";
import About from "./About/About";
import TeckStack from "./TechStack/TeckStack";
import WorkExp from "./Work/WorkExp";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WorkExp/>
      <TeckStack />
    </div>
  );
};

export default Home;
