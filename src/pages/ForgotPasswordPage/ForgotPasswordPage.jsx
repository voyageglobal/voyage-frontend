import Page from '../../components/common/Page/Page';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../App';
import AtSign from 'lucide-react/icons/at-sign';
import SignInBackground from '../../assets/img/SignIn/signInBackground.png';

const inputStyles =
  'w-full rounded-10px bg-dark-color/45 p-3 pr-12 font-fourth text-xl text-light-color placeholder-light-color/80 focus:outline-none';

const linkStyles = 'font-fourth text-lg font-medium text-dark-color';
const buttonStyles = 'w-full rounded-10px py-3 font-fourth text-lg';
const iconStyles =
  'absolute right-3 top-1/2 -translate-y-1/2 transform text-light-color';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  return (
    <Page
      title="Forgot password - Explore & Share Travel Guides"
      description="Reset your Voyage password and regain access to exclusive travel guides crafted by experienced travelers. Recover your account to explore curated recommendations, discover hidden gems, and plan your perfect trip with personalized insights. Secure your journey and continue sharing your travel experiences with the community."
    >
      <section className="min-h-96 pt-36">
        <div className="container mx-auto">
          <div className="flex gap-20">
            <div className="flex w-1/2 flex-col justify-center font-fourth text-lg text-dark-color">
              <h1 className="font-third text-4xl font-bold">
                Forgot Password?
              </h1>
              <p className="mt-8 text-xl text-dark-color/70">
                Enter the email address you used when you joined and we’ll send
                you instructions to reset your password.
              </p>

              <div className="relative mt-6">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={inputStyles}
                />
                <AtSign className={iconStyles} />
              </div>

              <button
                aria-label="Sign in to your account"
                title="Click here to sign in"
                className={`${buttonStyles} mt-6 bg-dark-color text-light-color`}
              >
                Request password reset
              </button>

              <p className="mt-6 text-center text-dark-color/80">
                Have you remembered your password?
                <Link
                  to={ROUTES.signIn}
                  className={`${linkStyles} ml-2 hover:underline`}
                >
                  Sign in here
                </Link>
              </p>
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

export default ForgotPasswordPage;
