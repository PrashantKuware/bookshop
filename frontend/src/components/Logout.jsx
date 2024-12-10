import React from 'react'
import { useAuth } from '../context/AuthProvider'
import User from '../../../backend/Models/user.model';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user : null,
            })
            localStorage.removeItem("Users");
            toast.success("Logout Succesfully ");
            setTimeout(() => {  
            window.location.reload();
            }, 2000);
        } catch (error) {
            toast.error("Error :" + error.message)
            setTimeout(() => {}, 3000);
        }
    }
  return (
    <div>
        <button className='px-3 py-2 cursor-pointer text-white bg-red-500 rounded-md'
        onClick={handleLogout}>
        Logout
        </button>
    </div>
  )
}

export default Logout