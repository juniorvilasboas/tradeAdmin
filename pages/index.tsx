import type { NextPage } from 'next'
import { signIn } from 'next-auth/react'

const Home: NextPage = () => {
  return (
    <>
      <button
        onClick={() => {
          signIn()
        }}
      >
        Login
      </button>
    </>
  )
}

export default Home
