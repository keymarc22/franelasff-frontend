import { useState, useEffect } from 'react';
import axios from 'axios';


const useInitialState = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('ffuser');

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    } else {
      logout();
    }

    setVerify(true);
  }, []);

  const logout = async () => {
    try {
      const response = await axios.delete('https://franelasffapi.herokuapp.com/auth/sign_out', { headers: user.headers } );

      if (response) {
        localStorage.removeItem('ffuser');
        window.location.href = "/"
      }

    } catch (error) {
      console.log(error)
    }
  }

  return {
    user,
    loading,
    verify,
    setUser,
    setLoading,
    logout,
  };
}

export { useInitialState };