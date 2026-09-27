import './loginPage.css'
import Login from '../components/login'
import Register from '../components/register'
import { useState } from 'react'


export default function LoginPage(){

    const [loginOrRegister, setLoginOrRegister] = useState('login')

    return(
        <>
        <div className="loginRegisterPage">
            <section className="auth-card" aria-label="Capacity Connect account access">
                <div className="auth-brand">
                    <span className="brand-mark" aria-hidden="true">C</span>
                    <span>Capacity <strong>Connect</strong></span>
                </div>
                <div className="loginOrRegisterHeader" role="group" aria-label="Choose sign-in or registration">
                    <button
                        type="button"
                        className={loginOrRegister === 'login' ? 'signIn selected' : 'signIn'}
                        aria-pressed={loginOrRegister === 'login'}
                        onClick={() => setLoginOrRegister('login')}
                    >
                        Sign in
                    </button>
                    <button
                        type="button"
                        className={loginOrRegister === 'register' ? 'register selected' : 'register'}
                        aria-pressed={loginOrRegister === 'register'}
                        onClick={() => setLoginOrRegister('register')}
                    >
                        Create account
                    </button>
                </div>
                {loginOrRegister === 'login' ? <Login /> : <Register />}
                <p className="auth-footer">Capacity Connect <span>·</span> Learning that moves teams forward</p>
            </section>
        </div>
        </>
    )
}