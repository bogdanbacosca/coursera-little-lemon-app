import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import '../App.css'
import { useReducer } from 'react';

function Booking() {
  const [busyTimes, dispatch] = useReducer(updateTimes, {
    dates: [],
    times: [],
  });

  const openHours = [
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
  ];

  // TODO: refactor to get times from each date
  function getAvailableTimes(busyTimes) {
    const availableTimes = openHours.filter((time) => {
      return !busyTimes.times.includes(time);
    });
    return availableTimes;
  }

  const availableTimes = getAvailableTimes(busyTimes);

  function updateTimes(state, action) {
    switch (action.type) {
      case 'UPDATE_DATE':
        return {
          ...state,
          dates: [...state.dates, action.payload],
        };
      case 'UPDATE_TIME':
        return {
          ...state,
          times: [...state.times, action.payload],
        };
      default:
        return state;
    }
  }

  return (
    <>
      <Nav />
      <section className='container'>
        <BookingForm dispatch={dispatch} availableTimes={availableTimes} />
      </section>
      <Footer />
    </>
  );
}

export default Booking;
