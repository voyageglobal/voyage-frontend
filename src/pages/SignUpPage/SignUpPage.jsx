import Page from '../../components/common/Page/Page';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../App';
import AtSign from 'lucide-react/icons/at-sign';
import LockKeyHole from 'lucide-react/icons/lock-keyhole';
import User from 'lucide-react/icons/user';
import GoogleLogo from '../../assets/img/SignIn/googleLogo.svg';
import SignInBackground from '../../assets/img/SignIn/signInBackground.png';

const inputStyles =
  'w-full rounded-10px bg-dark-color/45 p-3 pr-12 font-fourth text-xl text-light-color placeholder-light-color/80 focus:outline-none';

const linkStyles = 'font-fourth text-lg font-medium text-dark-color';
const buttonStyles = 'w-full rounded-10px py-3 font-fourth text-lg';
const iconStyles =
  'absolute right-3 top-1/2 -translate-y-1/2 transform text-light-color';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Page
      title="Sign Up - Join the Voyage Community"
      description="Create an account on Voyage and start exploring exclusive travel guides crafted by experienced travelers. Sign up to save your favorite destinations, share your own travel experiences, and connect with a community of like-minded adventurers. Begin your journey today!"
    >
      <section className="min-h-96 pt-36">
        <div className="container mx-auto">
          <div className="flex gap-20">
            <div className="flex w-1/2 flex-col justify-center font-fourth text-lg text-dark-color">
              <h1 className="font-third text-4xl font-bold">
                Create an account
              </h1>
              <p className="mt-8 text-xl text-dark-color/70">
                Let’s get started our VOYAGE
              </p>

              <div className="mt-4 space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className={inputStyles}
                  />
                  <User className={iconStyles} />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={inputStyles}
                  />
                  <AtSign className={iconStyles} />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className={inputStyles}
                  />
                  <LockKeyHole className={iconStyles} />
                </div>
              </div>

              <button
                aria-label="Sign in to your account"
                title="Click here to sign in"
                className={`${buttonStyles} mt-6 bg-dark-color text-light-color`}
              >
                Sign in
              </button>

              <button
                aria-label="Sign in with Google"
                className={`${buttonStyles} mt-4 flex items-center justify-center border border-gray-400`}
              >
                <GoogleLogo className="mr-2 h-6 w-6" />
                Sign in with Google
              </button>

              <p className="mt-6 text-center text-dark-color/80">
                Already have account?
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

export default SignUpPage;
