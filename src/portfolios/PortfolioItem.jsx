import PropTypes from "prop-types";
import { renameKeys } from "../utils/helpers";
import SkillPills from "./SkillPills";
import PortfolioFooter from "./PortfolioFooter";
import PortfolioBody from "./PortfolioBody";
import PortfolioHeader from "./PortfolioHeader";

PortfolioItem.propTypes = {
  item: PropTypes.object,
};

function PortfolioItem({ item }) {
  const port = renameKeys(item);

  return (
    <div className="flex flex-col rounded-[10px] border border-stone-300">
      <PortfolioHeader port={port} />

      <PortfolioBody port={port}>
        {port.skills.map((skill) => (
          <SkillPills key={skill} skill={skill} />
        ))}
      </PortfolioBody>

      <PortfolioFooter port={port} />
    </div>
  );
}

export default PortfolioItem;
