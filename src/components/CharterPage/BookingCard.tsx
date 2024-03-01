import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const BookingCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedOption, setSelectedOption] = React.useState<string>("");

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex flex-col justify-start items-center bg-blue-500 pt-10 pb-10">
      <h2 className="text-2xl font-bold mb-10 text-center text-white">Booking a Trip With Us</h2>
      <label htmlFor="datepicker" className="text-white">Select Date:</label>
      <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
        <DatePicker
          id="datepicker"
          selected={selectedDate}
          onChange={handleDateChange}
          className="form-control border-gray-300 rounded px-2 py-1"
        />
      </div>
      <label htmlFor="tripType" className="mt-4 mb-2 text-white">Select Trip Type:</label>
      <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
        <select
          id="tripType"
          value={selectedOption}
          onChange={handleOptionChange}
          className="form-select border-gray-300 rounded px-2 py-1"
        >
          <option value="stripped_bass">Stripped Bass trips</option>
          <option value="mahi_mahi">Mahi Mahi trips</option>
          <option value="offshore_tuna">Off Shore Tuna trips</option>
        </select>
      </div>
    </div>
  );
};

export default BookingCalendar;
