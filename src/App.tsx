import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  console.log(user);
  return (
    <div className="App">
      <header>
        {!isAuthenticated ? (
          <button onClick={loginWithRedirect}>Log In</button>
        ) : (
          <>
            <button
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
            >
              Log Out
            </button>
            <div>
              <img src={user?.picture} alt={user?.name} />
              <h2>{user?.name}</h2>
              <p>{user?.email}</p>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
