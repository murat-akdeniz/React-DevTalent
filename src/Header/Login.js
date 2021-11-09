import React from 'react'
import { useGoogleLogin } from 'react-google-login'
import { refreshTokenSetup } from './RefreshTokenSetup'
const clientId = '1019669866607-ha2vsoo3rjljhd7pidkm0i5ju1slpuio.apps.googleusercontent.com'

const LogIn = () => {
   const onSuccess = (res) => {
      console.log(res)
      console.log('[Login Success] currentUser:', res.profileobj)
      refreshTokenSetup(res)
   }
   const onFailure = (res) => {
      console.log('[Login failed] res:', res)
   }
   const { signIn } = useGoogleLogin({
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: true,
      accessType: 'offline'
   })
   return (
      <div className='login'>
         <button onClick={signIn} className='btn'>Log In</button>

      </div>
   )
}

export default LogIn
