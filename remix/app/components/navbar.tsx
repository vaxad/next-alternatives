import { NavLink } from '@remix-run/react'
import { cn } from '~/lib/utils'
import { buttonVariants } from './ui/button'
import { ModeToggle } from './mode-toggle'

export default function Navbar() {
    return (
        <div className='top-4 fixed right-1/2 translate-x-1/2'>
            <nav className='p-0.5 bg-foreground rounded flex gap-1'>
                <NavLink to='/' className={({ isActive }) => cn(buttonVariants({ variant: isActive ? "secondary" : "ghost" }), isActive ? "" : "text-background")}>Home</NavLink>
                <NavLink to='/list' className={({ isActive }) => cn(buttonVariants({ variant: isActive ? "secondary" : "ghost" }), isActive ? "" : "text-background")}>List</NavLink>
                <NavLink to='/form' className={({ isActive }) => cn(buttonVariants({ variant: isActive ? "secondary" : "ghost" }), isActive ? "" : "text-background")}>Form</NavLink>
                <ModeToggle />
            </nav>
        </div>
    )
}
