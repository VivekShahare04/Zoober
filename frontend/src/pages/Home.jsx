import React,{useState,useRef} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'

const Home = () => {
  const[pickup,setPickup] = useState('');
  const[destination,setDestination] = useState('');
  const[panel,setPanel] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const[vehiclePanel,setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);

  const submitHandler = (e)=>{
    e.preventDefault()
  }

  useGSAP(function(){
    if(panel){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:24,
        opacity:1
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0,
        opacity:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panel])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanel])
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className="w-16 absolute mt-4 ml-6" src='data:image/png;base64,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'/>

      <div className='h-screen w-screen '>
        <img className="h-full w-full object-cover" src='data:image/jpeg;base64,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'/>
      </div>
      <div className='flex flex-col justify-end top-0 h-screen w-full absolute'>
        <div className='rounded h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanel(false)
          }} className='absolute opacity-0 text-2xl right-6 top-6'>
          <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className='font-semibold text-2xl'>Find the trip</h4>
          <form onSubmit={(e)=>
            submitHandler(e)
            } className='flex flex-col'>

            <div className='line absolute bg-gray-800 h-16 w-1 top-[45%] left-10 rounded-full'></div>

            <input onClick={()=>setPanel(true)} value = {pickup} onChange={(e)=>setPickup(e.target.value)}
            className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-5 w-full'
            type='text' 
            placeholder='Enter pickup Location' />

            <input 
            onClick={()=>
              setPanel(true)
            }
            value = {destination}
            onChange={(e)=>
              setDestination(e.target.value)
            }
            className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3 w-full'
            type='text' 
            placeholder='Droping point' />
            
          </form>
        </div>

        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel setPanel={setPanel} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed bottom-0 translate-y-full bg-white w-full z-10 px-3 py-10 pt-14'>
        
        <VehiclePanel setVehiclePanel={setVehiclePanel}/>
      </div>
    </div>
  )
}

export default Home;
