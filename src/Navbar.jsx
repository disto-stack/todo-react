import { Link, useSearchParams } from 'react-router-dom';

function Navbar() {
  const [searchParam] = useSearchParams();

  const searchParamValue = searchParam.get('ref');

  return (
    <nav className="app-nav">
      <Link
        className={`nav-link ${!searchParamValue ? 'link-active' : ''}`}
        to="/"
      >
        All
      </Link>

      <Link
        className={`nav-link ${
          searchParamValue === 'active' ? 'link-active' : ''
        }`}
        to="/?ref=active"
      >
        Active
      </Link>

      <Link
        className={`nav-link ${
          searchParamValue === 'completed' ? 'link-active' : ''
        }`}
        to="/?ref=completed"
      >
        Completed
      </Link>
    </nav>
  );
}

export default Navbar;
