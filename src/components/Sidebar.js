import React from 'react'
import './Sidebar.css'
import EditIcon from '@mui/icons-material/Edit';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SnoozeIcon from '@mui/icons-material/Snooze';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

const Sidebar = () => {
    return (
        <div className="Sidebar">

            <div className="Sidebar-Icon">
                <EditIcon />
                <button>Compose</button>
            </div>

            <SidebarOption selected={true} Icon={InboxIcon} title="Inbox" number={10} />

            <SidebarOption Icon={StarBorderIcon} title="Starred" />

            <SidebarOption Icon={SnoozeIcon} title="Snoozed" />

            <SidebarOption Icon={SendIcon} title="Send" />

            <SidebarOption Icon={DraftsIcon} title="Draft" />

            <SidebarOption Icon={ExpandMoreIcon} title="More" />

            <div className="Sidebar-Footer">
                <label className='SidebarFooter-Icon' >Labels</label>
                <AddIcon />
            </div>
        </div>
    )
}


export default Sidebar;