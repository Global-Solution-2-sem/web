import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'

type userToken = {
    name: string
    email: string
}


export default function Header() {
    const [user, setUser] = useState<userToken | null>(null)
    const getToken = () => {
        const token = localStorage.getItem('token')

        if (token !== null)
            setUser(jwtDecode(token))
    }

    useEffect(() => {
        getToken()
    }, [])
    return (
        <header>
            {user !== null ? <h1>Bem vindo, {user.name}</h1> : <h1>Bem vindo!</h1>}
            <p>Global Solution 2023 - Engenharia de Software</p>
        </header>
    )
}