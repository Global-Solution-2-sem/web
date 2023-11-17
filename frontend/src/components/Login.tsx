import axios from 'axios';
import '../styles/login.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string>()

    /*eslint-disable */
    const onSubmit = async (data: any) => {
        setErrorMessage('')
        try {
            const response = await axios.post('http://localhost:5000/auth', data)

            localStorage.setItem('token', response.data.token)
            navigate('/home')
        }
        catch (err: any) {
            setErrorMessage(err.response.data.message)
        }
    }
    return (
        <main className='login-main'>
            <section className='login-container'>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-item">
                        <label htmlFor="user">Usuário</label>
                        <input type="text" id='user' {...register("user")} />
                    </div>

                    <div className="input-item">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id='password'  {...register("password")} />
                    </div>
                    <div className="input-item">
                        <button type="submit">Login</button>
                    </div>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                </form>
            </section>
        </main>
    )
}