import Opening from "./sections/opening";
import Services from "./sections/services";
import TechStack from "./sections/techstack";
import Blogs from "./sections/blogs";
import Feedback from "./sections/feedback";

const Main = () => {
  return (
    <main>
      <Opening />
      <Services />
      <TechStack />
      <Blogs />
      <Feedback />
    </main>
  );
};

export default Main;
