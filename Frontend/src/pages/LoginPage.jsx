import '../Styles/LoginPage.css'
import { LuZap } from "react-icons/lu";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Login (){
    const [show , ShowPassword] = useState(false);
    const [Email , setEmail] = useState('');
    const [password , setPassword] = useState("");

    const EmailChange = (e) =>{
        console.log(e)
        setEmail(e.target.value);
     }
    return (
        <>
        <section className="Login-Section">
            <div className="login-Card">
                <div className="Card-Head ">
                    <div className='flex items-center justify-center gap-1'style={{marginBottom:'16px'}}>
                        <LuZap className="logo-icon" style={{fontSize:'20px'}}/> <span className='Nav-icon-name'>SkillPath <span className='Gredent-Color'> AI</span></span>
                    </div> 
                    <h2 className='login-card-Welcome'>Welcome Back</h2> 
                    <p className='section-subtitle' style={{fontSize:'14px'}}>Sign in to continue your learning journey</p>  
                </div>
                <div className=' gap-2 class-login-data'>
                    <form action="" className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                        <label htmlFor='Email' className='Login-label'>Email <span className='text-red-500'>*</span> </label>
                        <input onChange={EmailChange} value={Email} className='Login-Input' type="email" id='Email' placeholder='you@example.com'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="Password" className='Login-label'>Password <span className='text-red-500'>*</span></label>
                            <div className='relative'>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className='Login-Input' type={show ? 'text' : 'password'} id='Password' placeholder='Your password !' />
                            <button style={{color:"#5a5a7ac3"}} type='button' onClick={(e) => ShowPassword(!show)} className=' absolute right-3 top-1/2 -translate-y-1/2'>
                                {!show ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                            </button>
                            </div>
                           
                        </div>
                        <button className='Login-Button'>Sign In</button>
                    </form>
                    
                </div>
                <p className='Login-Create-Btn'>Don't have an account? 
                    <Link to={'/Sinup'} style={{color:'#7a72fa'}}>Create one free</Link>
                    </p>
            </div>
        </section>
        </>
    )
}

export default Login;