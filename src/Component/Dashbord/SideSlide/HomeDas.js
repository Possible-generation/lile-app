import MainDas from '../Main/MainDas';
import { items } from '../Main/Data';
import Modal from '../Content/Modal';
import { useState } from 'react';

const DashboardLayout = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className='grid  grid-cols-3 h-[calc(100vh-96px)]  overflow-y-scroll no-scrollbar no-scrollbars'
        onClick={() => setShowModal(true)}
      >
        {items.map((item) => {
          return <MainDas key={item.id} {...item} />;
        })}
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default DashboardLayout;
