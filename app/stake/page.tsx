import Navbar from '@/components/Navbar'
import StakeData from '@/components/StakeData'
import React from 'react'

const Stake = () => {
  return (
    <>
    {/* <Navbar /> */}
    <section data-aos="fade-in"
      className="h-[100vh] absolute lg:h-[100vh] w-full relative overflow-x-hidden z-0">
        <div className="h-[355px] lg:h-[500px] video-container overflow-hidden">
        <video loop className="" autoPlay muted>
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className=' flex justify-center items-center text-[50px] absolute top-1/2 lg:top-[50%] 2xl:top-[16%] z-0 -translate-y-[215%] 2xl:translate-y-[150%]  lg:translate-y-[245%] left-[49.99%] -translate-x-1/2  '>
        <div className='relative text-white top-[12%] lg:top-1/2 2xl:translate-y-[4%] -translate-y-[150%] lg:-translate-y-[250%] max-w-[36rem] lg:max-w-[53rem] 2xl:max-w-[80rem] mx-auto'>
        <span className='hero-gradient-text font-extrabold '>
            STAKING
        </span>
        </div>
       

      </div>
      <StakeData />
    </section>
    </>
  )
}

export default Stake