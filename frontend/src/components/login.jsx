import { useState } from 'react'
import './login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Login() {

    const navigate = useNavigate();
    const [loginFormData, setLoginFormData] = useState({
        role: 'trainee',
        email: '',
        password: '',
        rememberMe: false
    })
    const [formError, setFormError] = useState('')

    const setRole = (role) => {
        setLoginFormData((currentData) => ({ ...currentData, role }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!loginFormData.email || !loginFormData.password) {
            setFormError('Enter your email and password to continue.')
            return
        }
        try {

            // TODO: send login post to backend

            // await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, loginFormData, { withCredentials: true }); 
            // navigate('/dashboard')  

        } catch (error) {
            setFormError('Sign-in is not connected to a server yet.')
        }
    }

    return (
        <main className="auth-content">
            <p className="auth-eyebrow">YOUR WORKSPACE AWAITS</p>
            <h1>Welcome back<span>.</span></h1>
            <p className="auth-description">Sign in to continue to your account.</p>

            <form className="auth-form" onSubmit={handleSubmit}>
                <fieldset className="role-picker">
                    <legend>I am signing in as</legend>
                    <div className="role-options">
                        {['Trainee', 'Trainer', 'Admin'].map((role) => (
                            <button
                                key={role}
                                type="button"
                                className={loginFormData.role === role.toLowerCase() ? 'role-option selected' : 'role-option'}
                                aria-pressed={loginFormData.role === role.toLowerCase()}
                                onClick={() => setRole(role.toLowerCase())}
                            >
                                {role}
                            </button>
                        ))}
                    </div>
                </fieldset>

                <label className="auth-label" htmlFor="login-email">Email address</label>
                <input
                    className="auth-input"
                    id="login-email"
                    type="email"
                    placeholder="you@organization.com"
                    autoComplete="email"
                    value={loginFormData.email}
                    onChange={(event) => {
                        setLoginFormData((currentData) => ({ ...currentData, email: event.target.value }))
                        setFormError('')
                    }}
                />

                <label className="auth-label" htmlFor="login-password">Password</label>
                <input
                    className="auth-input"
                    id="login-password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    value={loginFormData.password}
                    onChange={(event) => {
                        setLoginFormData((currentData) => ({ ...currentData, password: event.target.value }))
                        setFormError('')
                    }}
                />

                <div className="auth-form-options">
                    <label className="remember-option">
                        <input
                            type="checkbox"
                            checked={loginFormData.rememberMe}
                            onChange={(event) => setLoginFormData((currentData) => ({ ...currentData, rememberMe: event.target.checked }))}
                        />
                        <span>Remember me</span>
                    </label>
                    <a className="auth-link" href="/forgot-password">Forgot password?</a>
                </div>

                {formError && <p className="auth-message" role="status">{formError}</p>}
                <button className="auth-submit" type="submit">Sign in as {loginFormData.role}</button>
            </form>
        </main>
    )
}