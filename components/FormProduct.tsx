import { useState, useEffect } from 'react';
import Image from 'next/image';
import DefaultImage from '../assets/image/defaultImage.png';
import {
  useGetCategories,
  uploadImage,
  deleteImage,
} from '../lib/utils/useRequest';
import axios from 'axios'

interface dataFormProps {
  name: string;
  description: string;
  price: string;
  discount: string;
  category: string;
  status: string;
}
const FormProduct = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    description: '',
    price: '',
    discount: "",
    category: '1',
    status: 'draft'
  });
  const [image, setImage] = useState('');
  const [imageUpload, setImageUpload] = useState({});
  const classInput = `px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-jungleGreen outline-none focus:outline-none focus:ring w-full`;
  const { categories, error } = useGetCategories('/category');



  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submiit', dataForm);
  };

  const saveData = async (data) => {

    const result = await axios('')

  }

  useEffect(() => {
    return async () => {
      console.log('run delete ==>', image);
      if (image) {
        await deleteImage(image);
      }
    };
  }, []);

  const upload = async (file: any) => {
    if (!file) return '';
    if (imageUpload.url) {
      await deleteImage(imageUpload.url);
    }
    const { data } = await uploadImage(file);
    console.log('upload image   ===>', data);
    setImage(data.url);
    setImageUpload(data);
  };
  return (
    <form onSubmit={onSubmit}>
      {JSON.stringify(categories)}
      <div className='px-4 py-5 bg-white sm:p-6'>
        <div className='grid grid-cols-6 gap-6'>
          <div className='col-span-6 sm:col-span-6'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Nama
            </label>
            <input
              value={dataForm.name}
              onChange={(e) => {
                setDataForm({ ...dataForm, name: e.target.value });
              }}
              placeholder='nama produk ....'
              className={classInput}
            />
          </div>
        </div>

        <div className='grid grid-cols-6 gap-6'>
          <div className='col-span-6 sm:col-span-6'>
            <label
              htmlFor='description'
              className='block text-sm font-medium text-gray-700'
            >
              Deskripsi
            </label>
            <textarea
              placeholder='deskripsi....'
              aria-multiline
              className={classInput}
              value={dataForm.description}
              onChange={(e) => {
                setDataForm({ ...dataForm, description: e.target.value });
              }}
            />
          </div>
        </div>

        <div className='grid md:grid-cols-12 gap-3'>
          <div className='col-span-6 md:col-span-6'>
            <label>Gambar</label>
            <div className=' border-dashed  border-4 border-light-blue-500 flex justify-center'>
              <Image
                src={
                  image ? `http://localhost:5000/image/${image}` : DefaultImage
                }
                width={250}
                height={250}
                alt=''
              />
            </div>
          </div>
          <div className='col-span-12 md:col-span-6 flex md:flex-col justify-center items-center space-y-4'>
            <div className='col-span-3 sm:col-span-6 rounded'>
              <input
                placeholder='paste image url here ...'
                className={`${classInput} md:w-64 w-full`}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className='col-span-3 sm:col-span-6'>
              <label className='md:w-64 w-full flex items-center px-2 py-2 bg-white text-blue rounded-lg shadow tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-jungleGreen'>
                <svg
                  className='w-8 h-8 mr-4'
                  fill='#23AB96'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
                </svg>
                <span className=' text-base leading-normal'>Upload Gambar</span>
                <input
                  type='file'
                  accept='.png, .jpg, .jpeg'
                  onChange={(e) => {
                    console.log(e.target.files);
                    upload(e.target.files[0]);
                  }}
                  className='hidden'
                />
              </label>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-12 gap-3 mt-4'>
          <div className='col-span-6'>
            <label
              htmlFor='price'
              className='block text-sm font-medium text-gray-700'
            >
              Price
            </label>
            <input
            type="number"
              className={classInput}
              value={dataForm.price} 
              onChange={(e) => {
                setDataForm({...dataForm, price: e.target.value})
              }}
            />
          </div>
          <div className='col-span-6'>
            <label
              htmlFor='discount'
              className='block text-sm font-medium text-gray-700'
            >
              discount
            </label>
            <input placeholder='discount....' className={classInput}
            value={dataForm.discount} 
            onChange={(e) => {
              setDataForm({...dataForm, discount: e.target.value})
            }}
            />
          </div>
        </div>

        <div className='grid md:grid-cols-12 gap-3 mt-4'>
          <div className='col-span-6'>
            <label
              htmlFor='first-name'
              className='block text-sm font-medium text-gray-700'
            >
              Category
            </label>
            <select
              className={classInput}
              value={dataForm.category} 
              onChange={(e) => {
                setDataForm({...dataForm, category: e.target.value})
              }}
            >
              {categories &&
                categories.data.map((item: any, index: any) => (
                  <option key={index.toString()} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className='col-span-6'>
            <label
              htmlFor='first-name'
              className='block text-sm font-medium text-gray-700'
            >
              Status
            </label>
            <select
              className={classInput}
              value={dataForm.status} 
            onChange={(e) => {
              setDataForm({...dataForm, status: e.target.value})
            }}
            >
              <option value={'active'}>Active</option>
              <option value={'draft'}>draft</option>
            </select>
          </div>
        </div>

        <div className=' flex justify-center items-center mt-10'>
          <button
            type='submit'
            className='w-64 bg-primary rounded shadow px-3 py-3 hover-bg-grey-200'
          >
            Simpan
          </button>
        </div>

        {JSON.stringify(imageUpload)}
      </div>
    </form>
  );
};

export default FormProduct;
