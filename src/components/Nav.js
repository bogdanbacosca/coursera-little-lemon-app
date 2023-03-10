import logo from '../assets/icons_assets/Logo.svg'

function Nav() {
  return (
    <nav className='nav'>
      <img src={logo} alt='logo'/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Nav;
