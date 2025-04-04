import React from 'react'
import iiit_logo from '../images/iiit_surat.png'
import spring from '../images/Spring.png'
const Footer = () => {
  return (
    <div className=' bg-black'>
         <div className='flex padding-bottom:10vw justify-start md:justify-between items-center h-full py-4 md:py-5 md:px-8 '>
            <div className='flex flex-col'>
                <div className='md:flex md:gap-4 mt-2 md:mt-16  md:ml-20'>
                    <div className='w-20 md:w-28 scale-75 md:scale-100'>
                        <img src={iiit_logo} alt="IIIT Surat Logo" className='w-full h-auto' />
                    </div>
                    <div className='w-20 md:w-44 scale-90 md:scale-100'>
                        <img src={spring} alt="Spring Logo" className='w-full h-auto' />
                    </div>
                </div>
                <div className='text-white hidden md:block text-xs md:text-lg font-normal mt-1 md:mt-4 md:ml-20'>
                    &copy; 2025 spring fiesta
                </div>
            </div>

            <div className='flex justify-start md:justify-center items-center md:gap-14 text-white mt-2 md:mt-0 scale-75 md:scale-100 '>
                    <div className='text-xs md:text-base scale-90 md:scale-100'>
                    <div className='text-base md:text-xl font-normal'>Contact</div>
                    <div className='mt-1 md:mt-3 text-xs md:text-base font-normal'>Indian Institute of information</div>
                    <div className='text-xs md:text-base font-normal'>technology</div>
                    <div className='text-xs md:text-base font-normal'>Kholvad Campus,</div>
                    <div className='text-xs md:text-base font-normal'>Kamrej, Surat . 394190</div>
                    <div className='text-xs md:text-base font-normal'>Gujarat</div>
                    <div className='text-xs md:text-base font-normal'>Email:springfiesta@iiitsurat.ac.in</div>
                </div>

                <div className='flex flex-col gap-2 md:gap-8 text-xs md:text-base max-sm:scale-110'>
                    <div className='font-normal'>Home</div>
                    <div className='font-normal'>Events</div>
                    <div className='font-normal'>Core Team</div>
                    <div className='font-normal'>Gallery</div>
                    <div className='font-normal'>Sponsors</div>

                    
                </div> 
                
           
            </div>  
            
             
         </div>
         <div className='text-white text-center md:hidden font-normal text-base pb-10'>
                &copy; 2025 spring fiesta
                </div>
    </div>
  )
}

export default Footer