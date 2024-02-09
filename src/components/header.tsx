import IngeniousIcon from "./icon";
import Logo from "./logo";
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
