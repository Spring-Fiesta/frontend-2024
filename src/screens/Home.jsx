import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader1 from '../components/Loader1'
// import { SplineEvent } from '@splinetool/react-spline';
const Home = () => {
    const navigate = useNavigate();
    const [client, setClient] = useState(false);
    const [screenLoading, setScreenLoading] = useState(false);

     useEffect(() => {
        const clientWidth = document.documentElement.clientWidth;
        console.log(clientWidth);
        if(clientWidth < 1000){
            // alert("hhghg")
            setClient(true);
            setTimeout(() => {
                navigate('/events')
            },2000)
        }
        else{
            setScreenLoading(true);
            setTimeout(() => {
            setScreenLoading(false);
        }, 8000);
        }
        
        // eslint-disable-next-line
     },[])

    return (
        <div>
            {screenLoading  &&
                <div style={{display:'flex',justifyContent:"center",margin:"22% 0% 0% 0%",color:'whitesmoke'}}>
                    Please wait... awesome things take time.
                </div>
            }
            {!client ? <Spline scene="https://prod.spline.design/z1df8UIGFMTtO57Z/scene.splinecode" /> :
            <div style={{backgroundColor:"grey",width:"100vw",height:"60vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <Loader1 />
                <h3 style={{marginTop:"10px",textAlign:'center'}}>Use your PC for better experience</h3>
                <h3>Redirectng...</h3>
            </div>
            }

        </div>
    );    
}
export default Home;
