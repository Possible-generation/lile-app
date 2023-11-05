import React from 'react';
import Img from '../../../Image/Dashboard/modalimg.svg';

function Modal({ isVisible, onClose }) {
  // const [count, setCount] = useState(1);

  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === 'mainwrap') onClose();
  };

  // const Increment = () => {
  //   setCount(count + 1);
  // };
  // const Decrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <div
      className='fixed bg-black inset-0 bg-opacity-25 backdrop-blur-0  flex justify-end'
      id='mainwrap'
      onClick={handleClose}
    >
      <div className='w-[521px] h-screen '>
        <div className='bg-[#ffff] items-center'>
          <div>
            <img
              className='mx-auto pt-12 h-[230px] w-[230px]'
              src={Img}
              alt=''
            />
          </div>
          <div className='text-center text-[#00302E] my-3 font-semibold'>
            Blueberry Toasts and smoothie
          </div>
          <div className='font-normal text-center mx-8'>
            Just have a single bite of this Black Forest pastry and it will all
            make a proper sense to you. The kick of cherry and rich chocolate of
            this super light, airy pastry will definitely make you feel "wow".
            The perfect combination of cherry cream and rich chocolate can
            provide the ultimate fulfillment to your dessert craving.
          </div>
          <div className='flex text-[#00302E] mx-8 font-semibold mt-16 mb-8 justify-between'>
            <div>NGN1000</div>
            <div>10-20 Mins</div>
            <div>10 Pcs Avail</div>
          </div>
          <div className='flex justify-between mx-8 pb-24'>
            <div className='flex'>
              {/* <button
                className='bg-[#F3C294] p-4 mr-3  text-4xl  '
                onClick={Increment}
              >
                +
              </button> */}
              {/* <h1 className='my-auto font-semibold text-2xl'>{count}</h1> */}
              {/* <button
                className='bg-[#F3C294] text-[#00302E] p-4 ml-3 font-semibold  text-4xl '
                onClick={Decrement}
              >
                -
              </button> */}
            </div>
            <div   >
              <button className='bg-[#00302E] p-4 text-slate-50'  id='mainwrap'
      onClick={handleClose}>
              Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
