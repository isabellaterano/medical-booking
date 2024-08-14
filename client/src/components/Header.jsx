import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo/logo.svg";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-3 shadow-lg bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"/"} className="rounded-lg">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/services"} className="rounded-lg">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to={"/blog"} className="rounded-lg">
                Health Blog
              </NavLink>
            </li>
            <li>
              <NavLink to={"/reviews"} className="rounded-lg">
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to={"/"} className="flex items-center space-x-2 ml-4">
          <img src={logo} alt="StayHealthy" className="w-8 h-8" />
          <span className="text-xl font-semibold">Stayhealthy</span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">
          <li>
            <NavLink to={"/"} className="rounded-lg hover:text-primary">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/services"} className="rounded-lg hover:text-primary">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to={"/blog"} className="rounded-lg hover:text-primary">
              Health Blog
            </NavLink>
          </li>
          <li>
            <NavLink to={"/reviews"} className="rounded-lg hover:text-primary">
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {currentUser ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-10 p-2 shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/profile"} className="rounded-lg">
                  Profile
                </Link>
              </li>
              <li>
                <Link to={"/reports"} className="rounded-lg">
                  Reports
                </Link>
              </li>
              <li>
                <Link to={"/appointments"} className="rounded-lg">
                  Appointments
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <NavLink className="btn btn-outline btn-primary" to={"/signup"}>
              Sign up
            </NavLink>
            <NavLink className="btn btn-primary" to={"/login"}>
              Log in
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
