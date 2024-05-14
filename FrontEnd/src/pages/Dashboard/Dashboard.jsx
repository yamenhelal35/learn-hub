import React from 'react'
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';  
import CalendarComponent from './Calendar';

const events = [
    {
      title: 'Meeting',
      start: '2024-04-20T10:00:00',
      end: '2024-04-20T12:00:00',
    },
    {
      title: 'Conference',
      start: '2024-04-24T09:00:00',
      end: '2024-04-25T17:00:00',
    },
  ];

const Dashboard = () => {
  return (
    <div>
   <Sidebar/>
   <div className="flex-grow p-8 ml-64 flex flex-col justify-center bg-[#F4F0FF]">
    <CalendarComponent events={events} />
     
   </div>
</div>

  )
}

export default Dashboard