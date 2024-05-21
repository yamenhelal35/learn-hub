import React from 'react'

import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar'
import ChatTest from './ChatTest'


const Chat = () => {
  return (
    <div>
    <Sidebar> </Sidebar>
    <div className="flex ml-64 mt-16 h-screen bg-gray-100">
        <ChatTest></ChatTest>
   
  </div>
  </div>
  )
}

export default Chat