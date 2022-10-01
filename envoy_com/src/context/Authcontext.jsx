import React,{useState} from 'react'
export const Authcontext = React.createContext(); 
export const AuthContextProvider = ({children}) => {
    const [regAuth,setRegAuth]=useState(false)
    const [logAuth,setLogAuth]=useState(false)
  return (
    <Authcontext.Provider value={{regAuth,setRegAuth,logAuth,setLogAuth }}>
        {children}
    </Authcontext.Provider>
  )
}
