import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { database } from '../firebase/config'; 

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
