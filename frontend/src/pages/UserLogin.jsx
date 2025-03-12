import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useState,useContext } from 'react'
import {UserDataContext} from '../context/UserContext'
import axios from 'axios'


const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const {user ,setUser} = useContext(UserDataContext);

    const submitHandler = async (e)=>{
        e.preventDefault();
        const userData={
            email: email,
            password: password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
        
        if(response.status===200){
            const data = response.data
            
            setUser(data.user)
            localStorage.setItem('token',data.token);
            navigate('/home')
        }
        
        setEmail('');
        setPassword('');
    }
    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img className="w-16 mb-5 rounded-lg" src="data:image/png;base64,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"/>
            <form onSubmit={submitHandler}>
                <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
                <input
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email" 
                placeholder="email@example.com"
                />

                <h3 className='text-lg font-medium mb-2'>Enter password</h3>
                <input
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password" 
                placeholder="password"/>
                
                <button type='submit' className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
            </form>
            <p className='text-center'>New here? <Link to='/signup' className='text-center text-blue-600 '>Create new Account</Link></p>
            </div>
            <div>
                <Link to='/captain-login' className='bg-[#c09a58] flex item-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin
