import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CorporateCrime = () => {
  const BACKEND = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const [currques, setCurrQuestion] = useState({});
  const [answer, setAnswer] = useState('');
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [content, setContent] = useState(0);

  const fetchQA = async () => {
    const response = await fetch(`${BACKEND}/api/questions/`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include"
    });
    const data = await response.json();
    setCurrQuestion(data);
  };

  useEffect(() => {

    if (!showLeaderboard) {
      fetchQA();
      const interval = setInterval(fetchQA, 10000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showLeaderboard]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(`${BACKEND}/api/leaderboard`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: "include"
          });
        const data = await response.json();
        setLeaderboardData(data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
        // Fallback dummy data
        setLeaderboardData([
          { rank: 1, name: 'Player 1', score: 1000 },
          { rank: 2, name: 'Player 2', score: 850 },
          { rank: 3, name: 'Player 3', score: 720 },
          { rank: 4, name: 'Player 4', score: 650 },
          { rank: 5, name: 'Player 5', score: 590 },
        ]);
      }
    };

    if (showLeaderboard) {
      fetchLeaderboard();
    }
  }, [BACKEND, showLeaderboard]);

  useEffect(() => {
    const fetchComp = async () => {
      try {
        const response = await fetch(`${BACKEND}/api/teams/check`, {
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: "include"
        });
        const data = await response.json();
        if (data.name) {
          setContent(1);
        } else if (localStorage.getItem("token")) {
          setContent(2);
        } else {
          setContent(3);
        }
      } catch (error) {
        console.error('Error fetching checkComp data:', error);
      }
    };
    fetchComp();
    // eslint-disable-next-line
  }, []);

  console.log(content);
  const toggleView = () => {
    setShowLeaderboard(!showLeaderboard);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    // Clear HttpOnly cookies Also
    fetch(`${BACKEND}/api/teams/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Logout successful');
        } else {
          console.error('Logout failed');
        }
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });

    navigate('/');
  }

  const formatTimeDifference = (timestampstr) => {
    const timestamp = new Date(timestampstr);

    const seconds = Math.floor((timestamp / 1000) % 60);
    const minutes = Math.floor((timestamp / (1000 * 60)) % 60);
    const hours = Math.floor((timestamp / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m ${seconds}s`;
  }

  console.log(answer);
  const handleNextQues = async () => {
    console.log("hello world");
    const val = answer.toLowerCase();
    const response = await fetch(`${BACKEND}/api/questions/check-answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
      body: JSON.stringify({ userAnswer: val, questionId: currques.sequenceNumber })
    });
    const data = await response.json();
    console.log("hello world", data);
    if (data.message) {
      alert(data.message);
      setAnswer('');
      fetchQA();
    } else {
      alert("Wrong Answer! Try Again.");
    }
  }


  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Responsive Navbar */}
      <div className="flex justify-between items-center p-4 w-full z-50 relative">
        <a href="/" className="px-4 py-2 sm:px-6 sm:py-3 bg-red-900 text-white font-bold rounded hover:bg-red-700 transition-colors duration-300 shadow-lg text-sm sm:text-base">Home</a>

        {content === 1 && <button
          onClick={toggleView}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-red-900 text-white font-bold rounded hover:bg-red-700 transition-colors duration-300 shadow-lg text-sm sm:text-base"
        >
          {showLeaderboard ? 'Questions' : 'Leaderboard'}
        </button>}

        {localStorage.getItem("token") && <button className="px-4 py-2 sm:px-6 sm:py-3 bg-red-900 text-white font-bold rounded hover:bg-red-700 transition-colors duration-300 shadow-lg text-sm sm:text-base" onClick={handleLogout}>Logout</button>}
      </div>

      {/* Blood drips - responsive */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`drip-${i}`}
          className="absolute blood-drip hidden sm:block"
          style={{
            left: `${(i * 16) + Math.random() * 8}%`,
            height: `${Math.random() * 120 + 80}px`,
            width: `${Math.random() * 15 + 5}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 8}s`
          }}
        ></div>
      ))}

      {/* Mobile drips - fewer for performance */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`mobile-drip-${i}`}
          className="absolute blood-drip sm:hidden"
          style={{
            left: `${(i * 25) + Math.random() * 8}%`,
            height: `${Math.random() * 80 + 40}px`,
            width: `${Math.random() * 10 + 3}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 8}s`
          }}
        ></div>
      ))}

      {/* Blood splatters - responsive */}
      {[...Array(showLeaderboard ? 5 : 10)].map((_, i) => (
        <div
          key={`splatter-${i}`}
          className="absolute blood-splatter hidden sm:block"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`,
            opacity: Math.random() * 0.7 + 0.3
          }}
        ></div>
      ))}

      {/* Blood cells - fewer on mobile */}
      {[...Array(showLeaderboard ? 10 : 20)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full blood-cell ${i > 10 ? 'hidden sm:block' : ''}`}
          style={{
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            background: `radial-gradient(ellipse at center, #a50404 0%, #6b0101 100%)`
          }}
        ></div>
      ))}

      {/* Main content section - toggle between QA and Leaderboard */}
      <div className="flex flex-col items-center min-h-screen relative z-10 px-4">
        {showLeaderboard ? (
          <div className="bg-black bg-opacity-70 p-4 sm:p-10 rounded-lg border border-red-900 shadow-lg shadow-red-900/50 w-full max-w-4xl">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-red-600 text-center">Leaderboard</h1>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-lg">
                <thead>
                  <tr className="border-b border-red-800">
                    <th className="py-2 px-1 sm:px-4 text-left">Rank</th>
                    <th className="py-2 px-1 sm:px-4 text-left">Player</th>
                    <th className="py-2 px-1 sm:px-4 text-right">Score</th>
                    <th className="py-2 px-1 sm:px-4 text-right">TimeStamp</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.length ? (leaderboardData.map((player, index) => (
                    <tr key={index} className="border-b border-red-900/30 hover:bg-red-900/20">
                      <td className="py-2 px-1 sm:px-4">{index + 1}</td>
                      <td className="py-2 px-1 sm:px-4">{player.teamId?.name}</td>
                      <td className="py-2 px-1 sm:px-4 text-right">{player.score}</td>
                      <td className="py-2 px-1 sm:px-4 text-right">{formatTimeDifference(player.timestamp)}</td>
                    </tr>
                  ))) : (<div></div>)}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-black bg-opacity-70 p-4 sm:p-10 rounded-lg border border-red-900 shadow-lg shadow-red-900/50 w-full max-w-4xl">
            {content === 3 ?
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-red-600">Please Login in First</h1>
                <div className="flex justify-center items-center mt-4">
                  <Button variant='outlined' color='error' className="text-red-500" onClick={() => navigate("/login")}>Login</Button>
                </div>
              </div>
              : content === 2 ?
                <div>
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-red-600">The competition is yet to begin!</h1>
                </div>
                : <div className='w-full flex flex-col items-center'>
                  {currques.sequenceNumber <= 6 ?
                    <>
                      <p className=' max-md:text-base'>Location of Question : {currques.sequenceNumber}</p>
                      <img src={currques.destinationPic} alt='abhi wali' className="text-2xl sm:text-4xl font-bold mb-4 text-red-600 " />
                      <div className="w-full flex justify-center items-center flex-col">
                        <TextField
                          id="answer-input"
                          label="Your Answer"
                          variant="outlined"
                          value={answer}
                          onChange={(e) => setAnswer(e.target.value)}
                          sx={{
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                              color: 'red',
                              '& fieldset': {
                                borderColor: '#dc2626',
                              },
                              '&:hover fieldset': {
                                borderColor: '#cc0000',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#ff0000',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: '#dc2626',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: '#ff0000',
                            },
                          }}
                        />
                        <Button variant='outlined' color='error' className="text-red-600 mt-5 px-5 py-2 font-semibold" onClick={handleNextQues}>Submit Answer</Button>
                      </div>
                    </>
                   : 
                   <div>Completed!</div>}
                </div>}
          </div>
        )}
      </div>

      {/* Inline styles for blood animations */}
      <style>
        {`
          .blood-drip {
            position: absolute;
            top: 0;
            background: linear-gradient(to bottom, #8a0303, #560d0d);
            border-radius: 0 0 50% 50%;
            animation: drip 10s infinite;
            opacity: 0.8;
            filter: blur(1px);
            transform-origin: top center;
          }
          
          .blood-splatter {
            width: 80px;
            height: 80px;
            background-image: radial-gradient(ellipse at center, #8a0303 0%, #560d0d 70%, transparent 100%);
            filter: blur(1px);
            border-radius: 50%;
            box-shadow: 0 0 8px 2px rgba(139, 0, 0, 0.3);
          }
          
          .blood-cell {
            animation: float 15s infinite ease-in-out;
            filter: blur(2px);
          }
          
          @keyframes drip {
            0% {
              height: 0;
              opacity: 0.9;
            }
            30% {
              opacity: 0.8;
            }
            80% {
              height: 100%;
              opacity: 0.7;
            }
            100% {
              height: 100%;
              opacity: 0;
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            25% {
              transform: translateY(20px) translateX(10px);
            }
            50% {
              transform: translateY(0) translateX(20px);
            }
            75% {
              transform: translateY(-20px) translateX(10px);
            }
          }

          @media (max-width: 640px) {
            .blood-splatter {
              width: 50px;
              height: 50px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CorporateCrime;