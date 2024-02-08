import IngeniousIcon from "./icon";
import Logo from "./logo";
import NavLinks from "./nav-links";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <NavLinks />
      <IngeniousIcon />
    </header>
  );
}
