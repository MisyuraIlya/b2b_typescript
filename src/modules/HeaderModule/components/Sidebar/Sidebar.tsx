import React, { useState } from 'react';
import { MdViewHeadline, MdCategory, MdPublishedWithChanges } from "react-icons/md";
import './Sidebar.styles.scss';
import { Sidebar as ImportedSidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';
import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2'

const Sidebar = () => {
    const [active, setActive] = useState(false)
    return (
        <>
        <ProSidebarProvider>
            <div className='Sidebar_Icon'>
                    {/* <MdViewHeadline onClick={() => setActive(!active)}/> */}
                    <UseAnimations 
                    animation={menu2}
                    onClick={() => setActive(!active)}
                    size={40}
                    speed={3}
                    reverse={active}
                    />    

                </div>
                <div className={`Sidebar ${active ? 'active': null}`}>
                    
                <ImportedSidebar rtl={true}>
                    <Menu>
                        <SubMenu label="Charts" icon={<MdPublishedWithChanges/>}>
                        <MenuItem icon={<MdCategory/>}> Pie charts </MenuItem>
                        <MenuItem icon={<MdPublishedWithChanges/>}> Line charts </MenuItem>
                        </SubMenu>
                        <MenuItem icon={<MdPublishedWithChanges/>}> Documentation </MenuItem>
                        <MenuItem icon={<MdPublishedWithChanges/>}> Calendar </MenuItem>
                    </Menu>
                </ImportedSidebar>
            </div>

        </ProSidebarProvider>
        {/* {active&& <div className='background_fon_white' onClick={() => setActive(!active)}></div>} */}
        
        </>

    );
};

export default Sidebar;