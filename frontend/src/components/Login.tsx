import '../styles/login.scss'

export default function Login() {
    return (
        <main>
            <section>
                <form action="">
                    <div className="input-item">
                        <label htmlFor="">Usuário</label>
                        <input type="text" />
                    </div>

                    <div className="input-item">
                        <label htmlFor="">Senha</label>
                        <input type="text" />
                    </div>
                    <div className="input-item">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </section>
        </main>
    )
}