import { useState } from 'react';
import Page from '../../components/common/Page/Page';
import OTPInput from 'react-otp-input';
import SignInBackground from '../../assets/img/SignIn/signInBackground.png';

const buttonStyles = 'w-full rounded-10px py-3 font-fourth text-lg';

const VerificationPasswordPage = () => {
  const [otp, setOtp] = useState('');

  const handleChange = value => {
    setOtp(value);
    console.log('Entered OTP:', value);
  };

  return (
    <Page
      title="Forgot password - Explore & Share Travel Guides"
      description="Reset your Voyage password and regain access to exclusive travel guides crafted by experienced travelers. Recover your account to explore curated recommendations, discover hidden gems, and plan your perfect trip with personalized insights. Secure your journey and continue sharing your travel experiences with the community."
    >
      <section className="min-h-96 pt-36">
        <div className="container mx-auto">
          <div className="flex gap-20">
            <div className="flex w-1/2 flex-col justify-center font-fourth text-lg text-dark-color">
              <h1 className="font-third text-4xl font-bold">Verify Code</h1>
              <p className="mt-8 text-xl text-dark-color/70">
                Please enter the code we just sent to your email
              </p>
              <p className="mt-2 text-xl text-dark-color">example@gmail.com</p>

              <div className="mt-6 flex justify-center">
                <OTPInput
                  value={otp}
                  onChange={handleChange}
                  numInputs={5}
                  shouldAutoFocus
                  containerStyle={{
                    gap: '0.5rem',
                    display: 'flex',
                  }}
                  inputStyle={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    outline: 'none',
                  }}
                  renderInput={props => (
                    <input
                      {...props}
                      className="focus:ring-2 focus:ring-orange-color"
                    />
                  )}
                />
              </div>

              <p className="mt-6 text-dark-color/80">
                Didn’t receive one-time-password?
              </p>
              <button
                className="mt-2 font-medium text-dark-color underline"
                onClick={() => console.log('Resend code clicked')}
              >
                Resend code
              </button>

              <button
                aria-label="Sign in to your account"
                title="Click here to sign in"
                className={`${buttonStyles} mt-6 bg-dark-color text-light-color`}
                onClick={() => console.log('Verify button clicked')}
              >
                Verify
              </button>
            </div>

            <div
              className="h-[40rem] w-[51rem] bg-cover bg-center"
              style={{ backgroundImage: `url(${SignInBackground})` }}
            ></div>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default VerificationPasswordPage;
