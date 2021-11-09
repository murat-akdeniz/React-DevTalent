import React from 'react'
import GoogleLogout from 'react-google-login'
const clientId = '1019669866607-ha2vsoo3rjljhd7pidkm0i5ju1slpuio.apps.googleusercontent.com'

const Logout = () => {
   const onSuccess = () => {
      alert('Logout made successfully');
   }

   return (
      <div>
         <GoogleLogout
            clientId={clientId}
            buttonText='Logout'
            onLogoutSuccess={onSuccess}
         />

      </div>
   )
}

export default Logout
