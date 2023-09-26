import {Component} from 'react'
import './App.css'

const countries = [
  {
    code: '+1',
    name: 'United States',
    image: 'https://example.com/images/us.png',
  },
  {
    code: '+44',
    name: 'United Kingdom',
    image: 'https://example.com/images/uk.png',
  },
  {
    code: '+91',
    name: 'India',
    image: 'https://example.com/images/in.png',
  },
]

class App extends Component {
  state = {mobile: '', country: '', setOtpSent: false}

  countryCode = event => {
    this.setState({country: event.target.value})
  }

  onSubmit = async () => {
    const {mobile, setOtpSent} = this.state
    const response = await fetch('https://your-api.com/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mobile}),
    })

    if (response.ok) {
      this.setState({setOtpSent: true})
    }
  }

  render() {
    return (
      <div className="main-container">
        <img
          src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1695728926/AK_logo_so3d6v.png"
          alt="company logo"
          className="logo"
        />
        <h1>Welcome Back</h1>
        <p>Please sign in to your account</p>
        <label htmlFor="mobile-input">Enter Contact Number</label>
        <div id="mobile-input">
          <select>
            {countries.map(each => (
              <option
                key={each.code}
                value={each.code}
                onClick={this.countryCode}
              >
                {each.code}
              </option>
            ))}
          </select>
          <input type="text" placeholder="Mobile Number" />
        </div>
        <p className="para">
          We will send you a one time SMS message.
          <br /> Charges may apply.
        </p>
        <button type="button" onClick={this.onSubmit}>
          Sign In with OTP
        </button>
      </div>
    )
  }
}

export default App
