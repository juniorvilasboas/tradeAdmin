import { useGet } from 'hooks/api'
import { useRouter } from 'next/router'

const BrokerIndex = () => {
  const router = useRouter()
  const { data } = useGet(
    router?.query?.brokerId && `/api/broker/${router?.query?.brokerId}`
  )

  const logo = data?.name.split(' ').join('')

  return (
    <>
      <span className='flex'>
        <img src={`/images/brokers/${logo}.png`} alt='Logo' width={40} />
        <h1 className='ml-4 text-4xl font-semibold text-gray-800 dark:text-white'>
          {data && data?.name}
        </h1>
      </span>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default BrokerIndex
