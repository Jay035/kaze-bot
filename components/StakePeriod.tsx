"use client"
import { useState } from 'react'
import Stake7days from './Stake7days';
import Stake14days from './Stake14days';

const StakePeriod = () => {

    const [activeTab, setActiveTab] = useState('student');
    const handleTabClick = (tab: any) => {
         setActiveTab(tab);
        };

        const renderTabContent = () => {
         switch (activeTab) {
             case 'day7':
                 return <Stake7days />;
             case 'day14':
                 return <Stake14days />;
             default:
                 return null;
         }
     }
        
  return (
    <>
    <main >
        <section className='font-bold text-[18px] space-x-[20px] '>
            <button className='w-[94.6px] h-[52px] rounded-[5px] border-[1px] border-[#69FF77]  ' onClick={() => handleTabClick('day7')} style={{backgroundColor: activeTab === 'student' ? '#00B3D1' : ''}} >7 DAYS</button>
            <button className='w-[94.6px] h-[52px] rounded-[5px] border-[1px] border-[#69FF77]  ' onClick={() => handleTabClick('day14')}>14 DAYS</button>
            <button className='w-[94.6px] h-[52px] rounded-[5px] border-[1px] border-[#69FF77]  '>30 DAYS</button>
            <button className='w-[94.6px] h-[52px] rounded-[5px] border-[1px] border-[#69FF77]  '>60 DAYS</button>
        </section>
        {renderTabContent()}
    </main>
    </>
  )
}

export default StakePeriod