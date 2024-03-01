import Navbar from '@/components/Navbar'
import React from 'react'

const Stake = () => {
  return (
    <>
    {/* <Navbar /> */}
    <section data-aos="fade-in"
      className="h-[355px] absolute lg:h-[100vh] w-full relative overflow-x-hidden z-0">
        <div className="h-screen lg:h-[500px] video-container overflow-hidden">
        <video loop className="" autoPlay muted>
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className=' flex justify-center items-center text-[50px] absolute top-1/2 z-0 -translate-y-1/2 left-[49.99%] -translate-x-1/2  '>
        <div className='relative text-white top-1/2 -translate-y-[15%] max-w-[36rem] lg:max-w-[53rem] 2xl:max-w-[80rem] mx-auto'>
        <span className='hero-gradient-text font-extrabold '>
            STAKING
        </span>
        </div>
       

      </div>

    </section>
    </>
  )
}

export default Stake