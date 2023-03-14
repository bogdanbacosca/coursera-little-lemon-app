import React, { useState } from 'react';
import '../styles/BookingForm.css';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, time, guests, occasion);
  };

  return (
    <>
      <h1 id='header'>Booking</h1>
      <form className='booking-form' onSubmit={handleSubmit}>
        <label htmlFor='date'>Date</label>
        <input
          type='date'
          id='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor='time'>Time</label>
        <select
          type='time'
          id='time'
          name='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value='12:00'>12:00</option>
          <option value='12:30'>12:30</option>
          <option value='13:00'>13:00</option>
          <option value='13:30'>13:30</option>
          <option value='14:00'>14:00</option>
          <option value='14:30'>14:30</option>
        </select>
        <label htmlFor='guests'>Number of guests</label>
        <input
          type='number'
          id='guests'
          name='guests'
          value={guests}
          placeholder='1'
          min='1'
          max='10'
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          name='occasion'
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
          <option value='Other'>Other</option>
        </select>
        <button type='submit'>Submit reservation</button>
      </form>
    </>
  );
}

export default BookingForm;
