import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl, userEnd } from "../assets/dbUrl";

const AuthContexts = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    // checking user from localstorage
    const checkUser = () => {
        let getUser = localStorage.getItem("user");
        let user = JSON.parse(getUser);
        console.log(user);
        setUser(user);
    };

    // login user authentication
    const Login = async (formData) => {
        const checkUser = await fetch(
            `${baseUrl}/${userEnd}?email=${formData.email}&password=${formData.password}`,
            { method: "GET" }
        );
        // console.log(checkUser);
        try {
          const user = await checkUser.json();
        if (user.length > 0) {
            setMessage("login Sucessfully!");
            localStorage.setItem("user", JSON.stringify(user[0]));
            setUser(user[0]);
            setTimeout(() => {
                navigate("/createtask");
            }, 2000);
        } else {
            setMessage("user not found");
        }
        } catch (error) {
          console.log(error);
        }
        
    };

    //register user authentication
  
        const Register =async (formData) => {
          const object = {
            method : 'POST',
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify(formData)
          }

          const checkUser = await fetch(`${baseUrl}/${userEnd}?email=${formData.email}`, {method : 'GET'});
          try {
            if(checkUser.ok){
              const userath =await checkUser.json()
        
              if(userath.length > 0){
                setMessage('user already exist')  
              }
              else{
              const response = await fetch(`${baseUrl}/${userEnd}` , object);
              if (response.ok) {
                setMessage('Register successfully!')
                const user = await response.json()
                localStorage.setItem('user' , JSON.stringify(user))
                setTimeout(() => {
                  navigate("/profile");
              }, 2000);
              } 
              else
               {
                setMessage('something went wrong!')
              }
             // console.log(response);
            }
           
            }
            else{
              setMessage('something went wrong!')
            }
          
          } catch (error) {
            console.log(error);
          }
        }

    useEffect(() => {
        checkUser();
    }, []);
    return (
        <AuthContexts.Provider
            value={{
                user,
                Login,
                message,
                setMessage,
                Register,
                setUser
            }}
        >
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthContexts;
