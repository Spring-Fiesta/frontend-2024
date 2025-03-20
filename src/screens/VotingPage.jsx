import React, { useEffect, useState } from 'react';
import '../styles/VotingPage.css';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import party_pooper1 from '../components/partyPooper1.svg';
import party_pooper2 from '../components/partyPooper2.svg';
import sprinklers1 from '../components/sprinklers1.svg';
import sprinklers2 from '../components/sprinklers2.svg';
import circus_tent from '../components/circusTent.svg';
import { Link, useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import Footer from '../components/Footer';


function VotingPage() {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  console.log(data)

  const fetchData = async () => {
    const response = await fetch('https://spring-fiesta-2k24-backend.onrender.com/candidate', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const val = await response.json()
    setData(val)
    console.log(val)
    data.sort((a, b) => b.count - a.count)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  const UpdateLike = async (candi) => {

    if (localStorage.getItem('token')) {
      const decodedId = decodeToken(localStorage.getItem('token'))
      if (!decodedId.isVoted) {
        const response = await fetch(`https://spring-fiesta-2k24-backend.onrender.com/candidate/${candi.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('token')
          },
        })
        const val = await response.json()
        if (val.success) {
          localStorage.setItem('token', val.token)
          fetchData()
          alert('Voted Successfully')

        } else {
          alert('You have already voted')
        }
      } else {
        alert('You have already voted')
      }
    } else {
      navigate('/register')
    }
  }
  return (
    <div>
      <Navbar />
      <div className='main-body'>
        <div className="title">
          <p>VOTING PAGE</p>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <Link to="/voting"><FontAwesomeIcon icon={faSearch} className="search-icon" /></Link>
        </div>
        <img src={sprinklers1} className="sprinklers1" alt="sprinklers1" />
        <img src={sprinklers2} className="sprinklers2" alt="sprinklers2" />
        <div className="box">
          {data.map((candidate, ind) => {
            return (
              <div className="box-container" key={ind}>
                <div className="main-image">
                  <img src={`/images/${candidate.name}.svg`} alt="image1" />
                </div>
                <div className='container-details'>
                  <text className='name'>{candidate.name}</text>
                  <div className='voting-count'>
                    <button className='like-btn' onClick={() => UpdateLike(candidate)} >
                      <div className="like-img">
                        <img src='/images/heart.svg' alt="Like" />
                      </div>
                      <h4>{candidate.count}</h4>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <img src={party_pooper1} className="party-pooper1" alt="party-pooper1" />
        <img src={circus_tent} className="circus" alt="circus" />
        <img src={party_pooper2} className="party-pooper2" alt="party-pooper2" />
      </div>
      <Footer/>
    </div>
  );
}
export default VotingPage;