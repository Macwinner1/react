import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router'
import styles from './Register.module.css'
import { usePostDataMutation } from '../../api/productApi'

const token = import.meta.env.VITE_API_TOKEN;

export const Register = () => {

  const userProfile = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  const [user, setUser] = useState(userProfile);
  const [postData, { isLoading, isSuccess, isError }] = usePostDataMutation();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUser((prevUser) => ({...prevUser, [name]: value.trim()}));
  }

  // const [lastName, setLastName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  // const handleFirstName = (e) => {
  //   const firstName = e.target.value.trim();
  //   setFirstName(firstName);
  // }

  // function handleLastName(event) {
  //   const lastName = event.target.value.trim();
  //   setLastName(lastName);
  // }

  // const handleEmail = (e) => {
  //   const email = e.target.value.trim();
  //   setEmail(email);
  // }

  // const handlePassword = (e) => {
  //   const password = e.target.value.trim();
  //   setPassword(password);
  // }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      let response = await postData(user, token).unwrap();
      if (response) {
        setTimeout(() => navigate("/home"), 2000);
      }
      console.log("Response", response);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <div className={styles.register}>
      <div>
      <a href="/home">Back</a>
      </div>
      {isError?<p>{isError}</p> : ""}
      <form onSubmit={handleSubmit} action="">
        <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" placeholder="firstName" name="firstName" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" placeholder="lastName" name="lastName" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
      </div>
      <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/auth/login">Login</Link></p>
      
    </div>
  )
}

export default Register;