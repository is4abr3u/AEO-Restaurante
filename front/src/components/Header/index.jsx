import { useNavigate } from 'react-router-dom'
import './style.css'

function Header(){
    const navigate = useNavigate()
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        return navigate('/')
    }

    return(
        <>

        Header
<button onClick={handleLogout} > Sair </button>
        </>
    )
}

export default Header