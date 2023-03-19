import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import '../App.css';
import { useReducer } from 'react';

function Booking() {
  const [getTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  function initializeTimes() {
    return [
      {
        date: '',
        times: [
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
        ],
      },
    ];
  }

  function updateTimes(state, action) {
    switch (action.type) {
      case 'UPDATE_DATE':
        return state.map((item) => {
          if (item.date === action.date) {
            return item;
          } else {
            return { date: action.date, times: item.times };
          }
        });
      case 'UPDATE_TIME':
        return state.map((item) => {
          if (item.date === action.date) {
            return {
              date: item.date,
              times: item.times.filter((time) => time !== action.time),
            };
          } else {
            return item;
          }
        });
      default:
        return state;
    }
  }

  return (
    <>
      <Nav />
      <section className='container'>
        <BookingForm dispatch={dispatch} />
      </section>
      <Footer />
    </>
  );
}

export default Booking;
