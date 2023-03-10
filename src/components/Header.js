import header from '../assets/icons_assets/restauranfood.jpg';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-body'>
          <section>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediteraneean Restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className='button'>Reserve a Table</button>
          </section>
          <img src={header} alt='header' height='250px' width='250px' />
        </div>
      </div>
    </header>
  );
}

export default Header;
