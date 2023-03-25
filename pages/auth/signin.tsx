import { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FormEventHandler, useState } from 'react'

const SignIn: NextPage = (props): JSX.Element => {
  const session = useSession()
  const router = useRouter()
  const [userInfo, SetUserInfo] = useState({ email: '', password: '' })
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validar o userInfo
    e.preventDefault()

    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      callbackUrl: '/app'
    })

    console.log(res)
  }

  return (
    <>
      <div className='h-full from-green-400 to-indigo-900 w-full py-8 px-4 bg-[url("/images/signinFundo.jpg")] bg-cover'>
        <div className='flex flex-col items-center justify-center'>
          <img
            src='/images/tradeAdmin.png'
            width='340'
            height='260'
            alt='logo'
          />
          <div className='bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-10 mb-72'>
            <p
              tabIndex={0}
              className='focus:outline-none text-2xl font-extrabold leading-6 text-gray-800'
            >
              Login to your account
            </p>
            <p
              tabIndex={0}
              className='focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500'
            >
              Dont have account?{' '}
              <Link
                href='/auth/signup'
                className='hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer'
              >
                {' '}
                Sign up here
              </Link>
            </p>
            <div className='w-full flex items-center justify-between py-5'>
              <hr className='w-full bg-gray-400  ' />
            </div>
            <form onSubmit={handleSubmit}>
              <div className='mt-3'>
                <label
                  id='email'
                  className='text-sm font-medium leading-none text-gray-800'
                >
                  Email
                </label>
                <input
                  value={userInfo.email}
                  onChange={({ target }) =>
                    SetUserInfo({ ...userInfo, email: target.value })
                  }
                  aria-labelledby='email'
                  type='email'
                  className='bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                />
              </div>
              <div className='mt-6  w-full'>
                <label
                  htmlFor='pass'
                  className='text-sm font-medium leading-none text-gray-800'
                >
                  Password
                </label>
                <div className='relative flex items-center justify-center'>
                  <input
                    value={userInfo.password}
                    onChange={({ target }) =>
                      SetUserInfo({ ...userInfo, password: target.value })
                    }
                    id='pass'
                    type='password'
                    className='bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                  />
                  <div className='absolute right-0 mt-2 mr-3 cursor-pointer'>
                    <img
                      src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg'
                      alt='viewport'
                      width='19'
                      height='19'
                    />
                  </div>
                </div>
              </div>
              <div className='mt-10 mb-2'>
                <input
                  type='submit'
                  role='button'
                  className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'
                  value='Login'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
