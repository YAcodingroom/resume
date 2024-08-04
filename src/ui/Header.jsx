import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleToggleNavbar = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleLinkClick = () => {
    if (!isLargeScreen) {
      setIsOpen(false);
    }
  };

  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <header className="sticky left-0 top-0 z-50 w-full border-stone-900 bg-white text-base lg:text-xl">
      <nav className="flex items-center justify-between px-4 py-3 shadow-sm shadow-stone-300 md:px-6 md:py-4">
        <Link className="block font-semibold tracking-widest md:mr-auto" to="/">
          YU AN LIN
        </Link>

        <Button className="md:hidden" onClick={handleToggleNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </Button>

        <div
          className={`fixed right-0 top-0 h-full w-48 bg-stone-400 py-3 text-white transition-transform duration-300 ease-in-out ${isOpen ? "-translate-x-0" : "translate-x-full"} right-0 top-0 md:static md:flex md:w-auto md:transform-none md:space-x-4 md:bg-transparent md:py-0 md:text-stone-700`}
        >
          <Button
            className="block w-full px-4 text-right md:hidden"
            onClick={handleToggleNavbar}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
          <NavLink
            onClick={handleLinkClick}
            className="my-4 block px-4 tracking-widest md:my-0 md:px-2"
            to="portfolios"
          >
            作品 Portfolio
          </NavLink>
          <NavLink
            onClick={handleLinkClick}
            className="my-4 block px-4 tracking-widest md:my-0 md:px-2"
            to="/about"
          >
            關於 YAL studio
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
