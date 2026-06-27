import {Link, NavLink} from 'react-router-dom';
import { LuZap } from "react-icons/lu";
import { FiMoon , FiSun} from "react-icons/fi";
import { useState , useEffect} from 'react';
function Navbar() {
    const [mode, setMode] = useState(false);

    useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.className = "dark";
        setMode(true);
    } else {
        document.body.className = "light";
        setMode(false);
    }
}, []);

    const toggleMode = () => {
    const newMode = !mode;
    setMode(newMode);

    if (newMode) {
        document.body.className = "dark";
        localStorage.setItem("theme", "dark");
    } else {
        document.body.className = "light";
        localStorage.setItem("theme", "light");
    }
};

    return (
        <>
            <nav className='flex justify-between items-center navbar gap-4'  >
            
                <Link to='/' className='Nav-Icon '><LuZap className="logo-icon" /><span className='Nav-icon-name'>SkillPath <span className='GredentColor'>AI
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
                <button className='Nav-button nav-DashBoard'>Dashboard</button>
                <button className='Nav-button nav-Login'>Login</button>
                {/* <button className='Nav-button'>LogOut</button>
                <button className='Nav-button'>Register</button> */}
                <button className='Nav-Mode-Btn' onClick={toggleMode}>{mode ? <FiSun size={30} className='h-5'/> : <FiMoon size={30} className='h-5'/>}</button>
            </div>
        </nav>
        </>
    )
}

export default Navbar;