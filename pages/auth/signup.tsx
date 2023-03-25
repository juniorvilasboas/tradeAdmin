import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { post } from 'lib/fetch'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import Link from 'next/link'

const userSchema = yup
  .object({
    firstName: yup.string().required('Your first name'),
    lastName: yup.string().required('Your last name'),
    email: yup.string().required('Your email address'),
    password: yup.string().required('Your secure password')
  })
  .required()

interface NewUserForm {
  firstName: string
  lastName: string
  email: string
  password: string
}

const SignUp = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<NewUserForm>({
    resolver: yupResolver(userSchema)
  })

  const onSubmit: SubmitHandler<NewUserForm> = async (inputs) => {
    const data = await post({
      url: '/api/user',
      data: inputs
    })
    router.push(`/auth/signin`)
  }

  return (
    <>
      <div className='h-full w-full from-green-400 to-indigo-900 py-8 px-4 bg-[url("/images/signinFundo.jpg")] bg-cover'>
        <div className='flex flex-col items-center justify-center'>
          <img
            src='/images/tradeAdmin.png'
            width='340'
            height='260'
            alt='logo'
          />
          <div className='bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-10 mb-44'>
            <p
              tabIndex={0}
              className='focus:outline-none text-2xl font-extrabold leading-6 text-gray-800'
            >
              Register for a free account
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid grid-cols-2 gap-2 mt-10'>
                <div>
                  <label
                    id='firstName'
                    className='text-sm font-medium leading-none text-gray-800'
                  >
                    First Name
                  </label>
                  <input
                    aria-labelledby='firstName'
                    type='text'
                    className='bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                    {...register('firstName')}
                  />
                </div>
                <div>
                  <label
                    id='lastName'
                    className='text-sm font-medium leading-none text-gray-800'
                  >
                    Last Name
                  </label>
                  <input
                    aria-labelledby='lastName'
                    type='text'
                    className='bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                    {...register('lastName')}
                  />
                </div>
              </div>
              <div className='mt-6'>
                <label
                  id='email'
                  className='text-sm font-medium leading-none text-gray-800'
                >
                  Email
                </label>
                <input
                  aria-labelledby='email'
                  type='email'
                  className='bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                  {...register('email')}
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
                    id='pass'
                    type='password'
                    className='bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                    {...register('password')}
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
              <div className='mt-14'>
                <input
                  type='submit'
                  role='button'
                  className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'
                  value='Sign Up'
                />
              </div>
            </form>
            <p className='text-center my-4'>
              <Link
                href='/auth/signin'
                className='text-grey-dark text-sm no-underline hover:text-grey-darker'
              >
                I already have an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
