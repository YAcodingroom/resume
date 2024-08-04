import Profile from "./Profile";
import Skills from "./Skills";
import SocialLinks from "./SocialLinks";

function About() {
  return (
    <main className="mx-10 my-8 space-y-6 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:gap-8">
      <h1 className="col-span-2 text-center text-2xl font-medium uppercase tracking-widest md:text-3xl">
        About YAL studio
      </h1>

      <Profile />
      <Skills />
      <SocialLinks />
    </main>
  );
}

export default About;
