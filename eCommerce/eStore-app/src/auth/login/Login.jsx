import React,{useState} from 'react'
import { Link, useNavigate} from 'react-router'
import styles from './Login.module.css'
import { useLoginDataMutation } from '../../api/productApi' 

const token = import.meta.env.VITE_API_TOKEN;

export const Login = () => {

  const userProfile = {
    username: "",
    password: ""
  };

  const [user, setUser] = useState(userProfile);
  const [loginData, { isLoading, isSuccess, isError }] = useLoginDataMutation();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUser((prevUser) => ({...prevUser, [name]: value.trim()}));
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      let response = await loginData(user, token).unwrap();
      if (response) {
        setTimeout(() => navigate("/home"), 2000);
      }
      console.log("Response", response);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <div className={styles.login}>
      <div>
      <a href="/home">Back</a>
      </div>
      {isError?<p>{isError}</p> : ""}
      <form onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
      
    </div>
  )
}

export default Login;
