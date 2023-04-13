import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">Logo</Link>
      </div>

      <nav>
        <NavLink to="/">Products </NavLink>
        <NavLink to="/cart">Cart </NavLink>
        <NavLink to="/wishlist">Wishlist </NavLink>
      </nav>
    </header>
  );
};
export default Navbar;
