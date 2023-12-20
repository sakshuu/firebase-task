import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { database } from '../firebase/config'; // Import the initialized Firebase auth object

// Function to check the authentication status
const useAuthStatus = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(database, (loggedInUser) => {
      setUser(loggedInUser);
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuthStatus;
