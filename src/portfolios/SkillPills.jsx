import PropTypes from "prop-types";
SkillPills.propTypes = { skill: PropTypes.string };

function SkillPills({ skill }) {
  return (
    <div className="rounded-3xl border p-2 text-xs md:text-sm">{skill}</div>
  );
}

export default SkillPills;
