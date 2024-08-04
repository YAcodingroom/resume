import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
function Button({ children, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
