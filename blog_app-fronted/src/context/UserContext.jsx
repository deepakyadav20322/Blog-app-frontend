import {createContext,useState} from 'react'

export const Authcontext = createContext("")

const UserContext = ({children}) => {
    const [loginUser, setLoginUser] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Authcontext.Provider value={{isAuthenticated,setIsAuthenticated,setLoginUser,loginUser}}>
        {children}
    </Authcontext.Provider>
  )
}

export default UserContext