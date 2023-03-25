import React from 'react'
import Data from '../Data'

let dollarUS = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

interface Props {
  name: string
  logo: string
  initialCapital: any
  currentCapital: any
}

const Card = ({ name, logo, initialCapital, currentCapital }: Props) => {
  let lucro = currentCapital - initialCapital
  let perct = (lucro / initialCapital) * 100
  let seta = lucro > 0
  return (
    <div className='w-full'>
      <div className='shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative'>
        <p className='text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200'>
          <span className='flex text-left md:text-sm items-center'>
            <img
              src={`/images/brokers/${logo}.png`}
              alt={name}
              className='mr-4 w-7 md:w-10'
            />
            {name}
          </span>
        </p>
        <div className='flex items-end space-x-2 my-6'>
          <p className='text-4xl lg:text-5xl text-black dark:text-white font-bold'>
            {dollarUS.format(currentCapital)}
          </p>
          <span
            className={
              seta
                ? 'text-green-500 text-xl font-bold flex items-center'
                : 'text-red-500 text-xl font-bold flex items-center'
            }
          >
            {seta ? (
              <svg
                width={20}
                fill='currentColor'
                height={20}
                className='h-3'
                viewBox='0 0 1792 1792'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z'></path>
              </svg>
            ) : (
              <svg
                width={20}
                fill='currentColor'
                height={20}
                className='h-3 rotate-180 transform'
                viewBox='0 0 1792 1792'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z'></path>
              </svg>
            )}
            {perct}%
          </span>
        </div>
        <div className='dark:text-white'>
          <div className='flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200'>
            <p>Capital Inicial {Data()}</p>
            <div className='flex items-end text-xs'>
              {dollarUS.format(initialCapital)}
            </div>
          </div>
          <div className='flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200'>
            <p>Lucro</p>
            <div className='flex items-end text-xs'>
              {dollarUS.format(lucro)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
