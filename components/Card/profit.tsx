interface Props {
  type: string
  quant: any
}
const Profit = ({ type, quant }: Props) => {
  return (
    <div className='w-full md:w-6/12'>
      <div className='shadow-lg w-1/2 bg-white dark:bg-gray-700 relative overflow-hidden'>
        <a href='#' className='w-full h-full block'>
          <div className='flex items-center justify-between px-4 py-6 space-x-4'>
            <div className='flex items-center'>
              <span className='rounded-full relative p-2'>
                <img src={`/images/${type}.png`} alt='Gain' width={40} />
              </span>
              <p className='text-sm text-gray-700 dark:text-white ml-2 font-semibold border-b border-gray-200'>
                Gains
              </p>
            </div>
            <div className='border-b border-gray-200 mt-6 md:mt-0 text-black dark:text-white font-bold text-xl'>
              {quant}
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Profit
