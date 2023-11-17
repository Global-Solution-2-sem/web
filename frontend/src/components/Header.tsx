import { jwtDecode } from 'jwt-decode'
import { LogOut } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type userToken = {
    name: string
    email: string
}

export default function Header() {
    const navigate = useNavigate()
    const [user, setUser] = useState<userToken | null>(null)
    const getToken = () => {
        const token = localStorage.getItem('token')

        if (token !== null)
            setUser(jwtDecode(token))
        else {
            setUser(null)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    useEffect(() => {
        getToken()
    }, [])

    useEffect(() => {
        getToken()
    }, [localStorage.getItem('token')]);
    return (
        <header>
            {user !== null ? <h1>Bem vindo, {user.name}</h1> : <h1>Bem vindo!</h1>}
            <nav>
                <p>Global Solution 2023 - Engenharia de Software</p>
                {user !== null && <LogOut onClick={logout} width={30} />}
            </nav>
        </header>
    )
}