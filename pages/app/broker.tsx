import Card from 'components/Card/broker'
import { useGet } from 'hooks/api'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const AppBroker = () => {
  const { data: session } = useSession()
  const { data: brokers } = useGet(`/api/broker/?userId=${session?.user?.id}`)

  return (
    <>
      <div className='flex justify-end space-x-2'>
        <button
          type='button'
          className='inline-block rounded bg-success px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]'
        >
          Adicionar Broker
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-4'>
        {brokers &&
          brokers.map((broker: any) => (
            <Link href={'/app/broker/' + broker.id}>
              <Card
                key={broker.id}
                name={broker.name}
                logo={broker.name.split(' ').join('')}
                initialCapital={broker.initialCapital}
                currentCapital={broker.currentCapital}
              />
            </Link>
          ))}
      </div>
    </>
  )
}

export default AppBroker
