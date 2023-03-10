import logo from '../assets/icons_assets/Logo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <img src={logo} alt='logo' />
      <section>
        <h3>Menu</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </section>
      <section>
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        <h3>Social media links</h3>
        <ul>
          <li>Facebook</li>
          <li>GitHub</li>
          <li>Twitter</li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;