import PropTypes from "prop-types";
PortfolioBody.propTypes = {
  port: PropTypes.object,
  children: PropTypes.node,
};

function PortfolioBody({ port, children }) {
  return (
    <div className="m-4">
      <p className="text-lg font-medium md:text-2xl">{port.title}</p>
      <div className="my-2 flex flex-wrap items-center gap-2 space-x-1">
        {children}
      </div>
      <p className="text-base md:text-xl">{port.contentZh}</p>
    </div>
  );
}

export default PortfolioBody;
