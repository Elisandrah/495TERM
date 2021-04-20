import * as React from 'react';

const AuthContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default AuthContext;