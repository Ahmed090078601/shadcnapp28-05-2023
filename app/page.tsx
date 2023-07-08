
import Hero from '@/components/hero/Hero'

import Menu from '@/components/menu'
import Wrapper from '@/components/shared/Wrapper'
import Link from 'next/link'
export default function Home() {
  return (
   <>
   
   <Hero/>
   <Menu/>
   <h1 className="title">
  Read <Link href="/product">this page!</Link>
</h1>
   </>
  )
}
