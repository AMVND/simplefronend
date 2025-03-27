import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) setUser(JSON.parse(loggedUser));
  }, []);

  const login = async (username, password) => {
    const response = await fetch('/data.json');
    const data = await response.json();
    const validUser = data.results.find(user => user.login.username === username && user.login.password === password);
    if (validUser) {
      setUser(validUser);
      localStorage.setItem('user', JSON.stringify(validUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;