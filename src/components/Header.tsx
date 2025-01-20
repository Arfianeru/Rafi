import MobileMenu from './ui/MobileMenu';
import CartIcon from './ui/CartIcon';
import SearchBar from './ui/SearchBar';
import Logo from './ui/Logo';
import SectionMenu from './ui/SectionMenu';
import Container from './ui/Container';
import React from 'react'
import {ListOrdered} from "lucide-react"
import {Button} from "@/components/ui/button"
import {currentUser} from '@clerk/nextjs/server'
import Link from 'next/link'
import {SignInButton, ClerkLoaded, SignedIn, UserButton} from '@clerk/nextjs'

const Header = async () => {
  const user = await currentUser();
  return (
    <header className="border border-slate-400 shadow-sm py-2">
    <Container className="p-2.5 flex justify-between items-center">
      <SectionMenu />
      <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
      <MobileMenu />
      <Logo className="md:text-3xl font-lora">
        2faces.id
      </Logo>
      </div>
      <div className="w-1/3 flex items-center gap-3.5 justify-end">
        <SearchBar />
        <CartIcon />
      <ClerkLoaded>
      <SignedIn>
            <Link
    href={'/orders'}
    className="group relative"
    >
      <ListOrdered className="hover:text-[#151515] w-5 h-5"/>
      <span className="flex justify-center items-center w-3.5 h-3.5 rounded-full bg-[#151515] -top-1 -right-1 text-white absolute text-sm">
        0
      </span>
    </Link>
    <UserButton/>
      </SignedIn>
     {!user && (
        <SignInButton mode="modal">
         <Button>
          login
        </Button>
        </SignInButton>
        )}
      </ClerkLoaded>
      </div>
    </Container>
    </header>
  )
}

export default Header;