import React, {FC, useState} from 'react';
import { useCatalog } from '../../context/CatalogProvider';
import { ICategory } from '../../constructor';
import './CategoryList.styles.scss';
export interface mockCategorylvl1 {
    id: number
    name:string
    lvl2:mockCategorylvl2[]
}
export interface mockCategorylvl2 {
    id: number
    name:string
    lvl3:mockCategorylvl3[]
}
export interface mockCategorylvl3 {
    id: number
    name:string
}
export interface CategoryListProps{
    categories:mockCategorylvl1[]
}

const CategoryList: FC = () => {
    const [breadcrumbs, setBreadcrumbs] = useState<{lvl1: string | null, lvl2: string | null, lvl3: string | null}>({lvl1: null, lvl2:null , lvl3:null })
    const [activeLvl2, setActiveLvl2] = useState(0)
    const [activeLvl3, setActiveLvl3] = useState(0)
    const {CatalogMethods, categoriesData, totalSize, page} =useCatalog()
    const [selectedIds, setSelectedIds] = useState<{lvl1: number | null, lvl2: number | null, lvl3: number | null}>({ lvl1: null, lvl2: null, lvl3: null });

    const handleOpenLvl2 = (item: ICategory) => {
        let selected = {
            lvl1: item.id,
            lvl2: null,
            lvl3: null
        }
        let breadcrumbsName = {
            lvl1: item.name,
            lvl2: null,
            lvl3: null
        }
        setSelectedIds(selected);
        setBreadcrumbs(breadcrumbsName)
        CatalogMethods.fetchAllProducts(selected,totalSize,page )
        if(activeLvl2 === item.id) {
            setActiveLvl2(0)
        } else {
            setActiveLvl2(item.id)
        }
        
    }

    const handleOpenLvl3 = (item: ICategory) => {
        let selected = {
            lvl1: selectedIds.lvl1,
            lvl2: item.id,
            lvl3: null
        }
        let breadcrumbsName = {
            lvl1: breadcrumbs.lvl1,
            lvl2: item.name,
            lvl3: null
        }
        setSelectedIds(selected);
        setBreadcrumbs(breadcrumbsName)
        CatalogMethods.fetchAllProducts(selected,totalSize,page)
        if(activeLvl3 === item.id) {
            setActiveLvl2(0)
        } else {
            setActiveLvl3(item.id)
        }
    }

    const handleOpenLvl3Cat = (item: ICategory) => {
        let selected = {
            lvl1: selectedIds.lvl1,
            lvl2: selectedIds.lvl2,
            lvl3: item.id
        }
        let breadcrumbsName = {
            lvl1: breadcrumbs.lvl1,
            lvl2: breadcrumbs.lvl2,
            lvl3: item.name
        }
        setSelectedIds(selected);
        setBreadcrumbs(breadcrumbsName)
        CatalogMethods.fetchAllProducts(selected,totalSize,page)
    }

    return (
        <>
        <div className='Breadcrumbs'>
            <span>
                בית/
                {breadcrumbs.lvl1 && breadcrumbs.lvl2 ? 
                    `${breadcrumbs.lvl1}/` :
                    breadcrumbs.lvl1 &&
                    <span style={{fontWeight: 'bold'}}>{breadcrumbs.lvl1}/</span>
                }
                {breadcrumbs.lvl2 &&
                    <span style={{fontWeight: breadcrumbs.lvl3 ? 'normal' : 'bold'}}>
                        {breadcrumbs.lvl2}
                    </span>
                }
                {breadcrumbs.lvl3 && 
                    <span style={{fontWeight: 'bold'}}>/{breadcrumbs.lvl3}</span>
                }
            </span>
        </div>
        <div className='CategoryList'>
            {categoriesData?.map((item,index) => 
            <div key={index}>
                <div className='category_lvl1' key={index}>
                    <span onClick={() => handleOpenLvl2(item)}>{item.name}</span>
                </div>    
                {item?.children?.map((lvl2,index2) =>
                    <div key={index2}>
                    {activeLvl2 === item.id &&
                        <div className='category_lvl2' key={index2}>
                            <span onClick={() => handleOpenLvl3(lvl2)}>{lvl2.name}</span>
                        </div> 
                    }
                    {lvl2?.children?.map((lvl3,index3) =>
                    <div key={index3}>
                        {activeLvl3 === lvl2.id && activeLvl2 === item.id &&
                            <div className='category_lvl3' key={index3}>
                                <span onClick={() => handleOpenLvl3Cat(lvl3)}>{lvl3.name}</span>
                            </div>
                        }
                    </div>

                    )}  
                    </div>
                )}
            </div>

            )}
        </div>
        </>
 
    );
};

export default CategoryList;