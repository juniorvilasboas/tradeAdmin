import React, { useState } from 'react'

import Header from 'components/Header'
import Nav from 'components/Menu/Nav'

import { IoHome } from 'react-icons/io5'
import { BsBank2 } from 'react-icons/bs'
import { VscSettings } from 'react-icons/vsc'
import { useGet } from 'hooks/api'
import { useSession } from 'next-auth/react'

interface Props {
  children: React.ReactNode
}
const LayoutApp = ({ children }: Props) => {
  const { data: session } = useSession()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { data: brokers } = useGet(`/api/broker/?userId=${session?.user?.id}`)

  return (
    <main className='bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative'>
      <div className='flex items-start justify-between'>
        <div className='h-screen hidden lg:block shadow-lg relative w-80'>
          <div className='bg-white h-full dark:bg-gray-700'>
            <div className='flex items-center justify-start pt-6 ml-8'>
              <span className='mx-2 font-bold dark:text-white text-sm'>
                <img
                  src='/images/tradeAdmin.png'
                  alt='logo'
                  width='200'
                  height='100'
                />
              </span>
            </div>
            <Nav>
              <span onClick={() => setDropdownOpen(false)}>
                <Nav.Item href='/app' Icon={IoHome}>
                  Home
                </Nav.Item>
              </span>
              <span
                className='float text-right'
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Nav.Item href='/app/broker' Icon={BsBank2}>
                  Broker
                </Nav.Item>
              </span>
              <span onClick={() => setDropdownOpen(false)}>
                <Nav.Item href='/app/settings' Icon={VscSettings}>
                  Settings
                </Nav.Item>
              </span>
            </Nav>
          </div>
        </div>
        <div className='flex flex-col w-full md:space-y-4'>
          <Header />
          <div className='overflow-auto h-screen pb-24 px-4 md:px-6'>
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default LayoutApp
