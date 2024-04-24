import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarComponent = ({ events }) => {
  return (
    <div className="bg-white rounded-sm shadow-md p-8">
      <h2 className="text-lg font-semibold mb-4 ">Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
};

export default CalendarComponent;
