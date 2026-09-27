import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './loginPage.css'
import '../../components/login.css'
import './forgetPassword.css'
// import axios from 'axios'

export default function ForgotPassword() {
	const navigate = useNavigate()
	const [step, setStep] = useState('email')
	const [email, setEmail] = useState('')
	const [otp, setOtp] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()
		setMessage('')

		if (step === 'email') {
			if (!email.trim()) {
				setMessage('Enter your email address to continue.')
				return
			}
            //todo: send user email to backend, backend will send otp to given mail
            // try {
                //     await axios.post(
                    //              `${import.meta.env.VITE_BACKEND_URL}/forget-password/sendotp`,
                    //              email
                    //      )
                    
                    // } catch (error) {
                        //     console.log(error)
                // }
                setStep('otp')
                return
            }
            
        
            if (step === 'otp') {
                //todo: user entered otp will send to backend and backend should verify the otp 
                // try {
                //     await axios.post(
                //              `${import.meta.env.VITE_BACKEND_URL}/forget-password/verification`,
                //              {email,otp}
                //      )
                    
                // } catch (error) {
                //     console.log(error)
                // }
                if (!/^\d{6}$/.test(otp)) {
                    setMessage('Enter the 6-digit code to continue.')
                    return
                }
                setStep('password')
                return
            }
            
            if (password.length < 8) {
                setMessage('Your password must be at least 8 characters long.')
                return
            }
            if (password !== confirmPassword) {
                setMessage('Your passwords do not match.')
                return
            }
            //todo: after otp verification the new password will be send to backend and user will redirect to login page.
            // try {
            //     await axios.post(
            //              `${import.meta.env.VITE_BACKEND_URL}/forget-password/update-password`,
            //              {password}
            //      )
            //      navigate('/login')
                
            // } catch (error) {
            //     console.log(error)
            // }
            setMessage('Password reset is not connected to a server yet.')
        }
        
	const stepContent = {
		email: {
			eyebrow: 'ACCOUNT RECOVERY',
			title: <>Forgot your password<span>?</span></>,
			description: 'Enter your email address and we’ll help you get back into your account.',
			button: 'Send reset instructions',
		},
		otp: {
			eyebrow: 'VERIFY YOUR ACCOUNT',
			title: <>Check your email<span>.</span></>,
			description: `Enter the 6-digit code for ${email}.`,
			button: 'Verify code',
		},
		password: {
			eyebrow: 'CREATE A NEW PASSWORD',
			title: <>Choose a new password<span>.</span></>,
			description: 'Create a new password to secure your account.',
			button: 'Reset password',
		},
	}[step]

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
					<p className="auth-eyebrow">{stepContent.eyebrow}</p>
					<h1>{stepContent.title}</h1>
					<p className="auth-description">{stepContent.description}</p>

					<form className="auth-form" onSubmit={handleSubmit}>
						{step === 'email' && <>
							<label className="auth-label" htmlFor="reset-email">Email address</label>
							<input
								className="auth-input"
								id="reset-email"
								type="email"
								placeholder="you@organization.com"
								autoComplete="email"
								required
								value={email}
								onChange={(event) => {
									setEmail(event.target.value)
									setMessage('')
								}}
							/>
						</>}

						{step === 'otp' && <>
							<label className="auth-label" htmlFor="reset-otp">6-digit verification code</label>
							<input
								className="auth-input auth-code-input"
								id="reset-otp"
								type="text"
								inputMode="numeric"
								autoComplete="one-time-code"
								placeholder="000000"
								maxLength={6}
								required
								value={otp}
								onChange={(event) => {
									setOtp(event.target.value.replace(/\D/g, '').slice(0, 6))
									setMessage('')
								}}
							/>
							<button className="auth-back" type="button" onClick={() => { setStep('email'); setMessage('') }}>Use a different email</button>
						</>}

						{step === 'password' && <>
							<label className="auth-label" htmlFor="new-password">New password</label>
							<input
								className="auth-input"
								id="new-password"
								type="password"
								autoComplete="new-password"
								placeholder="At least 8 characters"
								minLength={8}
								required
								value={password}
								onChange={(event) => {
									setPassword(event.target.value)
									setMessage('')
								}}
							/>
							<label className="auth-label" htmlFor="confirm-password">Confirm new password</label>
							<input
								className="auth-input"
								id="confirm-password"
								type="password"
								autoComplete="new-password"
								placeholder="Enter your new password again"
								required
								value={confirmPassword}
								onChange={(event) => {
									setConfirmPassword(event.target.value)
									setMessage('')
								}}
							/>
							<button className="auth-back" type="button" onClick={() => { setStep('otp'); setMessage('') }}>Back to verification code</button>
						</>}

						{message && <p className="auth-message" role="status">{message}</p>}
						<button className="auth-submit" type="submit">{stepContent.button}</button>
					</form>
				</div>

				<p className="auth-footer">Capacity Connect <span>·</span> Learning that moves teams forward</p>
			</section>
		</main>
	)
}