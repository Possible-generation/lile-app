import React from 'react';
import { useFormik } from 'formik';
import Logimg from '../Image/Login/Login.svg';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({


      email: Yup.string().email('Invalid email address').required('*Required'),
      password: Yup.string()
        .max(15, 'Must be characters or less')
        .required('*Required'),
    }),
    onSubmit: (values) => {
      let user = JSON.parse(sessionStorage.getItem('user'));

      if (values.email === user.email && values.password === user.password) {
        toast.success('Login Sucessful!!');
        setInterval(() => {
          window.location = '/Dashboard';
        }, 2000);
      } else {
        toast.error('Wrong email or password');
      }
    },
  });

  return (
    <div>
      <div className=' font-[Poppins] flex '>
        <ToastContainer />
        <div>
          <img
            className='overflow-y-hidden h-[100vh] w-[764] hidden md:flex'
            src={Logimg}
            alt=''
          />
        </div>
        <div className='box-border  grid justify-center pl-36 md:pl-[300px]'>
          <div className='pl-8  mt-20 font-semibold text-2xl text-[#00302E] '>
            Welcome Back!
          </div>
          <div className='mt-1 1'>
            <form action='' onSubmit={formik.handleSubmit}>
              <div className='mb-10'>
                {' '}
                <input
                  className='border-2 h-10 p-3 text-sm font-normal text-[#00302E87] border-[#FBDDBB82]   w-64'
                  id='email'
                  name='email'
                  placeholder='Your Email address'
                  type='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className='mb-10'>
                {' '}
                <input
                  className='border-2 h-10 p-3 text-sm font-normal text-[#00302E87] border-[#FBDDBB82]   w-64'
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Your Password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>
              <button
                className='border-5 h-10 p-3 text-lg font-medium text-[#FBDDBB]  bg-[#00302E] text-center  w-64 rounded'
                type='submit'
              >
                SIGN UP
              </button>
            </form>
          </div>
          <div className='pl-1 text-[#00302EE8]  font-normal flex'>
            <Link to='/Registration  '> Create an account. </Link>{' '}
            <div className='ml-16'>Forget password</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
