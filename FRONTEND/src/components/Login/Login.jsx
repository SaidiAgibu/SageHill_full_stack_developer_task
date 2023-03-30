// import React, { useState, useEffect } from "react";
// //import './Login.css'
// import {Link, useNavigate} from 'react-router-dom'
// //import axios from 'axios'
// import { API_URL } from "../../app/config";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = ({ onLogin }) => {
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch(API_URL + `/login`, {
//       method: "POST",
//       body: JSON.stringify({  email, password }),
//       headers: { "Content-Type": "application/json" },
//     });
//     if (response.ok) {
//       const data = await response.json();
//       localStorage.setItem("token", data.token);
//       toast.success("Login success");
//       console.log(data)
//       onLogin(); // call the onLogin function passed in props
//       navigate('/home'); // navigate to the home page
//     } else {
//       toast.error("Error while logging in");
//     }
//   };
  
//   return (
//     <section>
//       <div className='container'>
//         <h1>Welcome</h1>

//         <div className='formContainer'>
//           <form onSubmit={(e) => handleSubmit(e)} >
//             <input type="email" placeholder='Enter your Email'  onChange={(e) => setEmail(e.target.value)}/>
//             <input type="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
//             <button type='submit'>Login</button>
//             <p className='register'>Don't have an account? <Link to="/register"><span>Register</span></Link> </p>
//           </form>
//           <ToastContainer
//             position="top-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//           />
          
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Login
