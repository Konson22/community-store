import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';
import {useAuthContext} from '../../contexts/AuthUserContextProvider';
import axiosInstance from '../../helpers/axiosInstance';


export default function Login() {

  const {authUser, setAuth} = useAuthContext()
  
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [inputData, setInputData] = useState({
    email:'',
    password:''
  })

  const handleInputsData = e => setInputData({...inputData, [e.target.name]:e.target.value});


  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const results = await axiosInstance.post('/auth/login', inputData, {
        widthCredentials:true, 
        withCredentials:'include'
      }).then(res => res);
      setAuth(results.data)
    } catch (error) {
      if(error.response?.status === 404 || error.response?.status === 403 || error.response?.status === 500){
        setMessage(error.response?.data)
      }else{
        setMessage('Sorry something went wrong!.')
      }
    }finally{
      setLoading(false)
    }
  }

  return authUser.status ? <Redirect to={{ pathname:'/'}} /> : (
    <div className='form-wraper d-flex justify-content-center align-items-cente'>
      <div className="form-content">
        <div className="form-header text-center">
          <h4>Login</h4>
          {message && <div>{message}</div> }
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-content col-md-12">
            <label htmlFor="email">E-mail</label>
            <input type='text' name='email' placeholder='example@gmail.com' disabled={loading} onChange={handleInputsData} />
          </div>
          <div className="input-content col-md-12">
            <label htmlFor="password">Password</label>
            <input type='password' name='password' placeholder='*******' disabled={loading} onChange={handleInputsData}  />
          </div>
          <div className="my-3">
            <button className="btn btn-success" type='submit' disabled={loading}>
              {loading ? 
                <span className='d-flex align-items-center'>
                  <img className='btn-loader' src={process.env.PUBLIC_URL+'/images/spinner.gif'} alt='Loading...' /> Loading...</span> : 
                'Submit'
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
