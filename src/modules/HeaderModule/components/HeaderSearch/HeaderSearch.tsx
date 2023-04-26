import React, {FC, useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {IoMdClose} from 'react-icons/io'
import { useOutside } from '../../constructor';
import cn from 'clsx'
import './HeaderSearch.styles.scss'
import {Button} from '../../constructor';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '../../constructor';
import { useDebounce } from 'use-debounce';
import { TailSpin } from 'react-loader-spinner';

const mock: any[] = [
  {id:1, sku:'123', name:'productA', image:'https://amit-pastry-b2b.com/src/img//products/1023.jpg', price:10},
  {id:2, sku:'123',name:'productA', image:'https://amit-pastry-b2b.com/src/img//products/1023.jpg', price:10},
  {id:3, sku:'123',name:'productA', image:'https://amit-pastry-b2b.com/src/img//products/1023.jpg', price:10},
  {id:4, sku:'123',name:'productA', image:'https://amit-pastry-b2b.com/src/img//products/1023.jpg', price:10},
]
const HeaderSearch: FC = () => {
  const [value, setValue] = useState('')
  const {isShow, setIsShow, ref} = useOutside(false) 
  const [valueDebouce] = useDebounce(value, 1000);

  const {data, isLoading}= useQuery(['seach products',valueDebouce], async () => {
    if (valueDebouce) {
      return ProductService.getSimilar(valueDebouce);
    }
      return null;
  })

  return (
    <>
      <div className="HeaderSearch relative flex items-center justify-center">
        <div className="relative h-10 w-11/12  shadow">
          <input
            type="text"
            className="py-4 px-6 bg-transparent rounded-md focus:outline-none h-full w-full"
            placeholder="חיפוש..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="absolute top-0 left-0 bg-primary hover:bg-primary-dark rounded-l-md px-4 h-full">
            {value
            ? <IoMdClose size={20} onClick={() => setValue('')}/>
            : <AiOutlineSearch size={20} />
            }
          </button>
        </div>
          <div className={cn(
            'absolute rounded-md  shadow w-10/12 top-[4.2rem] bg-white dark:bg-secondary rounded-x1 text-sm menu z-20 text-white max-h-80 overflow-hidden',
            value ? 'open-menu' : 'close-menu'
          )}>
            <div className='relative'>
              {isLoading && 
              <div className='flex justify-center items-center mt-5 mb-5 h-56 min-h-full'>
                <TailSpin height="40" width="40"  ariaLabel="tail-spin-loading" radius="1" visible={true} />
              </div>
              }
              <div className='relative max-h-56 overflow-auto myBg'>
                {!isLoading &&  data ?
                    <div className=''>
                      {data.product?.map((item,index) => 
                        <div key={index} className='flex items-center hover:bg-primary/10 transition-colors duration-200 cursor-pointer'>
                          <img src={item.image} className='w-3/12 p-2'/>
                          <div>
                            <p className='text-sm text-black dark:text-white'>{item.name}</p>
                            <p className='text-sm text-black dark:text-white'>{item.sku}</p>
                          </div>  
                        </div>  
                      )}
                    </div>
                  : <div className='text-center pt-5'>
                      <p className='text-secondary'>לא נמצאו פריטים</p>
                    </div>
                  
                }
              </div>
              <div className='text-center item-center justify-center  w-full myBg'>
                  <Button variant='dark' className='btn-link mt-5 mb-2 rounded-md'>
                    כל התוצאטת {data?.total}
                  </Button>
              </div>   
            </div>  
        </div>  
      </div> 
    </>
  );
};

export default HeaderSearch;
