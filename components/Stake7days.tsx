import React from 'react'

const Stake7days = () => {
  return (
    <main className='mt-[40px] '>
      <section className='flex'>
        <div className='space-y-[20px]'>
          <h4 className='text-[20px] text-[#909AA1]'>Lock Period:<span className='font-bold text-white '> 7 Days</span></h4>
          <h4 className='text-[20px] text-[#909AA1]'>Re-locks on registration:<span className='font-bold text-white '> Yes</span></h4>
          <h4 className='text-[20px] text-[#909AA1]'>Early unstake fee:<span className='font-bold text-white '> 23%</span></h4>
          <h4 className='text-[20px] text-[#909AA1]'>Status:<span className='font-bold text-white '> Unlocked</span></h4>
        </div>
        <div className='mx-auto lg:mt-[50px] '>
          <h3 className='lg:text-[23px] text-[#909AA1]  '>APY Rate</h3>
          <h1 className='text-[32px] text-[#69FF77] '>30%</h1>
        </div>
      </section>
    </main>
  )
}

export default Stake7days