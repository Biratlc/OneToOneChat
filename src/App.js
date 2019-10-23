import React from 'react';
import { ChatkitProvider, TokenProvider } from '@pusher/chatkit-client-react';

import './App.css';
import Chat from './Chat';
import UserList from './UserList';
import Login from './Login';
import selu from './selu.png';
//import chatkitLogo from './chatkit-logo.svg';



const instanceLocator = 'v1:us1:bef839d2-e5a5-43d4-a7e0-6e96ea8bf00b';


const tokenProvider = new TokenProvider({
    url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/bef839d2-e5a5-43d4-a7e0-6e96ea8bf00b/token',
})


function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const otherUserId = urlParams.get('otherUserId');

  return (
    <div className="App">
      {userId && otherUserId ? (
        <>
          <div className="App__chatwindow">
              <ChatkitProvider
                  instanceLocator={instanceLocator}
                  tokenProvider={tokenProvider}
                  userId={userId}
              >
                  <UserList userId={userId}/>
                  <Chat otherUserId={otherUserId} />
              </ChatkitProvider>
          </div>
        </>
      ) : (
        <Login />
      )}
      {/*<div className="App__backdrop">*/}
      {/*  <img*/}
      {/*    className="App__backdrop__logo"*/}
      {/*    src={chatkitLogo}*/}
      {/*    alt="Chatkit logo"*/}
      {/*  />*/}
      {/*</div>*/}
    <div className="App__backdrop">
        <img 
            className="App__backdrop__logo" 
            src={selu}
            alt="Chatkit logo"
      />
    </div>
    </div>
  );
}

export default App;
