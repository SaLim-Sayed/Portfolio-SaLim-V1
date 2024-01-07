import { cn } from "@/libs/cn";
import Hero from "./Hero";
import About from "./About/About";

const Home = () => {
  return (
<div className="bg-black">
<div className="  flex flex-col gap-6 bg-black  ">
      <Hero />
      <About/>
    </div>
</div>
  );
};

export default Home;
