import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import '../App.css'

function Booking() {
  return (
    <>
      <Nav />
      <section className='container'>
        <BookingForm />
      </section>
      <Footer />
    </>
  );
}

export default Booking;
