import {createContext,useState} from 'react'

export const Authcontext = createContext("")

const UserContext = ({children}) => {
    const [loginUser, setLoginUser] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [adminAuthenticated, setadminAuthenticated] = useState(false);
    const [allPosts, setAllPosts] = useState([]);
    const [postDeletedTrack, setPostDeletedTrack] = useState(false); // State to track post deletion from deletePopUp

  return (
    <Authcontext.Provider value={{isAuthenticated,setIsAuthenticated,setLoginUser,loginUser,allPosts,setAllPosts,postDeletedTrack,setPostDeletedTrack,adminAuthenticated,setadminAuthenticated}}>
        {children}
    </Authcontext.Provider>
  )
}

export default UserContext