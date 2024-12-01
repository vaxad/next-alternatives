import { Outlet } from '@remix-run/react'
import React from 'react'

export default function list() {
    return (
        <div className='p-6 max-w-screen-xl mx-auto py-12 md:py-24'>
            <h1 className='text-2xl font-bold'>Posts</h1>
            <Outlet />
        </div>
    )
}
