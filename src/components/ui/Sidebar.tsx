import Logo from './Logo';
import React, {FC} from 'react'
import {motion} from "motion/react"
import {X} from "lucide-react"
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar:FC<SidebarProps> = ({isOpen, onClose}) => {
  return (
    <div className={`fixed left-0 z-50 inset-y-0 bg-[#151515]/50 shadow-xl hoverEffect w-full ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.4, delay:0.3}}
      className="w-[80vw] bg-[#151515] text-white/90 h-full p-10 border-r border-r-white flex flex-col gap-6">
        <div className="flex justify-between items-center">
       <Logo className="font-lora text-white">
        2faces.id
      </Logo>
      <button className="hover:text-red-500 hoverEffect h-7 w-7" onClick={onClose}>
        <X/>
      </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar;