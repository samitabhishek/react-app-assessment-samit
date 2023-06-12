import React, { useState, createContext } from 'react'
import './App.css';
import LandingPage from './Containers/LandingPage';
export const UserContext = createContext()

function App() {

  const [loggedInUser, setUser] = useState({
    profilePicUrl: null,
    name: 'Fernando Ray',
    designation: 'UX Designer',
    organisation: 'Decantro'
  });

  return (
    <UserContext.Provider value={loggedInUser}>
      <div className="App">
        <LandingPage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
