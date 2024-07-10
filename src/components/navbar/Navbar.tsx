import { Logo } from "../logo/Logo";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <a href="https://github.com/magdalena-karpinska" target="_blank">
        Github
      </a>
    </nav>
  );
};
