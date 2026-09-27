import { useState } from 'react'
import './register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Register() {
    
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

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!loginFormData.email || !loginFormData.password) {
            setFormError('Enter your email and password to create your account.')
            return
        }
         try {

            // TODO: send login post to backend

            // await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, loginFormData, { withCredentials: true }); 
            // navigate('/dashboard')  

        } catch (error) {
            setFormError('Registration is not connected to a server yet.')
        }
    }

    return (
        <main className="auth-content">
            <p className="auth-eyebrow">START WITH CAPACITY CONNECT</p>
            <h1>Make room to grow<span>.</span></h1>
            <p className="auth-description">Create an account for your organization.</p>

            <form className="auth-form" onSubmit={handleSubmit}>
                <fieldset className="role-picker">
                    <legend>I am joining as</legend>
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

                <label className="auth-label" htmlFor="register-email">Work email</label>
                <input
                    className="auth-input"
                    id="register-email"
                    type="email"
                    placeholder="you@organization.com"
                    autoComplete="email"
                    value={loginFormData.email}
                    onChange={(event) => {
                        setLoginFormData((currentData) => ({ ...currentData, email: event.target.value }))
                        setFormError('')
                    }}
                />

                <label className="auth-label" htmlFor="register-password">Create password</label>
                <input
                    className="auth-input"
                    id="register-password"
                    type="password"
                    placeholder="At least 8 characters"
                    autoComplete="new-password"
                    minLength={8}
                    value={loginFormData.password}
                    onChange={(event) => {
                        setLoginFormData((currentData) => ({ ...currentData, password: event.target.value }))
                        setFormError('')
                    }}
                />

                <div className="auth-form-options register-options">
                    <label className="remember-option">
                        <input
                            type="checkbox"
                            checked={loginFormData.rememberMe}
                            onChange={(event) => setLoginFormData((currentData) => ({ ...currentData, rememberMe: event.target.checked }))}
                        />
                        <span>I agree to the terms of service</span>
                    </label>
                </div>

                {formError && <p className="auth-message" role="status">{formError}</p>}
                <button className="auth-submit" type="submit">Create {loginFormData.role} account</button>
            </form>
        </main>
    )
}