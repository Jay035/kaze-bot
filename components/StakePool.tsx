import React from 'react'
import StakeDetails from '../app/data.json'
import StakePeriod from './StakePeriod';
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
                  <h4 className='lg:text-[23px] text-[#909AA1] '>Total Stake</h4>
                  <p className='text-[#69FF77] lg:text-[32px] text-[24px]  '>{stake.totalStaked}</p>
                </div>
                <StakePeriod />
              </section>
              <section className='mt-[26px] flex justify-center '>
                <div className='w-[70%]'>
                <div className='mb-[56px] '>
                  <h3 className='font-bold text-[20px] mb-[20px] '>Balance: <span className='text-[#909AA1] font-normal '>{stake.balance}</span></h3>
                  <form className='flex h-[56px] lg:w-[343px] w-[291px] text-[17px] lg:text-[20px] rounded-[10px]  '>
                    <input className='bg-[#181e33] border-[1px] border-[#02121D] pl-[15px] w-[136px] lg:w-[171px] ' placeholder='0.00'/>
                    <p className='my-auto text-[15px] px-[10px]  bg-[#181e33] h-full flex items-center '>MAX</p>
                    <button className='my-auto text-[15px] px-[20px] lg:px-[30px] h-full bg-[#69FF77] text-black font-bold lg:text-[18px] '>Approve</button>
                  </form>
                </div>
                <div className='lg:mb-[20px] '>
                  <h3 className='font-bold text-[20px] mb-[20px] '>Staked: <span className='text-[#909AA1] font-normal '>{stake.totalStaked}</span></h3>
                  <form className='flex h-[56px] lg:w-[343px] w-[291px] text-[17px] lg:text-[20px] rounded-[10px]  '>
                    <input className='bg-[#181e33] border-[1px] border-[#02121D] pl-[15px] w-[136px] lg:w-[171px] ' placeholder='0.00'/>
                    <p className='my-auto text-[15px] px-[10px]  bg-[#181e33] h-full flex items-center '>MAX</p>
                    <button className='my-auto text-[15px] px-[20px] lg:px-[30px] h-full bg-[#0A0F22]  border-[1px] border-[#69FF77] text-[#69FF77] font-bold lg:text-[18px]  '>Approve</button>
                  </form>
                </div>
                </div>
              </section>

              <section className='mt-[56px] text-[21px] '>
                <p className='text-[#909AA1]'><span className='text-[#69FF77] font-bold '>Note:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae expedita error quod! Eaque, laudantium hic.</p>
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