import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from './context/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
    <UserContext>
    <App />
    </UserContext>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
)
