import React from 'react'
import Navbar from '../components/Navbar'
import Joker from '../components/joker.svg'
import Hoppie from '../components/hoppie.svg'
import Pillar from '../components/pillar.svg'
import Balloon from '../components/balloon.svg'
import Horizontal from '../components/horrizontal-pipe.svg'
import '../styles/event_page.css'
import data1 from '../data1.json'
import data2 from '../data2.json'
import data3 from '../data3.json'
import Footer from '../components/Footer'
const EventPage = () => {

  const HandleEventLoad = () => {
    const midLine = document.querySelectorAll('.mid-line')

    midLine.forEach((line) => {
      const height = line.clientHeight
      line.style.marginTop = `-${height / 2}px`
    })

    const pillarBottom = document.getElementById('pillar').getBoundingClientRect().y + document.getElementById('pillar').clientHeight
    const partThree = document.querySelector('.part-three').getBoundingClientRect().y

    document.getElementById('pillar').style.marginTop = `${partThree - pillarBottom}px`
  }


  return (
    <>
    <Navbar/>
    <div className='event-main' onLoad={HandleEventLoad}>
        <div className="part-one">
          <div className="part-one-main">
            <div className="head-1">
              <h1 className='head-1-text'>EVENT<br />SCHEDULE</h1>
              <h1 className='head-2-text'>11<br />APRIL</h1>
            </div>
            <div className="part-one-sub-section">
              <div className="part-one-sub-side-1">
                <img id='hoppie' src={Hoppie} alt="Hoppie" />
                {data1[0].map((creatediv) => {
                  return (
                    <div className='sch-container'>
                      <h1 className='sch-head'>{creatediv.time}</h1>
                      <p className='sch-content'>{creatediv.description}</p>
                    </div>
                  )
                })}
              </div>
              <img id='joker' src={Joker} alt='Joker' />
              <div className="part-one-sub-side-2">
                  {data1[1].map((creatediv) => {
                    return (
                      <div className='sch-container'>
                        <h1 className='sch-head'>{creatediv.time}</h1>
                        <p className='sch-content'>{creatediv.description}</p>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="part-two">
          <img className='mid-line' src={Horizontal} alt="horioznal" />
          <div className="part-two-main">
            <div className="head-2">
              <h1 className='head-2-text-1'>12<br />APRIL</h1>
            </div>
            <div className="part-two-sub-section">
              <div className="part-two-sub-side-1">
                {data2[0].map((creatediv) => {
                  return (
                    <div className='sch-container'>
                      <h1 className='sch-head'>{creatediv.time}</h1>
                      <p className='sch-content'>{creatediv.description}</p>
                    </div>
                  )
                })}
              </div>
              <div className="pillar-part">
                <img id='pillar' src={Pillar} alt="Pillar" />
              </div>
              <div className="part-two-sub-side-2">
                {data2[1].map((creatediv) => {
                  return (
                    <div className='sch-container'>
                      <h1 className='sch-head'>{creatediv.time}</h1>
                      <p className='sch-content'>{creatediv.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="part-three">
          <img className='mid-line' src={Horizontal} alt="horioznal" />
          <div className="part-three-main">
            <div className="head-3">
              <h1 className='head-3-text'>13<br />APRIL</h1>
            </div>
            <div className="part-three-sub-section">
              <div className="part-three-sub-side-1">
                {data3[0].map((creatediv) => {
                  return (
                    <div className='sch-container'>
                      <h1 className='sch-head'>{creatediv.time}</h1>
                      <p className='sch-content'>{creatediv.description}</p>
                    </div>
                  )
                })}
              </div>
              <div className="part-three-sub-side-2">
                {data3[1].map((creatediv) => {
                  return (
                    <div className='sch-container'>
                      <h1 className='sch-head'>{creatediv.time}</h1>
                      <p className='sch-content'>{creatediv.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <img id='balloon' src={Balloon} alt="Balloon" />  
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default EventPage
