import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">All</Link>
      <Link to="/?ref=active">Active</Link>
      <Link to="/?ref=completed">Completed</Link>
    </nav>
  );
}

export default Navbar;
