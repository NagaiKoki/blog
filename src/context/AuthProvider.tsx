import { FC, createContext, useEffect, useState } from 'react';
import { supabase } from '@lib/supabase';

const AuthContext = createContext<{ isLoggedIn: boolean }>({
  isLoggedIn: false
});

export const AuthProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetch = async () => {
    setIsLoggedIn(!!supabase.auth.session());
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
