import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo/logo.svg";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <nav>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>

              <li>
                <NavLink to={"/services"}>Services</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Health Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/reviews"}>Reviews</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          StayHealthy
          <img src={logo} alt="medical" width={"25px"} />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <nav>
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Health Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/reviews"}>Reviews</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {currentUser ? (
        <div className="navbar-end">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-10 rounded-full ">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="justify-between">
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li className="justify-between">
                <Link to={"/reports"}>Reports</Link>
              </li>
              <li className="justify-between">
                <Link to={"/appointments"}>Appointments</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end gap-4">
          <NavLink className="btn btn-outline btn-primary" to={"/signup"}>
            Sign Up
          </NavLink>
          <NavLink className="btn btn-active btn-primary" to={"/login"}>
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
