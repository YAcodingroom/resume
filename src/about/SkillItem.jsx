import PropTypes from "prop-types";

SkillItem.propTypes = {
  skill: PropTypes.object,
};

function SkillItem({ skill }) {
  const progressLevel = { width: skill.level };
  return (
    <li className="m-2 grid grid-cols-2 grid-rows-1">
      <span className="basis-1/5">{skill.skill}</span>
      <span className="relative z-10 my-auto inline-block h-2.5 w-full basis-1/5 rounded-[10px] border border-stone-400 bg-stone-400">
        <span
          className="absolute inset-0 z-20 mr-auto h-2 basis-1/5 rounded-[10px] bg-white"
          style={progressLevel}
        ></span>
      </span>
    </li>
  );
}

export default SkillItem;
