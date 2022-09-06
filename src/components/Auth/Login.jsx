import React, {useState, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../Providers/AuthProvider';
import {useNavigate} from 'react-router-dom';
import LoginForm from './LoginForm';
import {apiHostUrl} from "../../config";

const Login = () => {

  const [query, setQuery] = useState({
    username: '',
    password: ''
  })
  const [submitting, setSubmitting] = useState(false);
  // const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value
    })
  }

  const onSubmit = async () => {
    // submit query to backend to login.
    setSubmitting(true);
    try {
      const res = await axios.post(`${apiHostUrl}/api/auth/signin`, query);
      setAuth({...auth, token: res.data.token});
      setSubmitting(false);
      navigate(`/trackers/${res.data.id}`);
    } catch (err) {
      console.error("--->> error: "+err.response.data.message);
      setSubmitting(false);
    }
  }

  return (
    <div id="columnComponentsNBk">
      <h1>Login</h1>
      <LoginForm 
        query={query} 
        updateForm={updateForm} 
        onSubmit={onSubmit}
        submitting={submitting}
      />
    </div>
  )
}

export default Login;