import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import SideBar from '../Component/Dashbord/Main/SideBar';
import Nav from '../Component/Dashbord/Main/header';
// import{useNavigate} from  'react-router-dom';

function Checkout() {

  // const navigate = useNavigate()

   const formik = useFormik({
    initialValues: {
      CardNumber: '',
      ExpDate: '',
      CVV: '',
      CardPin: '',
      Location: '',
    },
    validationSchema: Yup.object({
      CardNumber: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('*Required'),

      ExpDate: Yup.string().max(5, 'Must be 15 characters or less')
        .required('*Required'),
      CVV: Yup.string()
        .max(3, 'Must be characters or less')
        .required('*Required'),
         CardPin: Yup.string()
        .max(4, 'Must be characters or less')
        .required('*Required'),
        Location: Yup.string()
        .max(20, 'Must be characters or less')
        .required('*Required'),
    }),
  // onSubmit: (values) => {
  //     sessionStorage.setItems('payment', JSON.stringify(values));
  //     toast.success('Payment Successful!!');
  //     setInterval(() => {
  //       window.location = '/Dashboard';
  //     }, 2000);
  //   },
  });



  return (
<div className='h-screen w-screen font-[Poppins]'>
    <ToastContainer />
      <div className='flex space-x-8'>
        <SideBar />
        <div className='w-8/12'>
          <Nav />
          
          <div className='flex  justify-center '>
         <form action='' onSubmit={formik.handleSubmit} >
              <div className='mb-10'>
                {' '}
                <input
                  className='border-2 h-10 p-3 text-sm font-normal text-[#00302E87] border-[#FBDDBB82]   w-96'
                  id='CardNumber'
                  name='CardNumber'
                  placeholder='CardNumber'
                  type='number'
                  value={formik.values.CardNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.CardNumber && formik.errors.CardNumber ? (
                  <div>{formik.errors.CardNumber}</div>
                ) : null}
              </div>
              <div className='mb-10'>
                {' '}
                <input
                  className='border-2 h-10 p-3 text-sm font-normal text-[#00302E87] border-[#FBDDBB82]   w-96'
                  id='ExpDate'
                  name='ExpDate'
                  placeholder='Exp.Date'
                  type='date'
                  value={formik.values.ExpDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.ExpDate && formik.errors.ExpDate ? (
                  <div>{formik.errors.ExpDate}</div>
                ) : null}
              </div>
              <div className='mb-10'>
                {' '}
                <input
                  className='border-2 h-10 p-3 text-sm font-normal text-[#00302E87] border-[#FBDDBB82]   w-96'
                  id='CVV'
                  name='CVV'
                  type='number'
                  placeholder='CVV'
                  value={formik.values.CVV}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.CVV && formik.errors.CVV ? (
                  <div>{formik.errors.CVV}</div>
                ) : null}
              </div>
              <div className='mb-10'>
                {' '}
                <input
                  className='border-2 h-10 p-3 text-sm font-normal text-[#00302E87] border-[#FBDDBB82]   w-96'
                  id='CardPin'
                  name='CardPin'
                  type='number'
                  placeholder='CardPin'
                  value={formik.values.CardPin}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.CardPin && formik.errors.CardPin ? (
                  <div>{formik.errors.CardPin}</div>
                ) : null}
              </div>
              <div className='mb-10'>
                {' '}
                <input
                  className='border-2 h-10 p-3 text-sm font-normal text-[#00302E87] border-[#FBDDBB82]   w-96'
                  id='Location'
                  name='Location'
                  type='text'
                  placeholder='Location'
                  value={formik.values.Location}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Location && formik.errors.Location ? (
                  <div>{formik.errors.Location}</div>
                ) : null}
              </div>
              <button
                className='border-5 h-10  text-lg font-medium text-[#FBDDBB]  bg-[#00302E] text-center  w-96 rounded'
                type='submit'
                 onClick={() =>  setInterval(() => {
        window.location = '/Dashboard';
      }, 2000)}
             >
                Make payment
              </button>
            </form>
            </div>
       
        </div>
      </div>
    </div>
  );

  }
  
export default Checkout;

