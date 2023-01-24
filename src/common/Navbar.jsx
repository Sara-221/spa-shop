import {NavLink, useNavigate} from 'react-router-dom'
import './Navbar.css'


export const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/login',{
            replace:true
        })
    }

  return (
    <header className='container-fluid navColor'>
        <nav className='navbar navbar-expand-lg-bg-transparent'>
            <div className={`container-fluid justify-content-between`}>
                <div>
                    {/* <NavLink className={'barraNav text-dark p-2 activa'} to='./productos'>Home</NavLink> */}
                    <NavLink to='./productos' className={({isActive})=> `barraNav text-dark p-2 ${isActive ? 'activa' :'' }`} >Home</NavLink>

                    <NavLink to='./camisetas' className={({isActive})=> `barraNav text-dark p-2 ${isActive ? 'activa' : '' }`} >T-shirts</NavLink>
                    <NavLink to='./pantalones' className={({isActive})=> `barraNav text-dark p-2 ${isActive ? 'activa' : '' }`} >Shorts</NavLink>
                </div>

                <div>
                    <NavLink className={'logo text-dark navbar-brand'} to='./'>SPA</NavLink>
                </div>
                
                <div>
                    <span className='mx-3'>Hi, Sara</span>
                    <button 
                        className={'barraNav text-dark btn btn-outline-dark miBtn px-2'}
                        onClick={handleLogout}>Log out</button>
                </div>
                
            </div>
        </nav>
    </header>
  )
}
