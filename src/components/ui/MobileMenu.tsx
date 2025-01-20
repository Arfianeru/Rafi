import Button from './button';
"use client";

import Sidebar from './Sidebar';
import React, {useState} from 'react'
import {AlignLeft} from 'lucide-react'

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
    <button onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
      <AlignLeft className="lg:hidden hoverEffect"/>
    </button>
    <div className='lg:hidden'>
      <Sidebar 
      isOpen={isSidebarOpen}
      onClose={() => setIsSidebarOpen (false)}
      />
    </div>
    </>
  )
}

export default MobileMenu;