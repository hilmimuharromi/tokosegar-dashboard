import { useState, useEffect } from 'react';
import { IconChevronLeft, IconChevronRight } from '../assets/icon';
interface PaginationProps {
  limit: number;
  totalData: number;
  currentPage: number;
  setCurrentPage: any;
  setLimit: any;
}

export default function Table(props: PaginationProps) {
  const { totalData, limit, setLimit, currentPage, setCurrentPage } = props;
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setTotalPage(Math.ceil(totalData / limit));
  }, [totalData, limit]);

  const getPages = () => {
    let content = [];
    for (let i = 1; i <= totalPage; i++) {
      //   const item = page[i];
      content.push(
        <button
          className={`bg-white text-jungleGreen flex inline-flex  shadow items-center px-4 py-2 border text-sm font-medium
            ${currentPage === i && 'border-jungleGreen'}
            `}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return content;
  };

  return (
    <div className='flex justify-end p-5'>
      <div className='px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
        <div className='flex-1 flex justify-between sm:hidden'>
          <a
            href='#'
            className='inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          >
            Previous
          </a>
          <a
            href='#'
            className='ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          >
            Next
          </a>
        </div>
        <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
          <div>
            <nav
              className='inline-flex rounded-md shadow-sm space-x-px'
              aria-label='Pagination'
            >
              <button
                className=' inline-flex items-center px-2 py-2 shadow rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                onClick={() => setCurrentPage(1)}
              >
                <span className='sr-only'>Previous</span>
                <IconChevronLeft fill={'#23AB96'} />
              </button>

              {getPages()}

              <button
                className=' inline-flex items-center px-2 py-2  shadow rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                onClick={() => setCurrentPage(totalPage)}
              >
                <span className='sr-only'>Next</span>
                <IconChevronRight fill={'#23AB96'} />
              </button>
            <select 
            className=" inline-flex items-center px-4 py-2 shadow rounded-md border border-gray-300 bg-white text-sm font-medium text-jungleGreen hover:bg-gray-50"
            onChange={(e) => setLimit(e.target.value)}
            value={limit}
            >
              <option value={5}>5 /page</option>
              <option value={10}>10 /page</option>
              <option value={20}>20 /page</option>
            </select>
            </nav>
          </div>
         
        </div>

      </div>
    </div>
  );
}
