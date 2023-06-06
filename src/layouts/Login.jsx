import { signInWithMicrosoft } from "../Firebase-config.jsx"
import { useNavigate } from "react-router-dom";
import { Button } from '@mantine/core';

import microsoftLogo from "../assets/ms-logo.svg";



function Login() {
    
    const navigate = useNavigate()
    const login = async () => {
      await signInWithMicrosoft()
        .then((result) =>{ 
            console.log("HERE IS ITSHSHSHHSHSHS")
            console.log(result);
            localStorage.setItem('name', result.user.displayName);
            localStorage.setItem('email', result.user.email);
            navigate('/Home')
            
          })
        .catch((error) => {
            console.log(error.message);
        });

        
    };
  
    return (
     
           <Button
      variant={"outline"}
      color={"dark"}
      style={{
        margin: "auto",
        marginTop: "0",
        fontFamily: "Segoe UI",
        fontSize: "0.938rem",
        height: "2.563rem",
        backgroundColor: "#1E1E1E",
        color: "#ffffff",
      }}
      leftIcon={<img src={microsoftLogo} alt={"Microsoft Logo"} />}
      onClick={login}
    >
      Sign in with Microsoft
    </Button>


     

     )}
  
  export default Login;