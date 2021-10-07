import { ReactNode, useEffect, useState } from 'react';
import { IconClose } from '../assets/icon';
import { deleteImage } from '../lib/utils/useRequest';
import FormProduct from './FormProduct';
interface ModalProps {
  visible: boolean;
  setVisible: any;
  user: any
}
const Modal = (props: ModalProps) => {
  const { visible, setVisible, user  } = props;

  return (
    <>
    {visible && 
    <div className="bg-black bg-opacity-30 min-h-screen w-full fixed z-50 top-0 left-0 p-0 m-0" />
    }
      <div
        className={` ${
          visible ? '-translate-x-10 ' : 'fixed translate-x-full bg-primary'
        } fixed md:w-1/2 w-full shadow bg-white min-h-screen top-0 -right-10 z-50 transition-all ease-in-out duration-700`}
      >
        <div className='flex justify-between items-center p-4 bg-primary rounded'>
          <h3>Tambah Produk</h3>
          <button
            onClick={() => {
              setVisible(false);
            }}
          >
            <IconClose />
          </button>
        </div>
        <div>
          <div className='w-100'>
            <FormProduct />
          </div>
        </div>
      </div>
      {/* <div
        className={`bg-gray-500 bg-opacity-50 ${
          visible ? 'block' : 'hidden'
        } fixed z-30 rounded min-h-screen w-full flex justify-end  p-0 overflow-hidden`}
      /> */}
    </>
  );
};

export default Modal;
