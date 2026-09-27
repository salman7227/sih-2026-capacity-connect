import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './loginPage.css'
import '../../components/login.css'
import './forgetPassword.css'

export default function ForgotPassword() {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()
		if (!email.trim()) {
			setMessage('Enter your email address to continue.')
			return
		}
        try {
               await axios.post(
                        `${import.meta.env.VITE_BACKEND_URL}/forget-password`,
                        email
                )
        } catch (error) {
            
        }
		setMessage('Password reset is not connected to a server yet.')
	}

	return (
		<main className="loginRegisterPage">
			<section className="auth-card" aria-label="Capacity Connect password reset">
				<div className="auth-brand">
					<span className="brand-mark" aria-hidden="true">C</span>
					<span>Capacity <strong>Connect</strong></span>
				</div>

				<div className="loginOrRegisterHeader" role="group" aria-label="Account access">
					<button type="button" onClick={() => navigate('/login')}>Sign in</button>
					<button type="button" className="selected" aria-current="page">Reset password</button>
				</div>

				<div className="auth-content">
					<p className="auth-eyebrow">ACCOUNT RECOVERY</p>
					<h1>Forgot your password<span>?</span></h1>
					<p className="auth-description">Enter your email address and we’ll help you get back into your account.</p>

					<form className="auth-form" onSubmit={handleSubmit}>
						<label className="auth-label" htmlFor="reset-email">Email address</label>
						<input
							className="auth-input"
							id="reset-email"
							type="email"
							placeholder="you@organization.com"
							autoComplete="email"
							value={email}
							onChange={(event) => {
								setEmail(event.target.value)
								setMessage('')
							}}
						/>
						{message && <p className="auth-message" role="status">{message}</p>}
						<button className="auth-submit" type="submit">Send reset instructions</button>
					</form>
				</div>

				<p className="auth-footer">Capacity Connect <span>·</span> Learning that moves teams forward</p>
			</section>
		</main>
	)
}