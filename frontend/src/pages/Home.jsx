import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div >
            <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1572239780645-203c467a49b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 w-full bg-red-300 justify-between flex flex-col'>
                <img className="w-16 ml-6 rounded-lg" src="data:image/png;base64,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"/>
                <div className='bg-white pb-7 py-4 px-4'>
                    <h1 className='text-2xl font-bold'> Get Started with Zoober</h1>
                    <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
