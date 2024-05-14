import React from 'react'
import ChatSidebar from './ChatSidebar'
import ChatArea from './ChatArea'
import Sidebar from '../../components/StickyComponent/Side Bar/Sidebar'

const Chat = () => {
  return (
    <div>
    <Sidebar> </Sidebar>
    <div className="flex ml-64 mt-16 h-screen bg-gray-100">
        
    <ChatSidebar />
    <ChatArea />
  </div>
  </div>
  )
}

export default Chat