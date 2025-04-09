import React from 'react'
import iiit_logo from '../images/iiit_surat.png'
import spring from '../images/Spring.png'
import {Link} from 'react-router-dom'
import Horizontal from '../components/horrizontal-pipe.svg'


const Footer = () => {

  return (
    <div className='relative'>
      <img id='foot-line' className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full' src={Horizontal} alt="horizontal" />
        <div className='overflow-x-hidden bg-black'>

         <div className='flex justify-between items-center h-full mt-10 py-4 md:py-12 md:px-6'>
            <div className='flex flex-col'>
                <div className='md:flex md:gap-4 ml-6 mt-2 md:mt-16  md:ml-20'>
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

            <div className='flex justify-between md:justify-center items-center md:gap-14 text-white mt-2 lg:mr-20 md:mt-0 scale-75 md:scale-100 '>
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
                   <Link to="/">
                    <div className='font-normal'>Home</div>
                    
                   </Link>
                   <Link to="/events">
                    <div className='font-normal'>Events</div>
                    
                   </Link>
                   <Link to="/core-team">
                    <div className='font-normal'>Core Team</div>
                   </Link>
                   <Link to="/sponsors">
                    <div className='font-normal'>Sponsors</div>
                   </Link>
                   <Link to="/gallery">
                    <div className='font-normal'>Gallery</div>
                   </Link>

                    
                </div> 
                
           
            </div>  
            
             
         </div>
         <div className='text-white text-center md:hidden font-normal text-base pb-10'>
                &copy; 2025 spring fiesta
                </div>
    </div>
            </div>

  )
}

export default Footer