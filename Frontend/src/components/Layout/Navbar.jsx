import {Link, NavLink} from 'react-router-dom';
import { LuZap } from "react-icons/lu";
import { FiMoon , FiSun} from "react-icons/fi";
import {useContext } from 'react';
import {ThemeContext } from '../../Context/ThemeProvider';
function Navbar() {
    const {mode , toggleMode} = useContext(ThemeContext);
    return (
        <>
            <nav className='flex justify-between items-center navbar gap-4'  >
            
                <Link to='/' className='Nav-Icon '><LuZap className="logo-icon" /><span className='Nav-icon-name'>SkillPath <span className='Gredent-Color'>AI
                </span></span></Link>
            <div className='NavMenu'>
                <ul className='flex gap-4'>
                    <li>
                        <NavLink  to='/' className={({isActive}) => `nav-link ${isActive ? "active-link" : ""}`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({isActive}) => `nav-link ${isActive ? "active-link" : ""}`}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='resources' className={({isActive}) => `nav-link ${isActive ? "active-link" : ""}`}>Resources</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex gap-4'>
                <NavLink to={'/Dashboard'} className='Nav-button nav-DashBoard'>Dashboard</NavLink>
                <NavLink to={'/Login'} className='Nav-button nav-Login'>Login</NavLink>
                {/* <button className='Nav-button'>LogOut</button>
                <button className='Nav-button'>Register</button> */}
                <button className='Nav-Mode-Btn' onClick={toggleMode}>{mode ? <FiSun size={30} className='h-5'/> : <FiMoon size={30} className='h-5'/>}</button>
            </div>
        </nav>
        </>
    )
}

export default Navbar;