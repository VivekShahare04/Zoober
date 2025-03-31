import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const[otp,setOtp] = useState('');
    const SubmitHandler=(e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setShowRidePopUpPanel(false);
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Looking for Confirmation!</h3>
            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-12' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    <h2 className='text-lg font-medium'></h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>New laxmi Nagar</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>coffee</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹200 </h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='mt-6 '>
                    <form onSubmit={(e) => {
                        SubmitHandler(e);
                    }}>
                        <input value={otp} onChange={(e) => setOtp(e.target.value)} type='text' placeholder='Enter OTP' className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg mt-3 w-full mb-5 border-2'/>

                    <div className='flex justify-between gap-10 mt-8'>
                    <Link to='/captain-riding' className=' bg-green-600 w-full text-white font-semibold p-2 px-10 rounded-lg'>Confirm</Link>

                    <button onClick={() => {
                        props.setShowConfirmRidePopUp(false);
                        props.setShowRidePopUpPanel(false);

                    }} className='w-full bg-red-700 text-white font-semibold p-2 px-10 rounded-lg '>Cancel</button>
                    
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp
