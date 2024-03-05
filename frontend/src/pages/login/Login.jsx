import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'otp-input-react';
import { auth } from '../../firebase/Firebase';
import axios from 'axios';


function Login() {
      const [userContact, setUserContact] = useState('');
      const [user, setUser] = useState(null);
      const [otp, setOtp] = useState('');
      const [showOtpInput, setShowOtpInput] = useState(false); // State to control OTP input visibility
      const [phoneError, setPhoneError] = useState(''); // State for phone number error
      const [otpError, setOtpError] = useState(''); // State for OTP error
      const navigate = useNavigate();

      const loginuser = async () => {
            try {
                  const response = await axios.post('http://localhost:5000/api/user/login', { userContact });
                  console.log(response.data)
            } catch (error) {
                  console.error('Error sending phone number to backend:', error);
            }
      }

      // Verify OTP //
      const verifyOtp = async () => {
            try {
                  const confirmation = await user.confirm(otp);
                  if (confirmation) {
                        // Redirect to the home page after successful OTP verification
                        navigate('/');
                        // Call the login user function to register or login the user
                        loginuser();
                  }
            } catch (err) {
                  console.log(err);
                  if (err.code === 'auth/code-expired') {
                        // Handle code expired error
                        setOtpError('Verification code has expired. Please request a new code.');
                  } else {
                        // Handle other errors
                        setOtpError('Invalid OTP. Please enter a valid OTP.');
                  }
            }
      }

      const sendOtp = async () => {
            try {
                  const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
                  const confirmation = await signInWithPhoneNumber(auth, userContact, recaptcha);
                  setUser(confirmation); // Store the confirmation result
                  setShowOtpInput(true); // Show the OTP input section
            } catch (error) {
                  console.error(error);
                  setPhoneError('Invalid phone number. Please enter a valid phone number.'); // Set phone number error message
            }
      }

      return (
            <>

                  <Container className='flex justify-center items-center '>
                        {showOtpInput ? (
                              <div className='bg-white mt-10 p-10 flex flex-col items-center'>
                                    <div>
                                          <img
                                                src="https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg"
                                                alt=""
                                          />
                                    </div>
                                    <div>
                                          <h2>Verify with OTP</h2>
                                          <OtpInput
                                                id="input"
                                                value={otp}
                                                onChange={(otp) => setOtp(otp)}
                                                OTPLength={6}
                                                otptype="number"
                                                autoFocus
                                          />
                                          <p id="error1">{otpError}</p> {/* Display OTP error message */}
                                          <br />
                                          <br />
                                          <button id="btn1" className='w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold py-2 rounded-lg' onClick={verifyOtp}>Send</button>
                                    </div>
                              </div>
                        ) : (
                              <div className='bg-white mt-10 p-10 flex flex-col items-center'>
                                    {/* Image */}
                                    <div className="w-full h-40">
                                          <img src="https://static.vecteezy.com/system/resources/previews/000/178/364/original/super-sale-offer-and-discount-banner-template-for-marketing-and-vector.jpg" alt="Sale Banner" className='w-full h-full object-cover' />
                                    </div>

                                    {/* Login Form */}
                                    <div className="w-full mt-5">
                                          <p className="title text-2xl font-semibold mb-4">
                                                <b>Login</b> or <b>SignUp</b>
                                          </p>
                                          <Form>
                                                <PhoneInput country="in" value={userContact} onChange={(userContact) => setUserContact("+" + userContact)} />
                                                <p className="para text-sm text-gray-500">
                                                      By continuing, I agree to the <span>Terms of Use</span> & <span>Privacy policy</span>
                                                </p>
                                                <Button id="btn1" className='w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold py-2 rounded-lg' onClick={sendOtp}>
                                                      CONTINUE
                                                </Button>
                                                <p id="error2" className='text-red-500 text-sm mt-2'>{phoneError}</p> {/* Display phone number error message */}
                                                <p className="para text-sm text-gray-500 mt-2">
                                                      Have trouble logging in?<span>Get help</span>
                                                </p>
                                          </Form>
                                          <div id='recaptcha'></div>
                                    </div>
                              </div>
                        )}
                  </Container>
            </>
      );
}

export default Login;
