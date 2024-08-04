import PropTypes from "prop-types";
PortfolioFooter.propTypes = {
  port: PropTypes.object,
  children: PropTypes.node,
};

function PortfolioFooter({ port, children }) {
  return (
    <div className="mb-2 mt-auto">
      <div className="text-center text-blue-800">
        <a
          className="hover:text-orange-400"
          href={port.repoUrl}
          aria-hidden="true"
          target="_blank"
        >
          <span>Link to repo </span>
          {children}
        </a>
      </div>
      <p className="text-center text-xs text-stone-400 md:text-sm">
        <small>{port.copyright}</small>
      </p>
    </div>
  );
}

export default PortfolioFooter;
