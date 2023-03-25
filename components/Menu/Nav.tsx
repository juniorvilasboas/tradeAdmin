import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface Nav {
  children: React.ReactNode
}

const Nav = ({ children }: Nav) => {
  return (
    <nav className='mt-6'>
      <div>{children}</div>
    </nav>
  )
}

interface Item {
  children: React.ReactNode
  href: string
  Icon?: any
}

const NavItem = ({ children, href, Icon }: Item) => {
  const router = useRouter()
  const { pathname } = router
  let route = pathname.split('/').slice(2)[0]
  if (route === undefined) {
    route = 'app'
  }
  const route_href = href.split('/').slice(-1)[0]
  const selected = route === route_href

  console.log('Route: ', route)
  console.log('Route_HREF: ', route_href)

  return (
    <Link
      href={href}
      className={
        selected
          ? 'w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500'
          : 'w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-white'
      }
    >
      <span className='text-left'>{Icon && <Icon />}</span>
      <span className='mx-2 text-sm font-normal'>{children}</span>
    </Link>
  )
}

Nav.Item = NavItem

export default Nav
