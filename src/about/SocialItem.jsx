import PropTypes from "prop-types";

SocialItem.propTypes = { children: PropTypes.node, href: PropTypes.string };

function SocialItem({ children, href }) {
  return (
    <a className="hover:text-orange-400" href={href} aria-hidden="true">
      {children}
    </a>
  );
}

export default SocialItem;
