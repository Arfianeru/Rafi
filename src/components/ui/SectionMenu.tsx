"use client";

import React from 'react'
import {NavData} from "@/hooks/index";
import Link from "next/link"
import {usePathname} from "next/navigation"

const SectionMenu = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:flex items-center capitalize text-sm gap-3.5 font-medium w-1/3 whitespace-nowrap text-slate-500">
      {NavData?.map((item)=> (
      <Link
      key={item.title}
      href={item?.href}
      className={`hover:text-[#151515] hoverEffect relative group ${pathname === item?.href && "text-[#151515]"}`}
      >
      {item.title}
      <span className={`absolute -bottom-0.5 w-0 h-0.5 left-1/2 hoverEffect bg-[#151515] group-hover:w-1/2 group-hover:left-0 ${pathname === item?.href && "w-1/2"}`}/>
      <span className={`absolute -bottom-0.5 w-0 h-0.5 right-1/2 hoverEffect bg-[#151515] group-hover:w-1/2 group-hover:right-0 ${pathname === item?.href && "w-1/2"}`}/>
      </Link>
      ))}
    </div>
  )
}

export default SectionMenu;