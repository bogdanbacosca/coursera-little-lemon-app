import React, { useState, useEffect } from 'react';
import '../styles/BookingForm.css';

function BookingForm({ dispatch, availableTimes }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_DATE', payload: date });
    dispatch({ type: 'UPDATE_TIME', payload: time });
  };

  useEffect(() => {
    if (availableTimes) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes]);

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
          onSubmit={(e) =>
            dispatch({ type: 'UPDATE_DATE', payload: e.target.value })
          }
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor='time'>Time</label>
        <select
          type='time'
          id='time'
          name='time'
          value={time}
          onSubmit={(e) =>
            dispatch({ type: 'UPDATE_TIME', payload: e.target.value })
          }
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time) => {
            return (
              <option value={time} key={time}>
                {time}
              </option>
            );
          })}
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
