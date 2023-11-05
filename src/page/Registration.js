import React from 'react';
import { useFormik } from 'formik';
import Signin from '../Image/Login/Signin.svg';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

function Registration() {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('*Required'),

      email: Yup.string().email('Invalid email address').required('*Required'),
      password: Yup.string()
        .max(15, 'Must be characters or less')
        .required('*Required'),
    }),
    onSubmit: (values) => {
      sessionStorage.setItem('user', JSON.stringify(values));
      toast.success('SiginIn Successful!!');
      setInterval(() => {
        window.location = './login';
      }, 2000);
    },
  });

  return (
    <div>
      <div className=' font-[Poppins] flex '>
        <ToastContainer />
        <div>
          <img
            className='overflow-y-hidden h-[100vh] w-[764] hidden md:flex'
            src={Signin}
            alt=''
          />
        </div>
        <div className='box-border  grid justify-center pl-36 md:pl-[300px]'>
          <div className='pl-8  mt-20 font-semibold text-2xl text-[#00302E] '>
            Welcome to lilles
          </div>
          <div className='mt-1 1'>
            <form action='' onSubmit={formik.handleSubmit}>
              <div className='mb-10'>
                {' '}
                <input
                  className='border-2 h-10 p-3 text-sm font-normal text-[#00302E87] border-[#FBDDBB82]   w-64'
                  id='firstname'
                  name='firstname'
                  placeholder='Your First Name'
                  type='text'
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div>{formik.errors.firstname}</div>
                ) : null}
              </div>
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
          <div className='pl-4 text-[#00302EE8]  font-normal'>
            Already have an account. <Link to='/Login  '> LOGIN</Link>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
