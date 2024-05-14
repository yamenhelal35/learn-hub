import React from 'react'
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';  
import CalendarComponent from './Calendar';
import { Card, CardTitle, CardDescription, CardHeader, CardContent } from '../../components/UI/Card.jsx';

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
    <div className='bg-gray-900'>
   <Sidebar/>
   <div className="flex flex-col min-h-screen ml-64 mt-16">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
         <h1 className='font-bold text-5xl mt-8'>Dashboard</h1>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-lg font-medium">Analytics</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>GPA</CardTitle>
                <CardDescription>3.8</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Attendance</CardTitle>
                <CardDescription>95%</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Progress</CardTitle>
                <CardDescription>
                  {/* <Progress value={80} /> */}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Classes</CardTitle>
                <CardDescription>12</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-lg font-medium">Important Tasks</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Math Homework</p>
                    <p className="text-sm text-gray-500">Due: April 15</p>
                  </div>
                  <button size="sm" variant="outline">
                    View
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="font-medium">English Essay</p>
                    <p className="text-sm text-gray-500">Due: April 20</p>
                  </div>
                  <button size="sm" variant="outline">
                    View
                  </button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Biology Midterm</p>
                    <p className="text-sm text-gray-500">April 18</p>
                  </div>
                  <button size="sm" variant="outline">
                    View
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="font-medium">History Final</p>
                    <p className="text-sm text-gray-500">May 5</p>
                  </div>
                  <button size="sm" variant="outline">
                    View
                  </button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Extracurricular Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Student Council Meeting</p>
                    <p className="text-sm text-gray-500">April 22, 3:00 PM</p>
                  </div>
                  <button size="sm" variant="outline">
                    View
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="font-medium">Robotics Club</p>
                    <p className="text-sm text-gray-500">Wednesdays, 4:00 PM</p>
                  </div>
                  <button size="sm" variant="outline">
                    View
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
   
     
   
</div>

  )
}

export default Dashboard