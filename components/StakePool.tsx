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

const StakePool = () => {

  const stakes: Stake[] = StakeDetails; 

  return (
    <main className='flex justify-center mt-[30px]'>
      <div className='w-full'>
        <div className='bg-[#0A0F22] rounded-[5px] w-[90%] mx-auto lg:mx-[0px] lg:w-full '>
          <div className='lg:w-full w-[95%] lg:px-[40px] px-[20px] lg:py-[30px] py-[10px] '>
            <h3 className='lg:text-[45px] text-[26px] font-bold '>Participate in Kaze Stake</h3>
            </div>
        </div>
        {stakes.map((stake, index) => (
        <div className='bg-[#0A0F22] w-[90%] mx-auto lg:mx-[0px] lg:w-full rounded-[5px] mt-[5px] ' key={index}>
          <div className='lg:w-full w-[95%] lg:px-[40px] px-[20px] lg:py-[30px] py-[10px] '>
            <div className='grid lg:grid-cols-2 grid-cols-1 '>
              <section>
                <div className='lg:mb-[40px] mb-[20px] '>
                  <h4 className='lg:text-[23px] text-[#909AA1] '>Total Stack</h4>
                  <p className='text-[#69FF77] lg:text-[32px] text-[24px]  '>{stake.totalStaked}</p>
                </div>

              </section>
              <section>
                <div>
                  <h3 className='font-bold '>Balance: <span className='text-[#909AA1] font-normal '>{stake.balance}</span></h3>
                </div>
              </section>

            </div>

          </div>
        </div>
         ))}
        </div>
    </main>
  )
}

export default StakePool