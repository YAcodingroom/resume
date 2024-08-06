import PropTypes from "prop-types";
PortfolioFooter.propTypes = {
  port: PropTypes.object,
};

function PortfolioFooter({ port }) {
  return (
    <div className="mb-2 mt-auto">
      <p className="text-center text-xs text-stone-400 md:text-sm">
        <small>{port.copyright}</small>
      </p>
    </div>
  );
}

export default PortfolioFooter;
