import PropTypes from "prop-types";
PortfolioHeader.propTypes = {
  port: PropTypes.object,
};

function PortfolioHeader({ port }) {
  return (
    <div className="h-auto overflow-hidden rounded-[10px_10px_0_0]">
      <a
        href={port.liveUrl ? port.liveUrl : port.repoUrl}
        rel="noreferrer noopenner"
        target="_blank"
      >
        <img
          src={port.imageUrl}
          className="block h-auto w-full object-cover object-center"
          alt={port.title}
        />
      </a>
    </div>
  );
}

export default PortfolioHeader;
