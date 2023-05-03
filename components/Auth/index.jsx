import React from 'react';
import GoogleIcon from '@/public/svg/Google';
import AppleIcon from '@/public/svg/Apple';

const Login = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', height: '100vh', width: '100%' }}
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '40%',
          background: 'black',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1 style={{ color: 'white', fontSize: '72px', fontFamily: 'Montserrat' }}>
          Board.
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '60%',
          background: '#F5F5F5',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div>
          <div>
            <h1
              style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#000000',
                marginBottom: '5px'
              }}
            >
              Sign In
            </h1>
            <p style={{ fontSize: '16px', fontWeight: '400', color: '#000000' }}>
              Sign in to your account
            </p>
          </div>
          <div style={{ display: 'flex', columnGap: '25px', margin: '26px 0 25px 0' }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '8px',
                borderRadius: '10px',
                background: '#FFFFFF',
                padding: '8px 10px'
              }}
            >
              <GoogleIcon />
              <p style={{ color: '#858585' }}>Sign in with Google</p>
            </button>

            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '8px',
                borderRadius: '10px',
                background: '#FFFFFF',
                padding: '8px 10px'
              }}
            >
              <AppleIcon />
              <p style={{ color: '#858585' }}>Sign in with Apple</p>
            </button>
          </div>

          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '385px',
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '30px',
              rowGap: '20px'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                rowGap: '10px'
              }}
            >
              <label
                htmlFor="email"
                style={{ color: '#000000', fontSize: '16px', lineHeight: '20px' }}
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{
                  background: '#F5F5F5',
                  width: '325px',
                  height: '40px',
                  borderRadius: '10px'
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
              <label htmlFor="password" style={{ color: '#000000' }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                style={{
                  background: '#F5F5F5',
                  width: '325px',
                  height: '40px',
                  borderRadius: '10px'
                }}
              />
            </div>
            <div>
              <a href="/forgot_password" onClick={''} style={{ color: '#346BD4' }}>
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              style={{
                background: '#000000',
                borderRadius: '10px',
                padding: '9px 100px',
                color: 'white'
              }}
            >
              Sign In
            </button>
          </form>
          <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
            <p style={{ color: '#858585', whiteSpace: 'nowrap' }}>
              Don’t have an account?{' '}
              <a href="/MainBoard" onClick={''} style={{ color: '#346BD4' }}>
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
