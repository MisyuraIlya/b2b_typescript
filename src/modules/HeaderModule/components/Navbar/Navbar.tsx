import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import './Navbar.styles.scss';
// import { useHeader } from '../../context/HeaderProvider';
import { ICategory, Z_INDEX } from '../../constructor';
import { CategoryService } from '../../constructor';
interface selectedIds {
    lvl1: number | null,
    lvl2: number | null,
    lvl3: number | null
  }
  
const Navbar = () => {
    const [isMouseOn, setIsMouseOn] = useState(true);
    const [modalItem, setModalItem] = useState<ICategory>()
    // const {data} = useHeader()
    const {data, isLoading}= useQuery(['category'], () => CategoryService.getAll())

    const [selectedIds, setSelectedIds] = useState<selectedIds>({ lvl1: null, lvl2: null, lvl3: null });

    const handleMouseEnter = (item: ICategory) => {
      setIsMouseOn(true);
      setModalItem(item)
    };
  
    const handleMouseLeave = () => {
      setIsMouseOn(false);
    };

    const handleOpenLvl2 = (id: number) => {
        setSelectedIds({ lvl1: id , lvl2: null, lvl3: null });
    }

    const handleOpenLvl3 = (id: number) => {
        setSelectedIds({ ...selectedIds, lvl2: id, lvl3: null });
    }

    return (
        <div onMouseLeave={handleMouseLeave}>
            <div className='Navbar'>
                <div className='list'>
                    <ul>
                        {data?.map((item,index) =>
                            <li key={index} className="pointer" onMouseEnter={() => handleMouseEnter(item)} onClick={() => handleOpenLvl2(item.id)}>
                                <p className='py-2 text-white '>{item.name}</p>
                            </li>
                        )}
                    </ul>
                </div>
                {isMouseOn &&
                <div className='modal' style={{zIndex:Z_INDEX.NAVBAR}} >
                    <div className='container myBg'>
                        <ul>
                            {modalItem?.children?.map((item,index) => 
                                <li key={index} className="pointer" onClick={() => handleOpenLvl3(item.id)} >
                                    <div>
                                        <div className='img_cont center p-4'>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className='title_cont center'>
                                            <p className='text-secondary dark:text-white'>{item.name}</p>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>    
                </div>
                }  
            </div>
        </div>

    );
};

export default Navbar;