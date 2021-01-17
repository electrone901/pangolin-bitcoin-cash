function Navbar() {
  return (
    <ul className="nav justify-content-end first-color p-3">
        <li className="nav-item">
            <a className="nav-link active" href="/">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">Log In</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
        </li>
    </ul>
  );
}

export default Navbar;
