import logo from '../assets/icons_assets/Logo.svg';

function Footer() {
  return (
    <footer>
      <img src={logo} alt='logo' />
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </footer>
  );
}

export default Footer;
