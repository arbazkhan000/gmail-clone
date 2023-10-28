import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({ selected, Icon, title, number }) => {
    return (
        <div className='SidebarOption'>
            <div className={`SidebarOption-Icon ${selected && "Sidebar-Active"}`}>
                <Icon />
              

                <div className="SidebarOptionIcon-Title">
                    <h4>{title}</h4>
                  
                </div>
                <p>{number}</p>
            </div>

        </div>

    )
}


export default SidebarOption