import IngeniousIcon from "../ui/icon";
import Logo from "../ui/logo";
import NavLinks from "./nav-links";
import VerticalLine from "./vertical-line";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <Link to="/">{<Logo />}</Link>
      <VerticalLine />
      <NavLinks />
      <VerticalLine />
      <IngeniousIcon />
    </header>
  );
}
