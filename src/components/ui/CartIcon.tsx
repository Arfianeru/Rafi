import React from 'react'
import {ShoppingBag} from "lucide-react"
import Link from "next/link"

const CartIcon = () => {
  return (
    <Link
    href={'/cart'}
    className="group relative"
    >
      <ShoppingBag className="hover:text-[#151515] w-5 h-5"/>
      <span className="flex justify-center items-center w-3.5 h-3.5 rounded-full bg-[#151515] -top-1 -right-1 text-white absolute text-sm">
        0
      </span>
    </Link>
  )
}

export default CartIcon