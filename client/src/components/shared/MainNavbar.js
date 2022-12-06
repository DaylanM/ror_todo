import { Link } from "react-router-dom";

const MainNavbar = () => (
  <>
    <nav>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>about</li>
        </Link>
        <Link to='/lists'>
          <li>lists</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default MainNavbar;