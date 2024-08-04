import { useFetchData } from "../hooks/useFetchData";
import SkillItem from "./SkillItem";

const SKILLS_URL = "./jsons/skills.json";

function Skills() {
  const skills = useFetchData(SKILLS_URL, "skills");

  return (
    <section className="cols-span-1">
      <h2 className="mb-4 text-center text-xl font-medium uppercase">
        professional | skills
      </h2>
      <ul className="md:text-xl">
        {skills.map((skill) => (
          <SkillItem key={skill.skill} skill={skill} />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
