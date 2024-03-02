import React from 'react'
import StakeDetails from '../app/data.json'

interface Stake {
  totalLocked: string;
  NoStaker: number;
  totalStaked: string;
  lockPeriod: string;
  earlyUnstakeFee: string;
  status: string;
  kazeBot: string;
  balance: string;
  kaze: string
}
const StakeData = () => {

  const stakes: Stake[] = StakeDetails;

  return (
    <>

      <main className='flex justify-center '>
        <div className='text-white  2xl:max-w-[80rem] w-full my-[50px] '>
          <div>
            {stakes.map((stake, index) => (
              <section key={index} className='grid 2xl:grid-cols-3 grid-cols-1 space-y-[30px] lg:space-y-[0px] '>
                <div className='bg-[#0A0F22] p-[40px] rounded-[5px] w-[90%] mx-auto lg:mx-[0px] '>
                  <h3 className='lg:text-[45px] text-[32px]  '>{stake.totalLocked}</h3>
                  <p className='lg:text-[23px] text-[#909AA1] '>Total Value Locked</p>
                </div>
                <div className='bg-[#0A0F22] p-[40px] rounded-[5px] w-[90%] mx-auto lg:mx-[0px] '>
                  <h3 className='lg:text-[45px] text-[32px]  '>{stake.kaze}</h3>
                  <p className='lg:text-[23px] text-[#909AA1] '>KAZE</p>
                </div>
                <div className='bg-[#0A0F22] p-[40px] rounded-[5px] w-[90%] mx-auto lg:mx-[0px] '>
                  <h3 className='lg:text-[45px] text-[32px]  '>{stake.NoStaker}</h3>
                  <p className='lg:text-[23px] text-[#909AA1] '>Number of Stakers</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default StakeData