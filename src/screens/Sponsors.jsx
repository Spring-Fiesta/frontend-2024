import React from 'react'
import Navbar from '../components/Navbar';
import sponsors_img1 from '../images/sponsors_img1.png'
import sponsors_img2 from '../images/sponsors_img2.png'
import sponsors_img3 from '../images/sponsors_img3.png'
import Footer from '../components/Footer';
import canara from '../images/canara.png'
import stockgro_logo from '../images/stockgro_logo.png'
import km_logo from '../images/km_logo.png'
import mey_mey_logo from '../images/mey_mey_logo.png'
import sbi_logo from '../images/sbi_logo.png'
import ease_my_trip from '../images/ease_my_trip_logo.png'
import mother_diary_logo from '../images/mother_diary_logo.png'
import benq from '../images/benq.png'
const Sponsors = () => {
  return (
    <div> 
        <Navbar />
        <div className='overflow-x-hidden min-h-screen overflow-hidden'>
            <div className=' h-[75vh] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-64 mt-10 relative'>
                <div className='flex flex-col justify-start md:ml-12 lg:ml-24 md:justify-start items-center md:items-start relative z-10'>
                    <h1 className='text-white text-4xl md:text-5xl font-bold mb-6 md:mb-8'>
              Title Sponsor 
                    </h1>
                    <div className='h-[200px] w-[300px] md:h-[300px] md:w-[450px] lg:h-[400px] lg:w-[630px]'>
                        <img src={benq} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='absolute inset-0 md:relative md:inset-auto flex justify-end items-center opacity-20 md:opacity-100'>
                    <img src={sponsors_img1} alt="Title Sponsor" className='w-64 md:w-80 lg:w-96 h-auto object-contain' />
                </div>
            </div>

            <div className=' h-[75vh] grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 relative'>
                <div className='absolute inset-0 md:relative md:inset-auto flex justify-start items-center opacity-20 md:opacity-100'>
                    <img src={sponsors_img2} alt="Associate Sponsor" className='w-64 md:w-80 lg:w-96 h-auto object-contain' />
                </div>
                <div className='flex flex-col justify-start md:mr-8 lg:mr-16 md:justify-start items-center md:items-start relative z-10'>
                    <h1 className='text-white text-4xl md:text-5xl font-bold mb-6 md:mb-8 md:mr-5'>
                        Associate Sponsors
                    </h1>
                    <div className='flex flex-wrap flex-row-reverse gap-4 md:gap-8 lg:gap-14 justify-center items-center md:mr-16 lg:mr-32'>
                        <div className=' h-[100px] w-[150px] md:h-[120px] md:w-[200px] lg:h-[150px] lg:w-[250px]'>
                            <img src={sbi_logo} alt="" />
                        </div>
                        <div className=' h-[100px] w-[150px] md:h-[120px] md:w-[200px] lg:h-[150px] lg:w-[250px]'>
                        <img src={canara} alt="" />
                        </div>
                        <div className=' h-[100px] w-[150px] md:h-[60px] mb-14 md:w-[200px] lg:h-[60px] lg:w-[250px]'>
                        <img src={stockgro_logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-[75vh] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20 lg:mt-44 relative'>
                <div className='flex flex-col justify-start md:ml-12 lg:ml-24 md:justify-start items-center md:items-start relative z-10'>
                    <h1 className='text-white text-4xl md:text-5xl font-bold mb-6 md:mb-8'>
                        Sponsors
                    </h1>
                    <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-12 gap-y-6 md:gap-y-10 gap-x-3 relative'>
                        <div className=' h-[100px] w-[150px] md:h-[120px] md:w-[200px] lg:h-[150px] lg:w-[250px]'>
                        <img src={mother_diary_logo} alt="" />
                        </div>
                        <div className=' h-[100px] w-[150px] md:h-[120px] md:w-[200px] lg:h-[150px] lg:w-[250px]'>
                        <img src={km_logo} alt="" />
                        </div>
                        <div className=' h-[60px] w-[150px] md:h-[120px] md:mt-14 lg:mb-10 md:w-[200px] lg:h-[150px] lg:w-[250px]'>
                        <img src={ease_my_trip} alt="" />
                        </div>
                        <div className=' h-[100px] w-[150px] mt-7 lg:mt-16 md:h-[120px] md:w-[200px] lg:h-[150px] lg:w-[250px]'>
                        <img src={mey_mey_logo} alt="" />
                        </div>
                    </div>
                </div>
                <div className='absolute inset-0 md:relative md:inset-auto flex justify-end items-center opacity-20 md:opacity-100 max-sm:mr-10 lg:mr-24 scale-150'>
                    <img src={sponsors_img3} alt="Sponsor" className='w-64 md:w-80 lg:w-96 h-auto object-contain' />
                </div>
            </div>
            <div className="md:mb-20"></div>
            <Footer />
        </div>
    </div>
  )
}

export default Sponsors