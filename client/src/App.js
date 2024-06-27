import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import LoginPage from './pages/login';
import Home from './pages/home';
import FileUploadComp from './components/FileUploadComp';

function App() {

  const [user, setUser] = useState();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  },[])

  return (
    <GoogleOAuthProvider clientId="134126671893-dop0o9a4agq2f6dglhf2lq7e2tj19tia.apps.googleusercontent.com">
      <div className="App">
        <BrowserRouter>
          <div className='pages'>
            <Routes>
              <Route path='/' element={<LoginPage user={user} setUser={setUser}/>}/>
              <Route path='/home' element={token ? <Home/> : <LoginPage/>}/>
              <Route path='/upload' element={<FileUploadComp/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
