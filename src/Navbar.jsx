import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="app-nav">
      <Link className="nav-link link-active" to="/">
        All
      </Link>
      <Link className="nav-link" to="/?ref=active">
        Active
      </Link>
      <Link className="nav-link" to="/?ref=completed">
        Completed
      </Link>
    </nav>
  );
}

export default Navbar;
