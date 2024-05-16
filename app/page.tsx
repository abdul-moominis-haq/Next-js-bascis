import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
export default function Home() {
  return (
    <main>
      <h1 className='text-center bg-green-950 text-gray-100 text-3xl '>NextJS Demo</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      
    </main>
  )
}
