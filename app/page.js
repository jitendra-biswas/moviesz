"use client"

import React, { useState } from 'react'
import Nav from '@/app/components/Nav'
import Hero from '@/app/components/Hero'

const page = () => {
  const [searchTerm, setSearchTerm] = useState("movie");
  return (
    <div className='w-full min-h-screen bg-[#191621] px-20'>
      <Nav setSearchTerm={setSearchTerm} />
      <Hero searchTerm={searchTerm} />
    </div>
  )
}

export default page
