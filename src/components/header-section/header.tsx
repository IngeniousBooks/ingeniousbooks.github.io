import IngeniousIcon from "../ui/icon";
import Logo from "../ui/logo";
import NavLinks from "./nav-links";
import VerticalLine from "./vertical-line";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <VerticalLine />
      <NavLinks />
      <VerticalLine />
      <IngeniousIcon />
    </header>
  );
}
